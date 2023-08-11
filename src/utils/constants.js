const ERRORVALIDATION_MSG = 
    {
        INCORR_LOGIN_PASSWORD: "Вы ввели неправильный логин или пароль.",
        INVALID_TOKEN: "При авторизации произошла ошибка. Токен не передан или передан не в том формате.",
        INCORR_TOKEN: "При авторизации произошла ошибка. Переданный токен некорректен.",
        DUPLICATE_EMAIL: "Пользователь с таким email уже существует.",
        REGISTRATION_ERROR: "При регистрации пользователя произошла ошибка.",
        UPDATE_PROFILE_ERROR: "При обновлении профиля произошла ошибка.",
        SERVER_ERROR: "500 На сервере произошла ошибка.",
        NOT_FOUND_ERROR: "404 Страница по указанному маршруту не найдена.",
        SEARCH_FORM_ERROR: 'Нужно ввести ключевое слово',
        NOTHING_SEARCHED: "Ничего не найдено",
        SERVER_ERROR_SEARCH: "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз",
        ERROR_401: "Ошибка 401",
        ERROR_409: "Ошибка 409"
    }

const  INFO_MSG =
    {
        SUCSSESS: 'Все прошло успешно',
        UNSUCSSESS: 'Что-то пошло не так',
        PROFILE_SUCSSESS: "Данные профиля обновлены!",
        REGISTRATION_SUCSSESS: "Вы успешно зарегистрированы!"

    }

const REGEXP_EMAIL = "^([^ ]+@[^ ]+\\.[a-z]{2,6}|)$";
// eslint-disable-next-line no-useless-escape
const REGEXP_NAME = '^[A-Za-zА-Яа-яЁё\\-\\s]+$';



export  { ERRORVALIDATION_MSG, INFO_MSG, REGEXP_EMAIL, REGEXP_NAME };
