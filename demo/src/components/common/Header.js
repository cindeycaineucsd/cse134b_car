import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';

const Header = ({loading}) => {
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
      
      {loading && <LoadingDots interval={100} dots={20}/>}
      
    </nav>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
