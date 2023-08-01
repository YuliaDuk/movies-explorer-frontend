import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard'

function MoviesCardList ({movies, status}) {
    return (
        <>
        <section className='movies-card-list'>
            {movies.map((movie)=>
            <MoviesCard key={movie.movieId} item={movie} status={status}/>)}
        </section>
        <button type='button' className='movies-card-list-btn'>Ещё</button>
        
        </>
    )
}

export default MoviesCardList;