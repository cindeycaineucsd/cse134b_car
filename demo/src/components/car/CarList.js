import React, {PropTypes} from 'react';
import CarListRow from './CarListRow';

const CarList = ({cars}) => {
  return (
    <div>
      {cars.map(car =>
        <CarListRow key={car.id} car={car}/>
      )}
    </div>
  );
};

CarList.propTypes = {
  cars: PropTypes.array.isRequired
};

export default CarList;
