import PageWithForm from "../PageWithForm/PageWithForm";
import {useValidation} from '../../hooks/useValidation';
import { REGEXP_EMAIL } from "../../utils/constants";

function Login(props) {
  const {values, isValid, handleChange, errors, resetForm} = useValidation();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!values.email || !values.password) {
      return;
    }
    props.handleLogin(values.email, values.password);
    resetForm();
  };

  return (
    <PageWithForm
      title="Рады видеть!"
      textbutton="Войти"
      textlink="Регистрация"
      isregister="Ещё не зарегистрированы? "
      link = '/signup'
      formname='logForm'
      validityState={isValid}
      onSubmit={handleSubmit}
    >
      <label htmlFor="email-input" className="form__label">
        E-mail
      </label>
      <input
        className="form__input"
        type="email"
        id="email-input"
        name="email"
        value={values.email || ""}
        onChange={handleChange}
        placeholder="Введите электронную почту"
        pattern={REGEXP_EMAIL}
        required
        autoComplete="off"
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
        value={values.password || ""}
        onChange={handleChange}
        placeholder="Введите пароль"
        minLength={8}
        required
      />
      <span className="form__input-error password-input-error">{errors.password}</span>
    </PageWithForm>
  );
}
export default Login;
