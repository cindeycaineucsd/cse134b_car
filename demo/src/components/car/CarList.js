import React, {PropTypes} from 'react';
import CarListRow from './CarListRow';

const CarList = ({cars}) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>&nbsp;</th>
        <th>Title</th>
        <th>Author</th>
        <th>Category</th>
        <th>Length</th>
      </tr>
      </thead>
      <tbody>
      {cars.map(car =>
        <CarListRow key={car.id} car={car}/>
      )}
      </tbody>
    </table>
  );
};

CarList.propTypes = {
  cars: PropTypes.array.isRequired
};

export default CarList;
