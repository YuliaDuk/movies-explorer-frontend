const errorValidationMSG = 
    {
        incorrLoginPassword: "Вы ввели неправильный логин или пароль.",
        invalidToken: "При авторизации произошла ошибка. Токен не передан или передан не в том формате.",
        incorrToken: "При авторизации произошла ошибка. Переданный токен некорректен.",
        duplicateEmail: "Пользователь с таким email уже существует.",
        registrationError: "При регистрации пользователя произошла ошибка.",
        updateProfileError: "При обновлении профиля произошла ошибка.",
        serverError: "500 На сервере произошла ошибка.",
        notFoundError: "404 Страница по указанному маршруту не найдена.",
        searchFormError: 'Нужно ввести ключевое слово',
        nothingSearched: "Ничего не найдено",
        serverErrorSearch: "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
    }

const REGEXP_EMAIL = "^([^ ]+@[^ ]+\\.[a-z]{2,6}|)$";
// eslint-disable-next-line no-useless-escape
const REGEXP_NAME = '^[A-Za-zА-Яа-яЁё\\-\\s]+$';



export  { errorValidationMSG, REGEXP_EMAIL, REGEXP_NAME };
