import "./FilterCheckbox.css";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function FilterCheckbox({ handleCheckbocClick, isSearchInputSavedMoviesSubmit}) {
  const location = useLocation();
  const chekboxState = function () {
    if (
      location.pathname === "/movies" &&
      localStorage.getItem("checkbox") === "true"
    ) {
      return true;
    } 
    else return false;
  };
  const [checked, setChecked] = useState(chekboxState);

  useEffect(() => {
    handleCheckbocClick(checked);
  }, [checked]);

  useEffect(()=>{
    setChecked(chekboxState)
  }, [isSearchInputSavedMoviesSubmit])
  
  return (
    <label className="switch">
      <input
        className="switch__checkbox"
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      <span className="switch__slider" />
    </label>
  );
}
export default FilterCheckbox;
