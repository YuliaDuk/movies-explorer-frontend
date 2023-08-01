import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard'

function MoviesCardList ({movies, status}) {
    return (
        <>
        <ul className='movies-card-list'>
            {movies.map((movie)=>
            <li className='movies-card-list__item'>
                <MoviesCard key={movie.movieId} item={movie} status={status}/>
            </li>)}
        </ul>
        <button type='button' className='movies-card-list-btn'>Ещё</button>
        
        </>
    )
}

export default MoviesCardList;