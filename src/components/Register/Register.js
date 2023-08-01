import PageWithForm from "../PageWithForm/PageWithForm";
import {useValidation} from '../../hooks/useValidation';

function Register() {
  const {values, isValid, handleChange, errors, resetForm} = useValidation()
  return (
    <PageWithForm
      title="Добро пожаловать!"
      textbutton="Зарегистрироваться"
      textlink="Войти"
      isregister="Уже зарегистрированы? "
      link = '/signin'
      formname='regForm'
      validityState={isValid}
    >
      <label htmlFor="name-input" className="form__label">
        Имя
      </label>
      <input className="form__input" type="text" id="name-input" name="name" onChange={handleChange} minLength={2} maxLength={30} required/>
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
        required
      />
      <span className="form__input-error email-input-error">{errors.email}</span>
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
        required
      />
      <span className="form__input-error password-input-error">{errors.password}</span>
    </PageWithForm>
  );
}

export default Register;
