import React, { Component } from "react";
import Calculator from "./Calculator";
import Result from "./Result";
import "../App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      billAmount: 0,
      tip: 0,
      totalBill: 0,
      peopleCount: 0,
      eachShare: 0,
      rating: "",
      showBill: false,
      rates: [
        {
          quality: "ExcelLent",
          tip: 0.25,
        },
        {
          quality: "Good",
          tip: 0.2,
        },
        {
          quality: "Fair",
          tip: 0.15,
        },
        {
          quality: "Just Okay",
          tip: 0.05,
        },
        {
          quality: "Very poor",
          tip: 0,
        },
      ],
      errorMsg: "",
      error: false,
    };
  }

  showError = (props) => {
    this.setState({
      errorMsg: props,
      error: true,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { billAmount, peopleCount, rating } = this.state;

    if (billAmount === 0) {
      this.showError("Please enter Valid bill amount!!");
      return;
    }
    if (rating === "") {
      this.showError("Please rate our service!!");
      return;
    }
    if (peopleCount === 0) {
      this.showError(
        "Please enter among how many people bill has to be distributed!!"
      );
      return;
    }

    this.state.rates.map((rate, i) => {
      if (rate.quality === this.state.rating) {
        var tip = rate.tip * billAmount;
        var totalBill = parseInt(billAmount) + parseInt(tip);
        this.setState({
          tip: tip,
          totalBill: totalBill,
          eachShare: totalBill / peopleCount,
          showBill: true,
		  error: false,
        });
      }
      return 0;
    });
  };

  handleBillAmount = (e) => {
    this.setState({
      billAmount: e.target.value,
    });
  };

  handleservices = (e) => {
    this.setState({
      rating: e.target.value,
    });
  };

  handlePeopleCount = (e) => {
    this.setState({
      peopleCount: e.target.value,
    });
  };

  render() {
    return (
      <div className="Container">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <div className="card card-body text-center mt-5">
              <h1 className="heading display-5 pb-3">Tip Calculator</h1>
              {this.state.error ? (
                <div className="alert alert-danger" role="alert">
                  {this.state.errorMsg}
                </div>
              ) : null}

              <Calculator
                services={this.handleservices}
                rates={this.state.rates}
                peopleCount={this.handlePeopleCount}
                billAmount={this.handleBillAmount}
                onCalculate={this.handleSubmit}
              />
              {this.state.showBill ? (
                <Result
                  tip={this.state.tip}
                  totalBill={this.state.totalBill}
                  eachShare={this.state.eachShare}
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
