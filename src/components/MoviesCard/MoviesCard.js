import './MoviesCard.css';
import { useLocation, Link } from 'react-router-dom';
import { useContext } from "react";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function MoviesCard(props) {
    const currentUser = useContext(CurrentUserContext);
    const location = useLocation();
    const isSaved = props.item.owner === currentUser.data._id;
    const movieSavedBtnClassName = `${location.pathname==='/movies' ? `${isSaved ? "movies-card__save-btn movies-card__save-btn_type_like" : "movies-card__save-btn movies-card__save-btn_type_unlike"}` : "movies-card__save-btn movies-card__save-btn_type_save"}`;

    function handleSavedBtnClick(){
        props.handleCardSave(props.item)
    }

    function durationInHoursAndMinutes(){
        const hours = Math.floor(props.item.duration/60);
        const minutes = props.item.duration%60;
        let durationInHours = ''
        if (hours<1){
            durationInHours = `${minutes} мин`
        }
        else {
            durationInHours = `${hours} ч ${minutes} мин`
        }
        return durationInHours
    }

    return (
        <article className='movies-card'>
            <Link to={props.item.trailerLink.replace('https:', '') } className='movies-card__link'  target="_blank"><img className='movies-card__img' src={props.item.image} alt={props.item.nameRU}></img></Link>
            <div className='movies-card__container'>
                <h2 className='movies-card__description'>{props.item.nameRU}</h2>
                <button type='button' onClick={handleSavedBtnClick} className= {movieSavedBtnClassName} aria-label="Сохранить"></button>
            </div>
            <p className='movies-card__duration'>{durationInHoursAndMinutes()}</p>
        </article>
    )
}
export default MoviesCard;