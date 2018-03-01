// This component handles the App template used on every page.
import React, {PropTypes} from 'react';
import Header from './common/Header';
import {connect} from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const bodyStyle = {
  marginTop: 0
};

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="container-fluid" style={{margin: 0, padding: 0}}>
          <Header
            loading={this.props.loading}
          />
          <div style={bodyStyle}>
          {this.props.children}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}

export default connect(mapStateToProps)(App);
