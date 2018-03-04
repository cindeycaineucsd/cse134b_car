import React, {PropTypes} from 'react';
import {Link} from 'react-router';


const CarListRow = ({car}) => {
  return (
    <div className="car"> 
        <img className="car_image" src="https://www.toyota.com/imgix/responsive/images/mlp/colorizer/2018/prius/3T7/4.png?q=85&fm=jpg&w=1024&fit=max&cs=strip&bg=fff" alt="prius" /> 
    <Link to={'/car/' + car.id}> 
    <div className="car_discription"> 
    <h3>{car.make + " " + car.model}</h3> 
    <p> 
    Year: {car.year}<br /> 
    Mileage: {car.mileage} 
    </p> 
    </div> 
    <div className="info"> 
    <button className="action-button car-button" type="button">Details</button> 
    </div>
    </Link> 
    </div>

  );
};

CarListRow.propTypes = {
  car: PropTypes.object.isRequired
};

export default CarListRow;
