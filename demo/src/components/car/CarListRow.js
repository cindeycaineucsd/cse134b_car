import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const CarListRow = ({car}) => {
  return (
    <tr>
      <td><a href={car.watchHref} target="_blank">Watch</a></td>
      <td><Link to={'/car/' + car.id}>{car.title}</Link></td>
      <td>{car.authorId}</td>
      <td>{car.category}</td>
      <td>{car.length}</td>
    </tr>
  );
};

CarListRow.propTypes = {
  car: PropTypes.object.isRequired
};

export default CarListRow;
