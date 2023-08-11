import "./Profile.css";
import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useValidation } from "../../hooks/useValidation";
import { REGEXP_EMAIL, REGEXP_NAME } from "../../utils/constants";
import { errorValidationMSG } from "../../utils/constants";

function Profile(props) {
  const { values, isValid, handleChange, resetForm, setValues } = useValidation();
  const currentUser = useContext(CurrentUserContext);
  const [statusFooterBtn, setStatusFooterBtn] = useState(true);
  const [textError, setTextError] = useState("");

  function delSpanError() {
    setTextError("");
  }

  function handleRedBtnClick() {
    setStatusFooterBtn(!statusFooterBtn);
  }

  function handleChangeSubmit(e) {
    e.preventDefault();
    props.handleProfileChangeSubmit(values.newname, values.newemail);
    resetForm();
  }

  useEffect(() => {
    if (props.error === "Ошибка: 409") {
      setTextError(errorValidationMSG.duplicateEmail);
    } else if (props.error) {
      setTextError(errorValidationMSG.updateProfileError);
    } else setTextError("");
  }, [props.error]);

  useEffect(() => {
    setTextError("");
  }, []);

  useEffect(() => {
    setValues({
      newname: currentUser.data.name,
      newemail: currentUser.data.email,
    });
  }, [setValues, currentUser]);
  
  return (
    <section className="profile">
      <div className="profile__container">
        <h1 className="profile__title">Привет, {currentUser.data.name}!</h1>
        <form
          onSubmit={handleChangeSubmit}
          className="profile-form"
          id="profile-form"
        >
          <div className="profile-form__container">
            <label htmlFor="name-input" className="profile-form__label">
              Имя
            </label>
            <input
              type="text"
              name="newname"
              id="newname-input"
              className="profile-form__input"
              placeholder="Имя"
              value={values.newname || ""}
              disabled={statusFooterBtn}
              onChange={handleChange}
              minLength={2}
              maxLength={30}
              pattern={REGEXP_NAME}
              onFocus={delSpanError}
            />
          </div>
          <div className="profile-form__container">
            <label htmlFor="email-input" className="profile-form__label">
              E-mail
            </label>
            <input
              onFocus={delSpanError}
              type="email"
              name="newemail"
              id="newemail-input"
              className="profile-form__input"
              placeholder="Электронная почта"
              value={values.newemail || ""}
              disabled={statusFooterBtn}
              onChange={handleChange}
              pattern={REGEXP_EMAIL}
            />
          </div>
        </form>
      </div>
      <div
        className={`${
          statusFooterBtn
            ? "profile__footer"
            : "profile__footer profile__footer_inactive"
        }`}
      >
        <button
          onClick={handleRedBtnClick}
          className="profile__red-btn"
          type="button"
          aria-label="Редактировать"
        >
          Редактировать
        </button>
        <Link onClick={props.signOut} to="/" className="profile__exit-btn">
          Выйти из аккаунта
        </Link>
      </div>
      <div
        className={`${
          statusFooterBtn
            ? "profile__footer  profile__footer_inactive"
            : "profile__footer"
        }`}
      >
        <span className="profile__err-text">{textError}</span>
        <button
          form="profile-form"
          className={
            !isValid || (values.newname===currentUser.data.name && values.newemail===currentUser.data.email)
              ? "profile__save-btn profile__save-btn_disabled"
              : "profile__save-btn"
          }
          type="submit"
          aria-label="Сохранить"
          disabled={!isValid || (values.newname===currentUser.data.name && values.newemail===currentUser.data.email)}
        >
          {props.buttonText}
        </button>
      </div>
    </section>
  );
}

export default Profile;
