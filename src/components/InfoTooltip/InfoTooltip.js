import ok from '../../images/ok.png';
import cancel from '../../images/cancel.png'
import { usePopupClose } from "../../hooks/usePopupClose";
import './InfoTooltip.css';
import { errorValidationMSG } from '../../utils/constants';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function InfoToolTip(props) {
  const location = useLocation();
  const [error, setError] = useState(errorValidationMSG.registrationError)

  function setSpanError(){
    if(location.pathname==='/signup' && props.registrationError==="Ошибка 409"){
      setError(errorValidationMSG.duplicateEmail)
    }
    if(location.pathname==='/signin' && props.loginError==="Ошибка 401"){
      setError(errorValidationMSG.incorrLoginPassword)
    }
}
  useEffect(()=>{ 
    setSpanError()
  
  },[props.isOpen])
 
    usePopupClose(props.isOpen, props.onClose)
  return (
    <div
      className={`popup popup_type_infotooltip ${
        props.isOpen ? `popup_opened` : ""
      }`}
    >
      <div className="popup__container popup__container_type_infotooltip">
        <button
          onClick={props.onClose}
          type="button"
          className="popup__close-icon"
          aria-label="Закрыть"
        />
        <img
          src={props.status ? ok : cancel}
          className="popup__icon"
          alt={
            props.status ? "Успешная регистрация" : "Не успешная регистрация"
          }
        />
        <h3 className="popup__name popup__name_type_infotooltip">
          {props.status
            ? `${location.pathname==='/profile'? "Данные профиля обновлены!":"Вы успешно зарегистрированы!"}`
            : error}
        </h3>
      </div>
    </div>
  );
}
export default InfoToolTip;