import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';

        
function SavedMovies({handleCardSave, modifiedSavedMovies, handleSavedMovieCheckbocClick, searchFilmSubmit, emptyStatusSearchSavedFilm, errorSavedMovies}) {

    return (
        <div className='saved-movies'>
            <SearchForm searchFilmSubmit={searchFilmSubmit} handleCheckbocClick={handleSavedMovieCheckbocClick}/>
           <MoviesCardList emptyStatusSearchFilm={emptyStatusSearchSavedFilm} handleCardSave={handleCardSave} modifiedSavedMovies={modifiedSavedMovies} errorSearchMovies={errorSavedMovies}/>
        </div>
    )
}
export default SavedMovies;