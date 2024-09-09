import CampersList from "../../components/CampersList/CampersList";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCampers } from "../../redux/campers/operations";
import { selectLoading } from "../../redux/campers/selectors";
import { useSelector } from "react-redux";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <>{isLoading ? <div>"Request in progress..."</div> : <CampersList />}</>
  );
};

export default CatalogPage;
