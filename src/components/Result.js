import React from "react";
import Label from "./common/Label";

const Result = (props) => {
  return (
    <div id="results" className="rounded-box results-box">
      <Label label="Tip Amount :" value={props.tip} />
      <Label label="Total Bill :" value={props.totalBill} />
      <Label label="Each Share :" value={props.eachShare} />
    </div>
  );
};
export default Result;
