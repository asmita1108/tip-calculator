import React from "react";

const SelectBox = (props) => {
  return (
    <div class="form-group">
      <div className="input-group row">
        <label for="staticEmail" class="col-sm-3 col-form-label textLabel">
          {props.label}
        </label>

        <select
          class="form-control col-sm-9"
          id="exampleFormControlSelect1"
          onChange={props.handleChange}
        >
          <option>Rate Us</option>
          {props.rates.map((rate, i) => {
            return <option id={i}>{rate.quality}</option>;
          })}
        </select>
      </div>
    </div>
  );
};
export default SelectBox;
