import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const navigateToCatalog = () => {
    navigate("/catalog", { replace: true });
  };

  return (
    <main>
      <h1>Campers of your dreams</h1>
      <h2>You can find everything you want in our catalog</h2>
      <button onClick={navigateToCatalog}>View Now</button>
    </main>
  );
};

export default HomePage;
