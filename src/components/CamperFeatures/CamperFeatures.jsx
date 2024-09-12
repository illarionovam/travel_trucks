import css from "./CamperFeatures.module.css";
import FeatureItemsList from "../FeatureItemsList/FeatureItemsList";
import VehicleDetail from "../VehicleDetail/VehicleDetail";

const CamperFeatures = ({ data }) => {
  return (
    <div className={css.feturesContainer}>
      <FeatureItemsList data={data} />
      <div className={css.vehicleDetails}>
        <h3 className={css.detailsTitle}>Vehicle details</h3>
        <div className={css.separatorLine}></div>
        <div className={css.vehicleSizesContainer}>
          <VehicleDetail name="Form" value={data.form} />
          <VehicleDetail name="Length" value={data.length} />
          <VehicleDetail name="Width" value={data.width} />
          <VehicleDetail name="Height" value={data.height} />
          <VehicleDetail name="Tank" value={data.tank} />
          <VehicleDetail name="Consumption" value={data.consumption} />
        </div>
      </div>
    </div>
  );
};

export default CamperFeatures;
