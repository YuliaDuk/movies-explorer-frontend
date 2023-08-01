import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import { movies }from '../../utils/constants';

function SavedMovies() {
    const savedmovie=[];
    for(let i=0; i<movies.length; i++){
        if(movies[i].savedmovie){
            savedmovie.push(movies[i])
        }
    }
    const cardStatus = savedmovie.length;
    return (
        <div className='saved-movies'>
            <SearchForm />
           <MoviesCardList status={cardStatus} movies={savedmovie}/>
        </div>
    )
}
export default SavedMovies;