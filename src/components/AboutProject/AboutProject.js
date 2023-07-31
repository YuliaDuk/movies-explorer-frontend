import './AboutProject.css';

function AboutProject() {
    return(
        <section className='aboutproject' title='aboutproject'>
            <h2 className='aboutproject__title'>О проекте</h2>
            <div className='aboutproject__container'>
                <div className='aboutproject__description'>
                    <h3 className='aboutproject__descr-title'>Дипломный проект включал 5 этапов</h3>
                    <p className='aboutproject__descr-subtitle'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className='aboutproject__description'>
                    <h3 className='aboutproject__descr-title'>На выполнение диплома ушло 5 недель</h3>
                    <p className='aboutproject__descr-subtitle'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className='aboutproject__timing'>
                <div className='aboutproject__one-week'>
                    <p className='aboutproject__text-weeks'>1 неделя</p>
                    <p className='aboutproject__text-span'>Back-end</p>
                </div>
                <div className='aboutproject__four-weeks'>
                    <p className='aboutproject__text-weeks'>4 недели</p>
                    <p className='aboutproject__text-span'>Front-end</p>
                </div>
            </div>
        </section>
    )
}
export default AboutProject;