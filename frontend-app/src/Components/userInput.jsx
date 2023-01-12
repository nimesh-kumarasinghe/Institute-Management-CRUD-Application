import React from "react";

function UserInput(props) {
  const changeHandler = (e) => {
    e.preventDefault();
    props.onChange(e.target);
  };
  return (
    <div className="form-group mt-3">
      <label>{props.label}</label>
      <input
        type={props.type}
        className="form-control mt-2"
        placeholder={props.placeholder}
        id={props.id}
        name={props.id}
        onChange={changeHandler}
        required="true"
      />
    </div>
  );
}

export default UserInput;
