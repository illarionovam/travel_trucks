import CampersList from "../../components/CampersList/CampersList";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCampers } from "../../redux/campers/operations";
import css from "./CatalogPage.module.css";
import LocationPicklist from "../../components/LocationPicklist/LocationPicklist";

const CatalogPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <div className={css.catalogContainer}>
      <div className={css.filtersContainer}>
        <div className={css.locationFilterContainer}>
          <p className={css.locationFilterText}>Location</p>
          <LocationPicklist />
        </div>
        <div className={css.featureFiltersContainer}>
          <p>Filters</p>
          <div className={css.equipmentFiletrsContainer}>
            <h3>Vehicle equipment</h3>
          </div>
          <div className={css.typeFilterContainer}>
            <h3>Vehicle type</h3>
          </div>
        </div>
      </div>
      <CampersList />
    </div>
  );
};

export default CatalogPage;
