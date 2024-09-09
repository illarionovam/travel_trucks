import { useSelector } from "react-redux";
import { selectCampers } from "../../redux/campers/selectors";
import CamperItem from "../CamperItem/CamperItem";

const CampersList = () => {
  const campers = useSelector(selectCampers);

  return (
    <ul>
      {campers.map((camper_i) => (
        <li key={camper_i.id}>
          <CamperItem data={camper_i} />
        </li>
      ))}
    </ul>
  );
};

export default CampersList;
