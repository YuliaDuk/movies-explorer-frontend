import "./Header.css";
import React from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import profilelogo from "../../images/profile-icon.svg";
import Navigation from "../Navigation/Navigation";
import { disablePageScroll, enablePageScroll } from 'scroll-lock';

function Header() {
  const [loggedIn, setLoggedIn] = useState(true);
  const location = useLocation();
  console.log(location.path === "/saved-movies");
  const headerBackgroundClass = `${
    location.pathname === "/" ? "header-background-profile_type_mainpage header-background-profile" : "header-background-profile"
  }`;
  const [burgerBtnClass, setBurgerBtnClass] = useState(false);
  const [statusBurger, setStatusBurger] = useState(false);
  function handleBurgerClick() {
    setBurgerBtnClass(!burgerBtnClass);
    setStatusBurger(!statusBurger);
    statusBurger ? enablePageScroll() : disablePageScroll();
  }
  return (
    <div className={headerBackgroundClass}>
      <header className="header">
        <Link to="/" className="header__logo" />
        {!loggedIn ? (
          <nav className="header__btn-container">
            <Link to="./signup" className="header__btn">
              Регистрация
            </Link>
            <Link to="/signin" className="header__btn header__btn_active">
              Войти
            </Link>
            
          </nav>
        ) : (
          <>
            
            <nav className="header__films">
              <Link
                to="./movies"
                className={`${
                  location.pathname === "/movies"
                    ? "header__film-btn header__film-btn_type_active"
                    : "header__film-btn"
                } ${
                  location.pathname === "/"
                    ? "header__film-btn_type_mainpage"
                    : "header__film-btn_type_other"
                }`}
              >
                Фильмы
              </Link>
              <Link
                to="./saved-movies"
                className={`${
                  location.pathname === "/saved-movies"
                    ? "header__film-btn header__film-btn_type_active"
                    : "header__film-btn"
                } ${
                  location.pathname === "/"
                    ? "header__film-btn_type_mainpage"
                    : "header__film-btn_type_other"
                }`}
              >
                Сохраненные фильмы
              </Link>
            </nav>
            <Link to="/profile" className="header__profile-btn-container">
              <p className="header__profile-btn-text">Аккаунт</p>
              <img
                className="header__profile-btn-icon"
                alt="Профиль"
                src={profilelogo}
              />
            </Link>
            <button
              aria-label="Меню"
              type="button"
              onClick={handleBurgerClick}
              className={
                burgerBtnClass
                  ? "header__burger  header__burger_type_active"
                  : `${
                      location.pathname === "/"
                        ? "header__burger header__burger_type_header"
                        : "header__burger"
                    }`
              }
            >
              <span
                className={
                  location.pathname === "/"
                    ? "header__span header__span_type_header"
                    : "header__span"
                }
              ></span>
            </button>
            <Navigation clickLink={handleBurgerClick} status={statusBurger}></Navigation>
          </>
        )}
      </header>
    </div>
  );
}

export default Header;
