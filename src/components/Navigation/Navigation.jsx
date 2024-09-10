import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";
import sprite from "../../images/icons.svg";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const Navigation = () => {
  return (
    <header className={css.header}>
      <div className={css.headerContainer}>
        <nav className={css.navigationContainer}>
          <div className={css.logoNavigationContainer}>
            <NavLink to="/">
              <svg width="136" height="16">
                <use href={`${sprite}#logo`} />
              </svg>
            </NavLink>
          </div>
          <div className={css.textNavigationContainer}>
            <NavLink to="/" className={buildLinkClass}>
              Home
            </NavLink>
            <NavLink to="/catalog" className={buildLinkClass}>
              Catalog
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
