import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as carActions from '../../actions/carActions';
import CarList from './CarList';
import {browserHistory} from 'react-router';
const mainstyle = {
  textAlign: 'center' 
};
class CarsPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.redirectToAddCarPage = this.redirectToAddCarPage.bind(this);
  }

  redirectToAddCarPage() {
    browserHistory.push('/car');
  }

  render() {
    const {cars} = this.props;
    console.log(cars);

    return (
      <div style={mainstyle}>
        <h1>Cars</h1>
        <input type="submit"
               value="Add Car"
               className="btn btn-primary"
               onClick={this.redirectToAddCarPage}/>
        <CarList cars={cars}/>
      </div>
    );
  }
}

CarsPage.propTypes = {
  cars: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    cars: state.cars
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(carActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsPage);
