import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';
import AutoComplete from 'material-ui/AutoComplete';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Dialog from 'material-ui/Dialog';

const logsignstyle = {
  marginTop: 5, color: '#FFFFFF'
};

const titleStyle ={
  textDecoration: "none", color: "white"
}

class LogSign extends React.Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      loginOpen: false,
      signupOpen: false
    };

    this.handleLoginOpen = this.handleLoginOpen.bind(this);
    this.handleLoginClose = this.handleLoginClose.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleSignUpOpen = this.handleSignUpOpen.bind(this);
    this.handleSignUpClose = this.handleSignUpClose.bind(this);
    this.handleSignUpSubmit = this.handleSignUpSubmit.bind(this);

  }

  handleLoginOpen(){
    this.setState({loginOpen: true});
  }

  handleLoginClose(){
    this.setState({loginOpen: false});
  }

  handleLoginSubmit(){
    this.setState({loginOpen: false});
    this.props.setLogIn(true);
  }

  handleSignUpOpen(){
    this.setState({signupOpen: true});
  }

  handleSignUpClose(){
    this.setState({signupOpen: false});
  }

  handleSignUpSubmit(){
    this.setState({signupOpen: false});
    this.props.setLogIn(true);
  }

  render() {
      const loginActions = [
        <FlatButton
          label="Cancel"
          primary={true}
          onClick={this.handleLoginClose}
        />,
        <Link to="/inquiries">
        <FlatButton
          label="Submit"
          primary={true}
          keyboardFocused={true}
          onClick={this.handleLoginSubmit}
        />
        </Link>
      ];

      const signupActions = [
        <FlatButton
          label="Cancel"
          primary={true}
          onClick={this.handleSignUpClose}
        />,
        <Link to="/inquiries">
        <FlatButton
          label="Submit"
          primary={true}
          keyboardFocused={true}
          onClick={this.handleSignUpSubmit}
        />
        </Link>
      ];

    return (
      <div>
        <FlatButton {...this.props} label="SignUp" secondary="true" style={logsignstyle} onClick={this.handleSignUpOpen}/>
        <Dialog
          title="Sign Up"
          actions={signupActions}
          modal={false}
          open={this.state.signupOpen}
          onRequestClose={this.handleSignUpClose}
        >
          <label><b>Username</b></label>
          <input id="signup_username" type="text" placeholder="Enter Username" name="username" required />

          <label><b>Password</b></label>
          <input  id="signup_password" type="text" placeholder="Enter Password" name="password" required />

          <label><b>Confirm Password</b></label>
          <input  id="signup_password2" type="text" placeholder="Re-Enter Password" name="password_conf" required />

          <div>
            <label><b>Select User Type</b></label>
          </div>
          <div>
            <input id="buyer_radio" type="radio" name="usertype" value="buyer" /> Buyer <br />
            <input id="seller_radio" type="radio" name="usertype" value="seller" /> Seller <br />
          </div>
        </Dialog>
        <FlatButton {...this.props} label="Login" secondary="true" style={logsignstyle} onClick={this.handleLoginOpen}/>
        <Dialog
          title="Login"
          actions={loginActions}
          modal={false}
          open={this.state.loginOpen}
          onRequestClose={this.handleLoginClose}
        >
        <label><b>Username</b></label>
        <input id="login_username" type="text" placeholder="Enter Username" name="username" required />

        <label><b>Password</b></label>
        <input id="login_password" type="text" placeholder="Enter Password" name="password" required />
        </Dialog>
      </div>
    );
  }
}

class LogOut extends React.Component {
  constructor(props, context){
    super(props, context);

    this.handleClick = this.handleClick.bind(this);

  }

  handleClick(){
    this.props.setLogIn(false);
  }


    render() {
      return(
        <div>
                <Link to="/index">
                  <FlatButton {...this.props} label="Log Out" secondary="true" style={logsignstyle} onClick={this.handleClick}/>
                  </Link>
        </div>
        )
    }
}

class Header extends React.Component {

  constructor(props, context){
    super(props, context);
    this.state = {
      logged: false
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.setLogIn = this.setLogIn.bind(this);

  }

  handleChange(event, logged){
    this.setState({logged: logged});
  }

  setLogIn(logged){
    this.setState({logged: logged});
  }

  render() {
    return (
      <div>
        <AppBar
          title={<Link to="/about" style={titleStyle}>Car-2-Go</Link>}
          iconElementRight={this.state.logged ? <LogOut setLogIn={this.setLogIn}/> : <LogSign setLogIn={this.setLogIn}/>}
        />
      </div>
    );
  }
}


export default Header;
