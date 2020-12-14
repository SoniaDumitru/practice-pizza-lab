import React from 'react';

const PizzaForm = ({ 
    pizza, 
    onChangeHandlerTopping, 
    onChangeHandlerSize, 
    onChangeHandlerVegetarian,
    onSubmitHandler,
}) => {

    const { topping, size, vegetarian } = pizza;

    return(
        <div className="form-row">
            <div className="col-5">
                <input 
                    className='form-control'
                    placeholder='Pizza Topping'
                    name='topping'
                    value={topping}
                    type='text'
                    onChange={event => onChangeHandlerTopping(event)}/>
            </div>
            <div className='col'>
                <select 
                    value={size} 
                    className="form-control"
                    onChange={(event) => onChangeHandlerSize(event)}
                >
                    <option value='Small'>Small</option>
                    <option value='Medium'>Medium</option>
                    <option value='Large'>Large</option>
                </select>
                <div className="col">
                    <div className="form-check">
                        <input 
                            onChange={event => onChangeHandlerVegetarian(event)} 
                            className="form-check-input" 
                            type="radio" 
                            value={true} 
                            checked={vegetarian}
                        />
                        <label className="form-check-label">Vegetarian</label>
                    </div>
                    <div className="form-check">
                        <input 
                            onChange={event => onChangeHandlerVegetarian(event)} 
                            className="form-check-input" 
                            type="radio" 
                            value={false} 
                            checked={!vegetarian}
                        />
                        <label className="form-check-label">Not Vegetarian</label>
                    </div>
                </div>
                <div className="col">
                    <button 
                        type="submit" 
                        className="btn btn-success" 
                        onClick={event => onSubmitHandler(event)}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    )
};

export default PizzaForm;