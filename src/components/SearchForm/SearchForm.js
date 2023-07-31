import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';


function SearchForm () {
    return (
        <section className='search-form'>
            <form className='form-film'>
                <input className='form-film__input' type='text' placeholder='Фильм' />
                <button className='form-film__btn' type='button'>Найти</button>
            </form>
            <div className='short-films'>
                <FilterCheckbox />
                <p className='short-films__title'>Короткометражки</p>
            </div>
        </section>
    )
}

export default SearchForm;