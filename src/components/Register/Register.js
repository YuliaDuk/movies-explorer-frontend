import PageWithForm from "../PageWithForm/PageWithForm";
import { useValidation } from "../../hooks/useValidation";
import { REGEXP_EMAIL, REGEXP_NAME } from "../../utils/constants";



function Register(props) {
  const { values, isValid, handleChange, errors, resetForm } = useValidation();
  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleRegistration(values.name, values.email, values.password);
    resetForm()
  };

  return (
    <PageWithForm
      title="Добро пожаловать!"
      textbutton="Зарегистрироваться"
      textlink="Войти"
      isregister="Уже зарегистрированы? "
      link="/signin"
      formname="regForm"
      validityState={isValid}
      onSubmit={handleSubmit}
    >
      <label htmlFor="name-input" className="form__label">
        Имя
      </label>
      <input
        className="form__input"
        type="text"
        id="name-input"
        name="name"
        onChange={handleChange}
        placeholder="Введите имя"
        minLength={2}
        maxLength={30}
        pattern={REGEXP_NAME}
        required
        value={values.name || ''}
        autoComplete="off"
      />
      <span className="form__input-error name-input-error">{errors.name}</span>
      <label htmlFor="email-input" className="form__label">
        E-mail
      </label>
      <input
        className="form__input"
        type="email"
        id="email-input"
        name="email"
        onChange={handleChange}
        placeholder="Введите электронную почту"
        pattern={REGEXP_EMAIL}
        required
        value={values.email || ''}
        autoComplete="off"
        
      />
      <span className="form__input-error email-input-error">
        {errors.email}
      </span>
      <label htmlFor="password-input" className="form__label">
        Пароль
      </label>
      <input
        className="form__input"
        type="password"
        id="password-input"
        name="password"
        autoComplete="new-password"
        onChange={handleChange}
        placeholder="Введите пароль не менее 8 символов"
        minLength={8}
        value={values.password || ''}
        required
      />
      <span className="form__input-error password-input-error">
        {errors.password}
      </span>
    </PageWithForm>
  );
}

export default Register;
