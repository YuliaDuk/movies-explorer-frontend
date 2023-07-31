import "./Profile.css";

function Profile() {
  return (
    <section className="profile">
      <div className="profile__container">
        <h1 className="profile__title">Привет, Виталий!</h1>
        <form className="profile-form">
          <div className="profile-form__container">
            <label htmlFor="name-input" className="profile-form__label">
              Имя
            </label>
            <input
              type="text"
              name="name"
              id="name-input"
              className="profile-form__input"
              placeholder="Имя"
              value='Виталий'
              disabled
            />
          </div>
          <div className="profile-form__container">
            <label htmlFor="email-input" className="profile-form__label">
              E-mail
            </label>
            <input
              type="email"
              name="email"
              id="email-input"
              className="profile-form__input"
              placeholder="E-mail"
              value='pochta@yandex.ru'
              disabled
            />
          </div>
        </form>
      </div>
      <div className="profile__footer">
        <span className="profile__err-text">
          При обновлении профиля произошла ошибка.
        </span>
        <button className="profile__red-btn" type="button" aria-label="Редактировать">
          Редактировать
        </button>
        <button className="profile__exit-btn" type="button" aria-label="Выйти">
          Выйти из аккаунта
        </button>
        <button className="profile__save-btn" type="button" aria-label="Сохранить">
          Сохранить
        </button>
      </div>
    </section>
  );
}

export default Profile;
