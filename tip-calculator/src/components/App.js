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
      showBill: true,
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
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { rating, tip, billAmount, totalBill, peopleCount } = this.state;
    this.state.rates.map((rate, i) => {
      console.log(rate.quality);
      console.log("rating", this.state.rating);
      if (rate.quality === this.state.rating) {
        var tip = rate.tip * billAmount;
        var totalBill = parseInt(billAmount) + parseInt(tip);
        this.setState({
          tip: tip,
          totalBill: totalBill,
          eachShare: totalBill / peopleCount,
        });
      }
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
        <div class="row">
          <div class="col-md-6 mx-auto">
            <div class="card card-body text-center mt-5">
              <h1 class="heading display-5 pb-3">Tip Calculator</h1>
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
