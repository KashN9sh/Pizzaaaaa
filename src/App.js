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
      rows.push(<PizzaBuyer name="Roma" pizzaCount="1" />);
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

function activateLasers() {
  Peoples.push({ name: "Roma", pizzaCount: 1 });
  console.log(Peoples);

  const element = (
    <div>
      <button onClick={activateLasers}>Активировать лазеры</button>
      <PizzaList pizzaBuyers={Peoples} />
    </div>
  );
  ReactDOM.render(element, document.getElementById("root"));
}

export default function App() {
  return (
    <div className="App">
      <button onClick={activateLasers}>Активировать лазеры</button>
      <PizzaList pizzaBuyers={Peoples} />
    </div>
  );
}
