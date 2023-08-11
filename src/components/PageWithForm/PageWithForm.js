import "./PageWithForm.css";
import React from "react";
import { Link } from "react-router-dom";

function PageWithForm(props) {
  const btnStateClass = `${
    props.validityState
      ? "page-with-form__footer-btn"
      : "page-with-form__footer-btn page-with-form__footer-btn_disabled"
  }`;
  return (
    <section className="page-with-form">
      <div className="page-with-form__container">
        <Link to="/" className="page-with-form__icon" />
        <h1 className="page-with-form__title">{props.title}</h1>
        <form className="form" id={props.formname} onSubmit={props.onSubmit}>
          {props.children}
        </form>
      </div>
      <div className="page-with-form__footer">
        <button
          form={props.formname}
          className={btnStateClass}
          type="submit"
          aria-label={props.textbutton}
          disabled={!props.validityState}
        >
          {props.textbutton}
        </button>
        <p className="page-with-form__footer-text">
          {props.isregister}
          <Link to={`${props.link}`} className="page-with-form__footer-link">
            {props.textlink}
          </Link>
        </p>
      </div>
    </section>
  );
}

export default PageWithForm;
