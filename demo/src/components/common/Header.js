import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';
import AutoComplete from 'material-ui/AutoComplete';

const colors = [
  'Red',
  'Orange',
  'Yellow',
  'Green',
  'Blue',
  'Purple',
  'Black',
  'White'
];

class Header extends React.Component {
  render() {
    return (
      <nav>
        <IndexLink to="/" activeClassName="active">
         <img className="logo" src="https://preview.ibb.co/jFWcJH/car_logo.png" alt="logo"></img>
        </IndexLink>

        <button className="action-button header-button">
              Login
        </button>
        <button className="action-button header-button">
              Sign Up
        </button>     
      </nav>
    );
  }
}

export default Header;
