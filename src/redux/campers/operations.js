import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  formatTypeQueryParam,
  formatEquipmentQueryParam,
} from "../../helpers/formattingHelper";
import axios from "axios";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";
const LIMIT = 4;

export const fetchCamperById = createAsyncThunk(
  "campers/fetchSingle",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/campers/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchCampers = createAsyncThunk(
  "campers/fetch",
  async (_, thunkAPI) => {
    const { campers, filters } = thunkAPI.getState();
    const filteredCampers = [...campers.items];
    const allFilters = filters.allFilters;
    let currentPageAPI = campers.currentPageAPI;
    const currentPage = campers.currentPage;
    let isLastPage = false;

    try {
      if (filteredCampers.length < currentPage * LIMIT) {
        while (true) {
          const response = await axios.get(
            `/campers?page=${currentPageAPI}&limit=${LIMIT}${formatTypeQueryParam(
              allFilters.typeFilter
            )}${formatEquipmentQueryParam(
              allFilters.equipmentFilter,
              "transmission"
            )}${formatEquipmentQueryParam(
              allFilters.equipmentFilter,
              "ac"
            )}${formatEquipmentQueryParam(
              allFilters.equipmentFilter,
              "kitchen"
            )}${formatEquipmentQueryParam(
              allFilters.equipmentFilter,
              "tv"
            )}${formatEquipmentQueryParam(
              allFilters.equipmentFilter,
              "bathroom"
            )}`
          );

          for (let i = 0; i < response.data.items.length; i++) {
            let matchFilters = true;

            if (
              allFilters.locationFilter !== "" &&
              !response.data.items[i].location
                .toLowerCase()
                .includes(allFilters.locationFilter)
            ) {
              matchFilters = false;
            }

            if (matchFilters) {
              filteredCampers.push(response.data.items[i]);
            }
          }

          currentPageAPI += 1;

          if (response.data.total <= LIMIT * (currentPageAPI - 1)) {
            isLastPage = true;
            break;
          }

          if (filteredCampers.length >= LIMIT * currentPage) {
            break;
          }
        }
      }

      return {
        items: filteredCampers,
        currentPageAPI,
        isLastPage:
          (isLastPage &&
            filteredCampers.length > LIMIT * (currentPage - 1) &&
            filteredCampers.length <= LIMIT * currentPage) ||
          filteredCampers.length === 0,
      };
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
