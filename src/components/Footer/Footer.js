import './Footer.css';
import { Link } from "react-router-dom";

function Footer() {
    const year = new Date().getFullYear();
    return (
        
        <footer className='footer'>
            <p className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className='footer__container'>
                <p className='footer__date'>&copy; {year}</p>
                <ul className='footer__links'>
                    <li className='footer__item'><Link to="//practicum.yandex.ru" className='footer__link' target='_blank'>Яндекс.Практикум</Link></li>
                    <li className='footer__item'><Link to='//github.com/YuliaDuk' className='footer__link' target='_blank'>Github</Link></li>
                </ul>
            </div>
        </footer>
        
       
    )
}
export default Footer;