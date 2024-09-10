import CampersList from "../../components/CampersList/CampersList";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchCampers } from "../../redux/campers/operations";
import css from "./CatalogPage.module.css";
import LocationPicklist from "../../components/LocationPicklist/LocationPicklist";
import Filters from "../../components/Filters/Filters";
import { changeLocationFilter } from "../../redux/filters/slice";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const [localLocationFilter, setLocalLocationFilter] = useState("");

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  const applyFilters = () => {
    dispatch(changeLocationFilter(localLocationFilter));
  };

  return (
    <div className={css.catalogContainer}>
      <div className={css.filtersContainer}>
        <div className={css.locationFilterContainer}>
          <p className={css.locationFilterText}>Location</p>
          <LocationPicklist callback={setLocalLocationFilter} />
        </div>
        <div className={css.featureFiltersContainer}>
          <p>Filters</p>
          <Filters
            title="Vehicle equipment"
            filters={["AC", "Automatic", "Kitchen", "TV", "Bathroom"]}
          />
          <Filters
            title="Vehicle type"
            filters={["Van", "Fully Integrated", "Alcove"]}
          />
        </div>
        <button className={css.filtersBtn} onClick={applyFilters}>
          Search
        </button>
      </div>
      <CampersList />
    </div>
  );
};

export default CatalogPage;
