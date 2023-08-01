import './Footer.css';
import { Link } from "react-router-dom";

function Footer() {
    const year = new Date().getFullYear();
    return (
        
        <section className='footer'>
            <p className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className='footer__container'>
                <p className='footer__date'>&copy; {year}</p>
                <div className='footer__links'>
                    <Link to="//practicum.yandex.ru" className='footer__link' target='_blank'>Яндекс.Практикум</Link>
                    <Link to='//github.com/YuliaDuk' className='footer__link' target='_blank'>Github</Link>
                </div>
            </div>
        </section>
        
       
    )
}
export default Footer;