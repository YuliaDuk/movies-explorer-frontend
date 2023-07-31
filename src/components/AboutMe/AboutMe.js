import './AboutMe.css';
import photo from '../../images/photo.jpg';
import { Link } from 'react-router-dom'

function AboutMe() {
    return (
        <section className='about-me'>
            <h2 className='about-me__title'>Студент</h2>
            <div className='about-me__container'>
                <div className='about-me__info'>
                    <h3 className='about-me__name'>Виталий</h3>
                    <p className='about-me__job'>Фронтенд-разработчик, 30 лет</p>
                    <p className='about-me__description'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и&nbsp;дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С&nbsp;2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб&#8209;разработке, начал заниматься фриланс&#8209;заказами&nbsp;и ушёл с постоянной работы.</p>
                    <Link to='//github.com/YuliaDuk' className='about-me__github-link' target='_blank'>Github</Link>
                </div>
                <img className='about-me__photo' src={photo} alt='Фотопортрет' />
            </div>
        </section>
    )
}

export default AboutMe;