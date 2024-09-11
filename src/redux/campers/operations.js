import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const fetchCampers = createAsyncThunk(
  "campers/fetch",
  async (_, thunkAPI) => {
    const { campers, filters } = thunkAPI.getState();
    const filteredCampers = [...campers.items];
    const allFilters = filters.allFilters;
    let currentPageAPI = campers.currentPageAPI;
    let isLastPage = false;
    let addedItems = 0;

    try {
      while (true) {
        const response = await axios.get(
          `/campers?page=${currentPageAPI}&limit=4`
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

          if (
            allFilters.typeFilter !== "" &&
            response.data.items[i].form !== allFilters.typeFilter
          ) {
            matchFilters = false;
          }

          if (allFilters.equipmentFilter.length !== 0) {
            if (
              allFilters.equipmentFilter.includes("ac") &&
              !response.data.items[i].AC
            ) {
              matchFilters = false;
            }
            if (
              allFilters.equipmentFilter.includes("transmission") &&
              response.data.items[i].transmission !== "automatic"
            ) {
              matchFilters = false;
            }
            if (
              allFilters.equipmentFilter.includes("kitchen") &&
              !response.data.items[i].kitchen
            ) {
              matchFilters = false;
            }
            if (
              allFilters.equipmentFilter.includes("tv") &&
              !response.data.items[i].TV
            ) {
              matchFilters = false;
            }
            if (
              allFilters.equipmentFilter.includes("bathroom") &&
              !response.data.items[i].bathroom
            ) {
              matchFilters = false;
            }
          }

          if (matchFilters) {
            filteredCampers.push(response.data.items[i]);
            addedItems += 1;
          }
        }

        if (response.data.total <= 4 * currentPageAPI) {
          isLastPage = true;
          break;
        }

        currentPageAPI += 1;

        if (addedItems >= 4) {
          break;
        }
      }

      return {
        items: filteredCampers,
        currentPageAPI,
        isLastPage: isLastPage,
      };
    } catch (e) {
      console.log(e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
