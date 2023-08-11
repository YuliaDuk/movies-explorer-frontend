import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies({
  searchFilmSubmit,
  searchFilms,
  emptyStatusSearchFilm,
  handleCardSave,
  handleCheckbocClick,
  errorSearchMovies,
  firstMovieSearch
}) {
  return (
    <div className="movies">
      <SearchForm
        handleCheckbocClick={handleCheckbocClick}
        searchFilmSubmit={searchFilmSubmit}
        firstMovieSearch={firstMovieSearch}

      />
      <MoviesCardList
        handleCheckbocClick={handleCheckbocClick}
        emptyStatusSearchFilm={emptyStatusSearchFilm}
        movies={searchFilms}
        handleCardSave={handleCardSave}
        errorSearchMovies={errorSearchMovies}
      />
    </div>
  );
}
export default Movies;
