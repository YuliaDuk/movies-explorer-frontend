import first from '../images/movies/1.png';
import second from '../images/movies/2.png';
import third from '../images/movies/3.png';
import fourth from '../images/movies/4.png';
import fifth from '../images/movies/5.png';
import sixth from '../images/movies/6.png';
import seventh from '../images/movies/7.png';
import eighth from '../images/movies/8.png';
import ninth from '../images/movies/9.png';
import tenth from '../images/movies/10.png';

const movies = [{
    duration: '1ч 42м',
    image: first,
    nameRU: "33 слова о дизайне",
    movieId: 1,
    savedmovie: true,
    },
    {
    duration: '1ч 42м',
    image: second,
    nameRU: "Киноальманах «100 лет дизайна»",
    movieId: 2,
    savedmovie: true,
    },
    {
    duration: '1ч 42м',
    image: third,
    nameRU: "Когда я думаю о Германии ночью»",
    movieId: 3,
    savedmovie: true,
    },
    {
    duration: '1ч 42м',
    image: fourth,
    nameRU: "Бег это свобода",
    movieId: 4,
    },
    {
    duration: '1ч 42м',
    image: fifth,
    nameRU: "Зона",
    movieId: 5,
    },
    {
    duration: '1ч 42м',
    image: sixth,
    nameRU: "Соберись перед прыжком",
    movieId: 6,
    },
    {
    duration: '1ч 42м',
    image: seventh,
    nameRU: "Пи Джей Харви: A dog called money",
    movieId: 7,
    },
        {
    duration: '1ч 42м',
    image: eighth,
    nameRU: "Дженис: Маленькая девочка грустит",
    movieId: 8,
    },
        {
    duration: '1ч 42м',
    image: ninth,
    nameRU: "Пи Джей Харви: A dog called money",
    movieId: 9,
    },
        {
    duration: '1ч 42м',
    image: tenth,
    nameRU: "В погоне за Бенкси",
    movieId: 10,
    },
        {
    duration: '1ч 42м',
    image: first,
    nameRU: "По волнам: Искусство звука в кино",
    movieId: 11,
    },
        {
    duration: '1ч 42м',
    image: second,
    nameRU: "Когда я думаю о Германии ночью",
    movieId: 12,
    },
    {
    duration: '1ч 42м',
    image: ninth,
    nameRU: "Пи Джей Харви: A dog called money",
    movieId: 13,
    },
        {
    duration: '1ч 42м',
    image: tenth,
    nameRU: "В погоне за Бенкси",
    movieId: 14,
    },
        {
    duration: '1ч 42м',
    image: first,
    nameRU: "По волнам: Искусство звука в кино",
    movieId: 15,
    },
        {
    duration: '1ч 42м',
    image: second,
    nameRU: "Когда я думаю о Германии ночью",
    movieId: 16,
    },
]
const errorValidationMSG = [
    {
        incorrLoginPassword: "Вы ввели неправильный логин или пароль.",
        invalidToken: "При авторизации произошла ошибка. Токен не передан или передан не в том формате.",
        incorrToken: "При авторизации произошла ошибка. Переданный токен некорректен.",
        duplicateEmail: "Пользователь с таким email уже существует.",
        registrationError: "При регистрации пользователя произошла ошибка.",
        updateProfileError: "При обновлении профиля произошла ошибка.",
        serverError: "500 На сервере произошла ошибка.",
        notFoundError: "404 Страница по указанному маршруту не найдена."
    }
]
    export  { movies, errorValidationMSG};
