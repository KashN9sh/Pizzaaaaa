import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

class PizzaBuyer extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.pizzaCount}</td>
      </tr>
    );
  }
}

class PizzaList extends React.Component {
  render() {
    const rows = [];

    this.props.pizzaBuyers.forEach((buyer) => {
      rows.push(<PizzaBuyer name={buyer.name} pizzaCount={buyer.pizzaCount} />);
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Должник по питце</th>
            <th>Скока кусков</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

var Peoples = [];

class DobovlyaloLudey extends React.Component {
  constructor(props) {
    super(props);
    this.activateLasers = this.activateLasers.bind(this);
    this.handleNameTextChange = this.handleNameTextChange.bind(this);
    this.handleCountTextChange = this.handleCountTextChange.bind(this);
    this.state = {
      name: "1",
      count: "1"
    };
  }

  handleNameTextChange(e) {
    this.setState({ name: e.target.value });
  }

  handleCountTextChange(e) {
    this.setState({ count: e.target.value });
  }

  activateLasers() {
    Peoples.push({ name: this.state.name, pizzaCount: this.state.count });
    console.log(Peoples);

    const element = (
      <div>
        <input
          type="text"
          placeholder="ИМЯ"
          onChange={this.handleNameTextChange}
        />
        <input
          type="text"
          placeholder="СКОКА КУСКОФ"
          onChange={this.handleCountTextChange}
        />
        <button onClick={this.activateLasers}>Активировать лазеры</button>
        <PizzaList pizzaBuyers={Peoples} />
      </div>
    );
    ReactDOM.render(element, document.getElementById("root"));
  }

  render() {
    return (
      <div>
        {/* <input> </input> */}
        <button onClick={this.activateLasers}>Активировать лазеры</button>
      </div>
    );
  }
}

export default function App() {
  return (
    <div className="App">
      <DobovlyaloLudey />
    </div>
  );
}
