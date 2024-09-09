import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <header>
      TravelTrucks
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/catalog">Catalog</NavLink>
      </nav>
    </header>
  );
};

export default Navigation;
