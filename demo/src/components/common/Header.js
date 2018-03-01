import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';
import AutoComplete from 'material-ui/AutoComplete';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

class Login extends React.Component {

  render() {
    return (
      <FlatButton {...this.props} label="Login" />
    );
  }
}

const Logged = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText="Refresh" />
    <MenuItem primaryText="Help" />
    <MenuItem primaryText="Sign out" />
  </IconMenu>
);


class Header extends React.Component {

  constructor(props, context){
    super(props, context);
    this.state = {
      logged: true
    };
    
    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(event, logged){
    this.setState({logged: logged});
  }

  render() {
    return (
      <div>
        <AppBar
          title="Car-2-Go"
          iconElementRight={this.state.logged ? <Logged /> : <Login />}
        />
      </div>
    );
  }
}

/*
export class Header extends React.Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      dataSource: []
    };

    this.handleUpdateInput = this.handleUpdateInput.bind(this);
  }

  handleUpdateInput(value) {
    this.setState({
      dataSource: [
        value
      ]
    });
  }

  render() {
    return (
      <nav>
        <IndexLink to="/" activeClassName="active">
         <img className="logo" src="https://preview.ibb.co/jFWcJH/car_logo.png" alt="logo"></img>
        </IndexLink>

        <AutoComplete
          hintText="Type anything"
          dataSource={this.state.dataSource}
          onUpdateInput={this.handleUpdateInput}
        />

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
*/

export default Header;
