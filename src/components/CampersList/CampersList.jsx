import { useSelector, useDispatch } from "react-redux";
import {
  selectFilteredCampers,
  selectCurrentPage,
  selectIsLastPage,
  selectLoading,
  selectError,
} from "../../redux/campers/selectors";
import { changeCurrentPage } from "../../redux/campers/slice";
import { fetchCampers } from "../../redux/campers/operations";
import CamperItem from "../CamperItem/CamperItem";
import css from "./CampersList.module.css";
import Loader from "../Loader/Loader";

const CampersList = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectFilteredCampers);
  const currentPage = useSelector(selectCurrentPage);
  const isLastPage = useSelector(selectIsLastPage);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const handleClick = () => {
    dispatch(changeCurrentPage(currentPage + 1));
    dispatch(fetchCampers());
  };

  if (error) {
    return (
      <div className={css.rightSideContainer}>
        <p className={css.errorText}>
          Something's gone wrong. Please, try again later.
        </p>
      </div>
    );
  }

  if (loading && campers.length === 0) {
    return <Loader />;
  }

  if (campers.length === 0) {
    return (
      <div className={css.rightSideContainer}>
        <p className={css.errorText}>
          There is nothing we can suggest you at the moment.
        </p>
      </div>
    );
  }

  return (
    <div className={css.rightSideContainer}>
      <ul className={css.cardsContainer}>
        {campers.map((camper_i) => (
          <li key={camper_i.id}>
            <CamperItem data={camper_i} />
          </li>
        ))}
      </ul>
      {!isLastPage && (
        <button className={css.loadMoreBtn} onClick={handleClick}>
          Load more
        </button>
      )}
    </div>
  );
};

export default CampersList;
