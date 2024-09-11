import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchCamperById } from "../../redux/campers/operations";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentCamper } from "../../redux/campers/selectors";
import { clearCurrentCamper } from "../../redux/campers/slice";
import ImageGallery from "../../components/ImageGallery/ImageGallery";
import RatingLocation from "../../components/RatingLocation/RatingLocation";
import css from "./CamperDetailsPage.module.css";
import clsx from "clsx";

const CamperDetailsPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const currentCamper = useSelector(selectCurrentCamper);

  useEffect(() => {
    dispatch(fetchCamperById(id));
    return () => {
      dispatch(clearCurrentCamper());
    };
  }, [dispatch]);

  if (!currentCamper) {
    return <p>Loading...</p>;
  }

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
    </main>
  );
};

export default CamperDetailsPage;
