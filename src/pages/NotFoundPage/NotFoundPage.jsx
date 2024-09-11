import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/", { replace: true });
  };

  return (
    <main>
      <p>There is nothing here. Please, go back to Home page.</p>
      <button onClick={navigateToHome}>Back Home</button>
    </main>
  );
};

export default NotFoundPage;
