import { useNavigate } from "react-router-dom";
import css from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <main className={css.detailPageContainer}>
      <p className={css.errorText}>
        There is nothing here, please, return to the Home page.
      </p>
    </main>
  );
};

export default NotFoundPage;
