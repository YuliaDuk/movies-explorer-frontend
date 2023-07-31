import PageWithForm from "../PageWithForm/PageWithForm";
import {useValidation} from '../../hooks/useValidation';

function Login() {
  const {values, isValid, handleChange, errors, resetForm} = useValidation()
  return (
    <PageWithForm
      title="Рады видеть!"
      textbutton="Войти"
      textlink="Регистрация"
      isregister="Ещё не зарегистрированы? "
      link = '/signup'
      formname='logForm'
      validityState ={isValid}
    >
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
      <label htmlFor="email-input" className="form__label">
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
export default Login;
