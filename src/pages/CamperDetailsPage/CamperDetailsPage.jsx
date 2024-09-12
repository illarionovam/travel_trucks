import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchCamperById } from "../../redux/campers/operations";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCurrentCamper,
  selectOpenFeatures,
} from "../../redux/campers/selectors";
import {
  clearCurrentCamper,
  changeOpenFeatures,
} from "../../redux/campers/slice";
import ImageGallery from "../../components/ImageGallery/ImageGallery";
import RatingLocation from "../../components/RatingLocation/RatingLocation";
import css from "./CamperDetailsPage.module.css";
import clsx from "clsx";
import CamperFeatures from "../../components/CamperFeatures/CamperFeatures";
import CamperReviews from "../../components/CamperReviews/CamperReviews";

const CamperDetailsPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const currentCamper = useSelector(selectCurrentCamper);
  const openFeatures = useSelector(selectOpenFeatures);
  console.log(openFeatures);

  useEffect(() => {
    dispatch(fetchCamperById(id));
    return () => {
      dispatch(clearCurrentCamper());
      dispatch(changeOpenFeatures(true));
    };
  }, [dispatch]);

  if (!currentCamper) {
    return <p>Loading...</p>;
  }

  const buildButtonClass = (withHover) => {
    return clsx(css.invisibleButton, withHover && css.withHover);
  };

  return (
    <main className={css.detailPageContainer}>
      <div className={css.mainInfo}>
        <div className={css.mainInfoTitleBlock}>
          <h2 className={css.title}>{currentCamper.name}</h2>
          <RatingLocation
            rating={currentCamper.rating}
            reviewsCount={currentCamper.reviews.length}
            location={currentCamper.location}
          />
          <p className={clsx(css.title, css.price)}>
            &#8364;{currentCamper.price.toFixed(2)}
          </p>
        </div>
        <ImageGallery images={currentCamper.gallery} />
        <p className={css.description}>{currentCamper.description}</p>
      </div>
      <div className={css.subNavigation}>
        <button
          className={buildButtonClass(openFeatures)}
          onClick={() => dispatch(changeOpenFeatures(true))}
        >
          Features
        </button>
        <button
          className={buildButtonClass(!openFeatures)}
          onClick={() => dispatch(changeOpenFeatures(false))}
        >
          Reviews
        </button>
      </div>
      <div className={css.separatorLine}></div>
      <div className={css.outletContainer}>
        {openFeatures ? (
          <CamperFeatures data={currentCamper} />
        ) : (
          <CamperReviews reviews={currentCamper.reviews} />
        )}
      </div>
    </main>
  );
};

export default CamperDetailsPage;
