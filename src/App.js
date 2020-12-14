import React from 'react';
import './App.css';
import PizzaList from './Components/PizzaList';

class App extends React.Component {
  state = {
    pizzas: [],
  }

  componentDidMount() {
    return fetch("http://localhost:3000/pizzas")
      .then(res => res.json())
      .then(pizzas => this.setState({ pizzas: pizzas }))
  }

  render() {
    return (
      <>
        <h1 className="text-center">Welcome to Pizzeria</h1>
        <PizzaList pizzas={this.state.pizzas}/>
      </>
    );
  }
}

export default App;
