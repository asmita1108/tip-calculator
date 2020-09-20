import React from "react";

const InputField = (props) => {
  console.log(props.span);
  return (
    <div class="form-group">
      <div class="input-group row">
        <label for="forBill" class="col-sm-3 col-form-label textLabel">
          {props.label}
        </label>
        <div class="col-sm-9">
          {props.span ? (
            <div className="row">
              <span class="input-group-addon col-sm-1">{props.spanSign}</span>
              <input
                type={props.type}
                class="form-control col-sm-11"
                id={props.label}
                placeholder={props.placeholder}
                onChange={props.handleChange}
              ></input>
            </div>
          ) : (
            <div className="row">
              <input
                type={props.type}
                class="form-control col-sm-12"
                id={props.label}
                placeholder={props.placeholder}
                onChange={props.handleChange}
              ></input>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InputField;
