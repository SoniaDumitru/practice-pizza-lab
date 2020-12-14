import React from 'react';

const Pizza = ({ pizza, editPizza }) => {
    const { topping, size, vegetarian, id } = pizza;
    console.log(pizza)
    return(
        <tr>
            <td>{topping}</td>
            <td>{size}</td>
            <td>{vegetarian ? 'true' : 'false'}</td>
            <td>
                <button 
                    type="button" 
                    name={id}
                    className="btn btn-primary"
                    onClick={(event) => editPizza(event)}
                >
                    Edit Pizza
                </button>
            </td>
        </tr>
    )
}

export default Pizza;