import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as carActions from '../../actions/carActions';
import CarForm from './CarForm';
import {authorsFormattedForDropdown} from '../../selectors/selectors';
import toastr from 'toastr';

export class ManageCarPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      car: Object.assign({}, props.car),
      errors: {},
      saving: false
    };

    this.updateCarState = this.updateCarState.bind(this);
    this.saveCar = this.saveCar.bind(this);
    this.deleteCar = this.deleteCar.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.car.id != nextProps.car.id) {
      // Necessary to populate form when existing car is loaded directly.
      this.setState({car: Object.assign({}, nextProps.car)});
    }
  }

  updateCarState(event) {
    const field = event.target.name;
    let car = Object.assign({}, this.state.car);
    car[field] = event.target.value;
    return this.setState({car: car});
  }

  carFormIsValid() {
    let formIsValid = true;
    let errors = {};
    /*
    if (this.state.car.title.length < 5) {
      errors.title = 'Title must be at least 5 characters.';
      formIsValid = false;
    }
    */
    this.setState({errors: errors});
    return formIsValid;
  }


  saveCar(event) {
    event.preventDefault();
    
    if (!this.carFormIsValid()) {
      return;
    }

    this.setState({saving: true});

    this.props.actions.saveCar(this.state.car)
      .then(() => this.redirect())
      .catch(error => {
        toastr.error(error);
        this.setState({saving: false});
      });
  }

  deleteCar(event) {
    event.preventDefault();

    /*
    if (!this.carFormIsValid()) {
      return;
    }
    */

    this.setState({saving: true});

    this.props.actions.deleteCar(this.state.car)
      .then(() => this.redirectdelete())
      .catch(error => {
        toastr.error(error);
        this.setState({saving: false});
      });
  }

  redirect() {
    this.setState({saving: false});
    toastr.success('Car Saved');
    this.context.router.push('/cars');
  }

  redirectdelete() {
    this.setState({saving: false});
    toastr.success('Car Deleted');
    this.context.router.push('/cars');
  }

  render() {
    return (
      <CarForm
        allAuthors={this.props.authors}
        onChange={this.updateCarState}
        onSave={this.saveCar}
        onDelete={this.deleteCar}
        car={this.state.car}
        errors={this.state.errors}
        saving={this.state.saving}
      />
    );
  }
}

ManageCarPage.propTypes = {
  car: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

//Pull in the React Router context so router is available on this.context.router.
ManageCarPage.contextTypes = {
  router: PropTypes.object
};

function getCarById(cars, id) {
  const car = cars.filter(car => car.id == id);
  if (car) return car[0]; //since filter returns an array, have to grab the first.
  return null;
}

function mapStateToProps(state, ownProps) {
  const carId = ownProps.params.id; // from the path `/car/:id`

  let car = {id: '', watchHref: '', make: '', model: '', year: '', mileage: '', transmission: '', color: '', titlestatus: '', price: ''};

  if (carId && state.cars.length > 0) {
    car = getCarById(state.cars, carId);
  }

  return {
    car: car,
    authors: authorsFormattedForDropdown(state.authors)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(carActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCarPage);
