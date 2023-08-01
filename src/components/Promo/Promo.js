
import './Promo.css';
import img from '../../images/mainpage-img.png';
import { Link } from "react-scroll";

function Promo (){
    return(
        <div className='mainpage-background'>
            <section className='mainpage'>
                <div className='mainpage__container'>
                    <div className='mainpage__description'>
                        <h1 className='mainpage__title'>Учебный проект студента факультета Веб&#8209;разработки.</h1>
                        <p className='mainpage__subtitle'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                    </div>
                    <Link to='aboutproject' className='mainpage__btn'>Узнать больше</Link>
                </div>
                <img src={img} alt='Глобус' className='mainpage__img' />
            </section>
        </div>
    )
}

export default Promo;