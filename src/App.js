import React from 'react';
import PizzaForm from './Components/PizzaForm';
import PizzaList from './Components/PizzaList';

class App extends React.Component {
  state = {
    pizzas: [],
    editFormPizza: {
      id: '',
      topping:'',
      size:'',
      vegetarian:'',
    }
  }

  // fetch data and store it into pizzas array
  componentDidMount() {
    return fetch("http://localhost:3000/pizzas")
      .then(res => res.json())
      .then(pizzas => this.setState({ pizzas: pizzas }))
  }

  // method that sets state for editFormPizza with pizza returned from clicking edit button
  editPizza = (event) => {
    let clickedPizza = this.state.pizzas.find((pizza) => pizza.id === parseInt(event.target.name, 10))
    this.setState({
      editFormPizza: {
        id: clickedPizza.id,
        topping: clickedPizza.topping,
        size: clickedPizza.size,
        vegetarian: clickedPizza.vegetarian,
      }
    })
  }

  // method to set state for the selected pizza topping
  onChangeHandlerTopping = (event) => {
    this.setState({
      editFormPizza: {
        id: this.state.editFormPizza.id,
        topping: event.target.value,
        size: this.state.editFormPizza.size,
        vegetarian: this.state.editFormPizza.vegetarian
      }
    })
  }

  // method to set state for the selected pizza size
  onChangeHandlerSize = (event) => {
    this.setState({
      editFormPizza: {
        id: this.state.editFormPizza.id,
        topping: this.state.editFormPizza.topping,
        size: event.target.value,
        vegetarian: this.state.editFormPizza.vegetarian
      }
    })
  }

  // method to set state for the selected pizza type vegetarian to true
  onChangeHandlerVegetarian = (event) => {
    this.setState({
      editFormPizza: {
        id: this.state.editFormPizza.id,
        topping: this.state.editFormPizza.topping,
        size: this.state.editFormPizza.size,
        vegetarian: event.target.value === "true",
      }
    })
  }

  // update data in db.json
  onSubmitHandler = (event) => {
    window.location.reload();
    if (this.state.editFormPizza.id) {
      const url = `http://localhost:3000/pizzas/${this.state.editFormPizza.id}`;
      fetch(url, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Accepts':'application/json'
        },
        body: JSON.stringify(this.state.editFormPizza)
      })
      .then(response => response.json())
      .then(data => this.setState({
        editFormPizza: {
          id: '',
          topping:'',
          size:'',
          vegetarian:'',
        }
      }))
    }
  }

  render() {
    return (
      <div className='App'>
        <h1 className="text-center">Welcome to Pizzeria</h1>
        <PizzaForm 
          pizza={this.state.editFormPizza}
          onSubmitHandler={this.onSubmitHandler}
          onChangeHandlerTopping={this.onChangeHandlerTopping}
          onChangeHandlerSize={this.onChangeHandlerSize}
          onChangeHandlerVegetarian={this.onChangeHandlerVegetarian}
        />
        <PizzaList 
          editPizza={this.editPizza}
          pizzas={this.state.pizzas}
        />
      </div>
    );
  }
}

export default App;
