import React from "react";
import InputField from "./common/InputField";
import SelectBox from "./common/SelectBox";

const Calculator = (props) => {
  return (
    <div className="rounded-box">
      <InputField
        type="text"
        handleChange={props.billAmount}
        placeholder="Enter bill amount"
        label="Bill Amount:"
        span={true}
        spanSign="$"
      />
      <SelectBox
        label="Rate Us:"
        handleChange={props.services}
        rates={props.rates}
      />
      <InputField
        type="number"
        handleChange={props.peopleCount}
        placeholder="Enter number of people"
        label="Share Among:"
        span={false}
      />
      <button type="submit" class="btn btn-success" onClick={props.onCalculate}>
        Calculate
      </button>
    </div>
  );
};
export default Calculator;
