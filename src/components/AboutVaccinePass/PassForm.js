import React, { useState } from "react";
import "./PassForm.css";
import { NavLink } from "react-router-dom";
function PassForm() {
  const [enteredName, setEnteredName] = useState("");
  const enteredNameIsValid = enteredName.trim() !== "";
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
  const [isCheck, setIsCheck] = useState(true);

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
  };

  function checkboxHandler(event) {
    setIsCheck(event.target.checked);
  }

  function submitHandler(event) {
    event.preventDefault();
    setEnteredNameTouched(true);
    if (!enteredNameIsValid) {
      return;
    }
    if (!isCheck) {
      setIsCheck(false);
    }
    if (!enteredNameIsValid && !isCheck) {
      return;
    }
    console.log(enteredName);
    setEnteredName("");
    setEnteredNameTouched(false);
    setIsCheck(false);
    }
  

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";
  return (
    <form onSubmit={submitHandler}>
      <div className="form-control">
        <label htmlFor="name">Enter First & Last Name to Sign</label>
        <br></br>
        <div className="form-date">
          <label htmlFor="date">Date of Acceptance</label>
          <br></br>
          <input type="date" id="date" />
        </div>
        <div className={nameInputClasses}>
          <input
            type="text"
            id="name"
            value={enteredName}
            onChange={nameInputChangeHandler}
            onBlur={nameInputBlurHandler}
          />
        </div>

        {nameInputIsInvalid && <p className="error">Name must not be empty.</p>}
      </div>
      <h4>Name must match your health plan card information</h4>
      <div className="form-control">
        <input type="checkbox" id="terms" onChange={checkboxHandler}></input>
        <label for="terms">
          I accept the <NavLink to="/window/terms"> terms and conditions</NavLink>
        </label>
        {!isCheck && (
          <p className="error">You must agree to the terms and conditons</p>
        )}
      </div>

      <button className="button">Confirm acceptance</button>
    </form>
  );
}

export default PassForm;
