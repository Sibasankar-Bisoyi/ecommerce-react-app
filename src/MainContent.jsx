import React, { Component } from "react";
import { renderToStaticMarkup } from "react-dom/server";

class MainContent extends Component {
  state = {
    pageTitle: "Employees",
    customerCount: 5,
    customers: [
      {
        id: 1,
        name: "Sibasankar",
        phone: "121-102",
        address: { city: "New Delhi" },
        photo: "https://picsum.photos/id/1021/60",
      },
      {
        id: 2,
        name: "Alok",
        phone: "121-103",
        address: { city: "Pune" },
        photo: "https://picsum.photos/id/1022/60",
      },
      {
        id: 3,
        name: "Balia",
        phone: "121-104",
        address: { city: "Bhubaneswar" },
        photo: "https://picsum.photos/id/1023/60",
      },
      {
        id: 4,
        name: "Mitre",
        phone: null,
        address: { city: "Kolkatta" },
        photo: "https://picsum.photos/id/1024/60",
      },
      {
        id: 5,
        name: "Deepak",
        phone: null,
        address: { city: "Mumbai" },
        photo: "https://picsum.photos/id/1025/60",
      },
    ],
  };

  render() {
    return (
      <div>
        <h4 className="m-1 p-1">
          {this.state.pageTitle}
          <span className="badge badge-secondary m-2">
            {this.state.customerCount}
          </span>
          <button className="btn btn-info" onClick={this.onClickRefresh}>
            Refresh
          </button>
        </h4>

        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Customer Name</th>
              <th>Phone</th>
              <th>City</th>
              <th>Photo</th>
            </tr>
          </thead>
          <tbody>{this.getCustomerRows()}</tbody>
        </table>
      </div>
    );
  }

  // Executes when the user clicks on Refresh button
  onClickRefresh = () => {
    this.setState({
      customerCount: 40,
    });
  };

  getPhoneToRender = (phone) => {
    return phone ? (
      phone
    ) : (
      <div className="bg-warning p-2 text-center">No Phone</div>
    );
  };

  getCustomerRows = () => {
    return this.state.customers.map((cust) => {
      return (
        <tr key={cust.id}>
          <td>{cust.id}</td>
          <td style={{ backgroundColor: this.customerNameStyle(cust.name) }}>
            {cust.name}
          </td>
          <td>{this.getPhoneToRender(cust.phone)}</td>
          <td>{cust.address.city}</td>
          <td>
            <img src={cust.photo} alt="Customer" />
          </td>
        </tr>
      );
    });
  };

  customerNameStyle = (customerName) => {
    if (customerName.startsWith("S")) return "green";
    else if (customerName.startsWith("A")) return "red";
    else if (customerName.startsWith("B")) return "pink";
    else if (customerName.startsWith("M")) return "yellow";
    else return "orange";
  };
}

export default MainContent;
