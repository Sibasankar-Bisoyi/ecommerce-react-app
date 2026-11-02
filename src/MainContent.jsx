import React, { Component } from "react";

class MainContent extends Component {
  state = {
    pageTitle: "Employees",
    customerCount: 5,
  };

  render() {
    return (
      <div>
        <h4 className="border-bottom m-1 p-1">
          {this.state.pageTitle}
          <span className="badge badge-secondary m-2">
            {this.state.customerCount}
          </span>
          <button className="btn btn-info" onClick={this.onClickRefresh}>
            Refresh
          </button>
        </h4>
      </div>
    );
  }

  // Executes when the user clicks on Refresh button
  onClickRefresh = () => {
    this.setState({
      customerCount: 35,
    });
  };
}

export default MainContent;
