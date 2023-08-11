import React from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useState, useEffect } from "react";
import Main from "../Main/Main";
import "./App.css";
import PageNotFound from "../PageNotFound/PageNotFound";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Footer from "../Footer/Footer";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import mainApi from "../../utils/MainApi";
import movieApi from "../../utils/MoviesApi";
import * as auth from "../../utils/auth";
import ProtectedRouteElement from "../ProtectedRoute/ProtectedRoute";
import InfoToolTip from "../InfoTooltip/InfoTooltip";
import Preloader from "../Preloader/Preloader";
import searchWithString from "../../utils/searchWithString";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const routeWithHeder = ["/", "/movies", "/saved-movies", "/profile"];
  const routeWithFooter = ["/", "/movies", "/saved-movies"];
  const [currentUser, setCurrentUser] = useState({ data: {} });
  const [loggedIn, setLoggedIn] = useState(false);
  const [isInfoTooltipPopupOpen, setInfoTooltipPopupOpen] = useState(false);
  const [statusInfoTooltip, setStatusInfoTooltip] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorUpdateProfile, seterrorUpdateProfile] = useState("");
  const [errorSearchMovies, setErrorSearchMovies] = useState(false);
  const [errorSavedMovies, setErrorSavedMovies] = useState("");
  const [statusPreloader, setStatusPreloader] = useState(false);
  const [emptyStatusSearchFilm, setEmptyStatusSearchFilm] = useState(false);
  const [searchFilms, setSearchFilms] = useState([]);
  const [modifiedMovies, setModifiedMovies] = useState([]);
  const [modifiedSavedMovies, setModifiedSavedMovies] = useState([]);
  const [emptyStatusSearchSavedFilm, setEmptyStatusSearchSavedFilm] =
    useState(false);
  const [registrationError, setRegistrationError] = useState("");
  const [loginError, setLoginError] = useState("");

  useEffect(() => {
    tokenCheck();
    setEmptyStatusSearchFilm(false);
    setErrorSearchMovies(false);
    if (loggedIn) {
      renderSavedMovies();
    }
    if (!loggedIn) {
      setModifiedMovies([]);
      setSearchFilms([]);
    }
  }, [loggedIn]);

  useEffect(() => {
    setPreviousSearch();
  }, []);

  //РЕГИСТРАЦИЯ
  function handleRegistration(name, email, password) {
    auth
      .register(name, email, password)
      .then(() => {
        handleLogin(email, password);
      })
      .then(() => {
        setStatusInfoTooltip(true);
      })
      .catch((err) => {
        console.log(err);
        setRegistrationError(err);
        setStatusInfoTooltip(false);
      })
      .finally(() => {
        setInfoTooltipPopupOpen(true);
      });
  }

  //ЛОГИН
  function handleLogin(email, password) {
    setLoginError("");
    auth
      .authorize(email, password)
      .then((data) => {
        if (data.token) {
          tokenCheck();
          setLoggedIn(true);
          navigate("/movies", { replace: true });
        }
      })
      .catch((err) => {
        setStatusInfoTooltip(false);
        setLoginError(err);
        console.log(err);
        setInfoTooltipPopupOpen(true);
      });
  }

  //ПРОВЕРКА ТОКЕНА
  const tokenCheck = () => {
    const token = localStorage.getItem("token");
    if (token) {
      auth
        .getContent(token)
        .then((res) => {
          if (res) {
            setCurrentUser(res);
            setLoggedIn(true);
            navigate(location.pathname, { replace: true });
          }
        })
        .catch((err) => console.log(err));
    }
  };

  //ЗАКРЫТИЕ ПОПАПОВ УСПЕШНАЯ РЕГИСТРАЦИЯ/НЕ УСПЕШНАЯ
  function closeAllPopups() {
    setInfoTooltipPopupOpen(false);
  }

  //РЕДАКТИРОВАНИЕ ПРОФИЛЯ
  function handleProfileChangeSubmit(newname, newemail) {
    seterrorUpdateProfile(false);
    setIsLoading(true);
    mainApi
      .redProfile(newname, newemail)
      .then((res) => {
        setCurrentUser(res);
        setInfoTooltipPopupOpen(true);
        setStatusInfoTooltip(true);
      })
      .catch((err) => {
        seterrorUpdateProfile(err);
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  //ВЫХОД
  function signOut() {
    localStorage.clear();
    setLoggedIn(false);
    navigate("/", { replace: true });
  }

  //КОНВЕРТАЦИЯ В НАШУ БД
  function convertToBD(arr) {
    const newarr = {};
    newarr.country = arr.country;
    newarr.director = arr.director;
    newarr.duration = arr.duration;
    newarr.year = arr.year;
    newarr.description = arr.description;
    newarr.image = `https://api.nomoreparties.co${arr.image.url}`;
    newarr.trailerLink = arr.trailerLink;
    newarr.thumbnail = `https://api.nomoreparties.co${arr.image.formats.thumbnail.url}`;
    newarr.movieId = arr.id;
    newarr.nameRU = arr.nameRU;
    newarr.nameEN = arr.nameEN;
    return newarr;
  }

  //ПОЛУЧЕНИЕ СОХРАНЕННЫХ ФИЛЬМОВ ИЗ БД
  function renderSavedMovies() {
    mainApi
      .getSavedMovies()
      .then((res) => {
        localStorage.setItem("savedMovies", JSON.stringify(res.data));
        setModifiedSavedMovies(res.data);
      })
      .catch((err) => console.log(err));
  }

  //ПОЛУЧЕНИЕ ФИЛЬМОВ С СЕРВЕРА
  function firstMovieSearch(str) {
    setStatusPreloader(true);
    const moviesFromBeatFilm = [];
    movieApi
      .getMovies()
      .then((res) => {
        setErrorSearchMovies(false);
        res.forEach((film) => {
          const convertedMovie = convertToBD(film);
          moviesFromBeatFilm.push(convertedMovie);
        });
        localStorage.setItem(
          "moviesFromBeat",
          JSON.stringify(moviesFromBeatFilm)
        );
      })
      .then(() => {
        searchFilmSubmit(str);
      })
      .catch((err) => {
        console.log(err);
        setErrorSearchMovies(true);
      })
      .finally(() => {
        setStatusPreloader(false);
      });
  }

  //ПОИСК ФИЛЬМОВ ПО СТРОКЕ
  function searchFilmSubmit(str) {
    localStorage.setItem("searchString", str);
    setEmptyStatusSearchFilm(false);
    setStatusPreloader(true);
    const newsearchmovies = [];
    const moviesFromBeat = JSON.parse(localStorage.getItem("moviesFromBeat"));
    mainApi
      .getSavedMovies()
      .then((moviesFromDB) => {
        moviesFromBeat.forEach((film) => {
          if (moviesFromDB.data.find((item) => item.movieId === film.movieId)) {
            film.owner = moviesFromDB.data.find(
              (item) => item.movieId === film.movieId
            ).owner;
          }
          if (searchWithString(film, str)) {
            newsearchmovies.push(searchWithString(film, str));
          }
        });
      })
      .then(() => {
        localStorage.setItem("searchedArray", JSON.stringify(newsearchmovies));
        setSearchFilms(newsearchmovies);
        setModifiedMovies(newsearchmovies);
        if (newsearchmovies.length === 0) {
          setEmptyStatusSearchFilm(true);
        }
        if (localStorage.getItem("checkbox") === "true") {
          setModifiedMovies(newsearchmovies.filter((c) => c.duration < 40));
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setStatusPreloader(false);
      });
  }

  //ПОИСК СОХРАНЕНЫХ ФИЛЬМОВ ПО СТРОКЕ
  function searchSavedFilmSubmit(str) {
    setEmptyStatusSearchSavedFilm(false);
    const newsearchmovies = [];
    const savedMovies = JSON.parse(localStorage.getItem("savedMovies"));
    savedMovies.forEach((film) => {
      if (searchWithString(film, str)) {
        newsearchmovies.push(searchWithString(film, str));
      }
    });
    setModifiedSavedMovies(newsearchmovies);
    if (newsearchmovies.length === 0) {
      setEmptyStatusSearchSavedFilm(true);
    }
  }

  //ПРЕДЫДУЩИЙ ПОИСК
  function setPreviousSearch() {
    if (JSON.parse(localStorage.getItem("searchedArray"))) {
      const seachedArray = JSON.parse(localStorage.getItem("searchedArray"));
      setModifiedMovies(seachedArray);
      setSearchFilms(seachedArray);
      if (seachedArray.length === 0) {
        setEmptyStatusSearchFilm(true);
      }
      if (localStorage.getItem("checkbox") === "true") {
        handleCheckbocClick(true);
      }
    }
  }
  //УДАЛЕНИЕ И СОХРАНЕНИЕ ФИЛЬМОВ
  function handleCardSave(movie) {
    const isSaved = movie.owner === currentUser.data._id;
    const searchedArray = JSON.parse(localStorage.getItem("searchedArray"));
    if (!isSaved) {
      mainApi
        .addNewMovie(movie)
        .then((resMovie) => {
          const savedMovies = JSON.parse(localStorage.getItem("savedMovies"));
          savedMovies.push(resMovie.data);
          localStorage.setItem("savedMovies", JSON.stringify(savedMovies));

          setSearchFilms((state) =>
            state.map((c) =>
              c.movieId === resMovie.data.movieId ? resMovie.data : c
            )
          );
          setModifiedMovies((state) =>
            state.map((c) =>
              c.movieId === resMovie.data.movieId ? resMovie.data : c
            )
          );
          searchedArray.forEach((film) => {
            if (film.movieId === resMovie.data.movieId) {
              film.owner = resMovie.data.owner;
            }
          });
        })
        .then(() => {
          localStorage.setItem("searchedArray", JSON.stringify(searchedArray));
        })
        .catch((err) => console.log(err));
    }
    if (isSaved) {
      const savedMovies = JSON.parse(localStorage.getItem("savedMovies"));
      movie._id = savedMovies.find(
        (item) => item.movieId === movie.movieId
      )._id;
      mainApi
        .deleteMovie(movie._id)
        .then(() => {
          const savedMovies = JSON.parse(localStorage.getItem("savedMovies"));
          localStorage.setItem(
            "savedMovies",
            JSON.stringify(savedMovies.filter((c) => c._id !== movie._id))
          );
          searchedArray.forEach((film) => {
            if (film.movieId === movie.movieId) {
              film.owner = "";
            }
          });
          setSearchFilms(searchedArray);
          setModifiedMovies(searchedArray);
        })
        .then(() => {
          localStorage.setItem("searchedArray", JSON.stringify(searchedArray));
        });
    }
  }

  //ЧЕКБОКС КОРОТКОМЕТРАЖЕК В ФИЛЬМАХ
  function handleCheckbocClick(stateCheckbox) {
    localStorage.setItem("checkbox", stateCheckbox);
    if (stateCheckbox) {
      setModifiedMovies(searchFilms.filter((c) => c.duration < 40));
    } else {
      setModifiedMovies(searchFilms);
    }
  }

  //ЧЕКБОКС КОРОТКОМЕТРАЖЕК В СОХРАНЕННЫХ ФИЛЬМАХ
  function handleSavedMovieCheckbocClick(stateCheckbox) {
    if (stateCheckbox) {
      setModifiedSavedMovies(
        modifiedSavedMovies.filter((c) => c.duration < 40)
      );
    } else {
      setModifiedSavedMovies(JSON.parse(localStorage.getItem("savedMovies")));
    }
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        {routeWithHeder.includes(location.pathname) ? (
          <Header loggedIn={loggedIn} />
        ) : (
          ""
        )}
        <InfoToolTip
          isOpen={isInfoTooltipPopupOpen}
          onClose={closeAllPopups}
          status={statusInfoTooltip}
          registrationError={registrationError}
          loginError={loginError}
        />
        <Preloader status={statusPreloader} />
        <main className="main">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route
              path="/movies"
              element={
                <ProtectedRouteElement
                  element={Movies}
                  searchFilms={modifiedMovies}
                  searchFilmSubmit={searchFilmSubmit}
                  loggedIn={loggedIn}
                  emptyStatusSearchFilm={emptyStatusSearchFilm}
                  handleCardSave={handleCardSave}
                  handleCheckbocClick={handleCheckbocClick}
                  errorSearchMovies={errorSearchMovies}
                  firstMovieSearch={firstMovieSearch}
                />
              }
            />
            <Route
              path="/saved-movies"
              element={
                <ProtectedRouteElement
                  element={SavedMovies}
                  handleCardSave={handleCardSave}
                  searchFilmSubmit={searchSavedFilmSubmit}
                  emptyStatusSearchSavedFilm={emptyStatusSearchSavedFilm}
                  loggedIn={loggedIn}
                  modifiedSavedMovies={modifiedSavedMovies}
                  handleSavedMovieCheckbocClick={handleSavedMovieCheckbocClick}
                  errorSavedMovies={errorSavedMovies}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRouteElement
                  element={Profile}
                  error={errorUpdateProfile}
                  buttonText={isLoading ? "Сохранение..." : "Сохранить"}
                  loggedIn={loggedIn}
                  signOut={signOut}
                  handleProfileChangeSubmit={handleProfileChangeSubmit}
                />
              }
            />
            <Route
              path="/signup"
              element={<Register handleRegistration={handleRegistration} />}
            />
            <Route
              path="/signin"
              element={<Login handleLogin={handleLogin} />}
            />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>
        {routeWithFooter.includes(location.pathname) ? <Footer /> : ""}
        <Navigation />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
