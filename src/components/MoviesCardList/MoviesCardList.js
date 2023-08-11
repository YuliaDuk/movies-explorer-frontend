import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useState, useEffect } from "react";
import { errorValidationMSG } from "../../utils/constants";
import { useLocation} from "react-router-dom";

function MoviesCardList({
  movies,
  emptyStatusSearchFilm,
  savedMovieStatus,
  handleCardSave,
  cardSavedButtonClassName,
  savedMovies,
  errorSearchMovies,
}) {
  const [maxMovieNum, setMaxMovieNum] = useState(16);
  const [addMovieNum, setAddMovieNum] = useState(4);
  const [width, setWidth] = useState(window.innerWidth);
  const [spanText, setSpanText] = useState("");
  const [emptyError, setEmptyError] = useState("");
  const location = useLocation();

  function setSpanError() {
    if (errorSearchMovies) {
      setSpanText(errorValidationMSG.serverErrorSearch);
    }
    if (JSON.parse(localStorage.getItem("moviesFromBeat"))) {
      setSpanText("");
    }
  }
  useEffect(() => {
    setSpanError();
  }, [errorSearchMovies]);

  function setEmptySearchError() {
    if (emptyStatusSearchFilm) {
      setEmptyError(errorValidationMSG.nothingSearched);
    }
    if (!emptyStatusSearchFilm) {
      setEmptyError("");
    }
  }
  
  useEffect(() => {
    setEmptySearchError();
  }, [emptyStatusSearchFilm]);

  useEffect(() => {
    if (location.pathname === "/saved-movies") {
      setSpanText("");
    }
  }, []);

  window.addEventListener("resize", function (e) {
    setTimeout((e) => {
      setWidth(window.innerWidth);
    }, 10000);
  });

  function handleMoreClick() {
    setMaxMovieNum(maxMovieNum + addMovieNum);
  }

  useEffect(() => {
    if (width < 651) {
      setMaxMovieNum(5);
      setAddMovieNum(2);
    } else if (width < 769) {
      setMaxMovieNum(8);
      setAddMovieNum(2);
    } else if (width < 1281) {
      setMaxMovieNum(16);
      setAddMovieNum(4);
    }
  }, [width]);

  return (
    <>
      <span className="movies-card-list__error">{spanText || emptyError}</span>
      <ul className="movies-card-list">
        {(movies || savedMovies).slice(0, maxMovieNum).map((movie) => (
          <li className="movies-card-list__item" key={movie.movieId}>
            <MoviesCard
              item={movie}
              savedMovieStatus={savedMovieStatus}
              handleCardSave={handleCardSave}
              cardSavedButtonClassName={cardSavedButtonClassName}
            />
          </li>
        ))}
      </ul>
      {location.pathname === "/movies" ? (
        <button
          type="button"
          onClick={handleMoreClick}
          disabled={maxMovieNum >= movies.length}
          className={`${
            maxMovieNum >= movies.length
              ? "movies-card-list-btn movies-card-list-btn_disabled"
              : "movies-card-list-btn"
          }`}
        >
          Ещё
        </button>
      ) : (
        ""
      )}
    </>
  );
}

export default MoviesCardList;
