import './PageNotFound.css';
import { useNavigate } from "react-router-dom";

function PageNotFound () {
    const navigate = useNavigate();
    
    function goBack() {
        navigate(-1);
    }
    return (
        <section className='page-not-found'>
            <div className='page-not-found__container'>
                <h1 className='page-not-found__title'>404</h1>
                <p className='page-not-found__subtitle'>Страница не найдена</p>
            </div>
            <button onClick={goBack} className='page-not-found__btn'>Назад</button>
        </section>
    )
}

export default PageNotFound;