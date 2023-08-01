import './Portfolio.css';
import arrow from '../../images/arrow.png';
import { Link } from 'react-router-dom';

function Portfolio() {
    return (
        <section className='portfolio'>
            <h2 className='portfolio__title'>Портфолио</h2>
            <ul className='portfolio__items'>
                <li className='portfolio__item'>
                    <Link to="//github.com/YuliaDuk/how-to-learn" className='portfolio__link' target='_blank'>
                        <h3 className='portfolio__item-title'>Статичный сайт</h3>
                        <img className='portfolio__arrow' alt='Стрелка' src={arrow}/>
                    </Link>
                </li>
                <li className='portfolio__item'>
                    <Link to="//github.com/YuliaDuk/russian-travel" className='portfolio__link' target='_blank'>
                        <h3 className='portfolio__item-title'>Адаптивный сайт</h3>
                        <img className='portfolio__arrow' alt='Стрелка' src={arrow}/>
                    </Link>
                </li>
                <li className='portfolio__item'>
                    <Link to='//github.com/YuliaDuk/react-mesto-api-full-gha' className='portfolio__link' target='_blank'>
                        <h3 className='portfolio__item-title'>Одностраничное приложение</h3>
                        <img className='portfolio__arrow' alt='Стрелка' src={arrow}/>
                    </Link>
                </li>
            </ul>
        </section>
    )
}

export default Portfolio;