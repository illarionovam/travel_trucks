import CampersList from "../../components/CampersList/CampersList";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCampers } from "../../redux/campers/operations";
import css from "./CatalogPage.module.css";
import LocationPicklist from "../../components/LocationPicklist/LocationPicklist";
import Filters from "../../components/Filters/Filters";
import { applyFilters } from "../../redux/filters/slice";
import { changeCurrentPage } from "../../redux/campers/slice";

const CatalogPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  const handleClick = () => {
    dispatch(applyFilters());
    dispatch(changeCurrentPage(1));
    dispatch(fetchCampers());
  };

  return (
    <main className={css.catalogContainer}>
      <div className={css.filtersContainer}>
        <div className={css.locationFilterContainer}>
          <p className={css.locationFilterText}>Location</p>
          <LocationPicklist />
        </div>
        <div className={css.featureFiltersContainer}>
          <p>Filters</p>
          <Filters
            title="Vehicle equipment"
            filters={["AC", "Automatic", "Kitchen", "TV", "Bathroom"]}
            onlyOneItem={false}
          />
          <Filters
            title="Vehicle type"
            filters={["Van", "Fully Integrated", "Alcove"]}
            onlyOneItem={true}
          />
        </div>
        <button className={css.filtersBtn} onClick={handleClick}>
          Search
        </button>
      </div>
      <CampersList />
    </main>
  );
};

export default CatalogPage;
