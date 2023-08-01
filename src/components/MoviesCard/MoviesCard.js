import './MoviesCard.css';

function MoviesCard(props) {
    const cardSavedButtonClassName = `movies-card__save-btn ${props.status ? "movies-card__save-btn_type_save" : "movies-card__save-btn_type_unlike"}`
    return (
        <article className='movies-card'>
            <img className='movies-card__img' src={props.item.image} alt={props.item.nameRU}></img>
            <div className='movies-card__container'>
                <h2 className='movies-card__description'>{props.item.nameRU}</h2>
                <button type='button' className={cardSavedButtonClassName} aria-label="Сохранить"></button>
            </div>
            <p className='movies-card__duration'>{props.item.duration}</p>
        </article>
    )
}
export default MoviesCard;