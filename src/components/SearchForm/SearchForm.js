import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';


function SearchForm () {
    return (
        <div className='search-form'>
            <form className='form-film'>
                <div className='form-film__container'>
                    <input className='form-film__input' type='text' placeholder='Фильм' />
                    <button className='form-film__btn' type='button'>Найти</button>
                </div>
                <div className='form-film__checkbox'>
                    <FilterCheckbox />
                    <p className='form-film__title'>Короткометражки</p>
                </div>
            </form>
            
        </div>
    )
}

export default SearchForm;