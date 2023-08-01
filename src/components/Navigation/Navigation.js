import './Navigation.css';
import profilelogo from '../../images/profile-icon.svg';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navigation({status, clickLink}) {
    const location = useLocation();
    return(
        <section className={status ? 'navigation  navigation_active' : 'navigation'}>
            <nav className='navigation__menu'>
                <ul className='navigation__items'>
                    <li className='navigation__item'>
                        <Link onClick={clickLink} to='/' className={`${location.pathname==='/' ? "navigation__link navigation__link_active" : "navigation__link"}`} >Главная</Link>
                    </li>
                    <li className='navigation__item'>
                        <Link onClick={clickLink} to='/movies' className={`${location.pathname==='/movies' ? "navigation__link navigation__link_active" : "navigation__link"}`}>Фильмы</Link>
                    </li>
                    <li className='navigation__item'>
                        <Link onClick={clickLink} to='/saved-movies' className={`${location.pathname==='/saved-movies' ? "navigation__link navigation__link_active" : "navigation__link"}`}>Сохранённые фильмы</Link>
                    </li>
                </ul>
                <Link onClick={clickLink} to='/profile' className="navigation__profile">
                    <p className="navigation__profile-btn-text">Аккаунт</p>
                    <img className="navigation__profile-btn-icon" alt="Профиль" src={profilelogo} />
                </Link>
            </nav>
        </section>
    )
}
export default Navigation;