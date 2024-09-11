import { useNavigate } from "react-router-dom";
import css from "./HomePage.module.css";

const HomePage = () => {
  const navigate = useNavigate();

  const navigateToCatalog = () => {
    navigate("/catalog", { replace: true });
  };

  return (
    <main className={css.heroContainer}>
      <h1 className={css.heroText}>Campers of your dreams</h1>
      <h2 className={css.heroSubtitleText}>
        You can find everything you want in our catalog
      </h2>
      <button className={css.heroBtn} onClick={navigateToCatalog}>
        View Now
      </button>
    </main>
  );
};

export default HomePage;
