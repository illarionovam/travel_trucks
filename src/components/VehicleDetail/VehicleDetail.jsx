import css from "./VehicleDetail.module.css";

const VehicleDetail = ({ name, value }) => {
  const valueToLabel = {
    panelTruck: "Van",
    fullyIntegrated: "Fully Integrated",
    alcove: "Alcove",
  };

  const formatValue = (name, value) => {
    if (name === "Form") return valueToLabel[value];
    if (name === "Consumption") return value;
    return value.length < 2
      ? value
      : value.slice(0, -1) + " " + value.charAt(value.length - 1);
  };

  return (
    <div className={css.detailItem}>
      <p className={css.text}>{name}</p>
      <p className={css.text}>{formatValue(name, value)}</p>
    </div>
  );
};

export default VehicleDetail;
