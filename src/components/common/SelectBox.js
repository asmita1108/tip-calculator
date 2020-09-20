import React from "react";

const SelectBox = (props) => {
  return (
    <div className="form-group">
      <div className="input-group row">
        <label className="col-sm-3 col-form-label textLabel">
          {props.label}
        </label>

        <select
          className="form-control col-sm-9"
          id="exampleFormControlSelect1"
          onChange={props.handleChange}
        >
          <option key="Rate Us">Choose rating</option>
          {props.rates.map((rate, i) => {
            return (
              <option key={i} value={rate.quality}>
                {rate.quality} , So tip is {rate.tip * 100}%{" "}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};
export default SelectBox;
