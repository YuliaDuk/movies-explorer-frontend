import ok from '../../images/ok.png';
import cancel from '../../images/cancel.png'
import { usePopupClose } from "../../hooks/usePopupClose";
import './InfoTooltip.css';
import { ERRORVALIDATION_MSG, INFO_MSG } from '../../utils/constants';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function InfoToolTip(props) {
  const location = useLocation();
  const [error, setError] = useState(ERRORVALIDATION_MSG.REGISTRATION_ERROR)

  function setSpanError(){
    if(location.pathname==='/signup' && props.registrationError===ERRORVALIDATION_MSG.ERROR_409){
      setError(ERRORVALIDATION_MSG.DUPLICATE_EMAIL)
    }
    if(location.pathname==='/signin' && props.loginError===ERRORVALIDATION_MSG.ERROR_401){
      setError(ERRORVALIDATION_MSG.INCORR_LOGIN_PASSWORD)
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
            props.status ? INFO_MSG.SUCSSESS : INFO_MSG.UNSUCSSESS
          }
        />
        <h3 className="popup__name popup__name_type_infotooltip">
          {props.status
            ? `${location.pathname==='/profile'? INFO_MSG.PROFILE_SUCSSESS:INFO_MSG.REGISTRATION_SUCSSESS}`
            : error}
        </h3>
      </div>
    </div>
  );
}
export default InfoToolTip;