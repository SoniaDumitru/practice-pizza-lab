import React from 'react';
import Pizza from '../Components/Pizza';

const PizzaList = ({ pizzas, editPizza }) => {
    const renderPizza = pizzas && pizzas.map((pizza => 
        <Pizza 
            key={pizza.id}
            editPizza={editPizza}
            pizza={pizza}
        />
    ));
    return(
        <table className='table table-striped'>
            <thead>
                <th scope='col'>Topping</th>
                <th scope='col'>Size</th>
                <th scope='col'>Vegetarian?</th>
                <th scope='col'>Edit</th>
            </thead>
            <tbody>{renderPizza}</tbody>
        </table>
    ) 
}

export default PizzaList;