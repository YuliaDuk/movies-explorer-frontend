import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { useValidation } from "../../hooks/useValidation";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function SearchForm({ searchFilmSubmit, handleCheckbocClick, firstMovieSearch }) {
  const location = useLocation();
  const [isSearchInputSavedMoviesSubmit, setSearchInputSavedMoviesSubmit] = useState(false);
  const { values, isValid, handleChange, errors, setIsValid, setValues } = useValidation();

  function submitForm(e) {
    setSearchInputSavedMoviesSubmit(!isSearchInputSavedMoviesSubmit);
    e.preventDefault();
    if(location.pathname==='/movies' && !JSON.parse(localStorage.getItem("moviesFromBeat"))){
      firstMovieSearch(values.searchfilm)
    }
    else searchFilmSubmit(values.searchfilm);

  }

  useEffect(() => {
    setIsValid(true);
  }, []);

  useEffect(() => {
    if (location.pathname === "/movies") {
      setValues({
        searchfilm: localStorage.getItem("searchString"),
      });
    }
  }, [setValues]);

  
  return (
    <div className="search-form">
      <form onSubmit={submitForm} className="form-film">
        <div className="form-film__container">
          <input
            id="searchfilm-input"
            name="searchfilm"
            className="form-film__input"
            type="text"
            placeholder="Фильм"
            minLength={2}
            required
            value={values.searchfilm || ""}
            onChange={handleChange}
          />
          <button className="form-film__btn" type="submit" disabled={!isValid}>
            Найти
          </button>
        </div>
        <span
          className={
            errors.searchfilm 
              ? "form-film__input-error form-film__input-error_active"
              : "form-film__input-error"
          }
        >
          Нужно ввести ключевое слово
        </span>
        <div className="form-film__checkbox">
          <FilterCheckbox
            isSearchInputSavedMoviesSubmit={isSearchInputSavedMoviesSubmit}
            handleCheckbocClick={handleCheckbocClick}
          />
          <p className="form-film__title">Короткометражки</p>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;
