import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';
const formstyle = {
  width: 800,
  alignSelf: 'center'
};

const deletestyle = {
  color: '#FFFFFF',
  backgroundColor: '#DD0000'

};

const CarForm = ({car, allAuthors, onSave, onChange, onDelete, saving, errors}) => {
  return (
    <form style={formstyle}>
      <h1>Manage Car</h1>
      <TextInput
        name="make"
        label="Make"
        value={car.make}
        onChange={onChange}
        error={errors.make}/>

      <TextInput
        name="model"
        label="Model"
        value={car.model}
        onChange={onChange}
        error={errors.model}/>

      <TextInput
        name="year"
        label="Year"
        value={car.year}
        onChange={onChange}
        error={errors.year}/>

      <TextInput
        name="mileage"
        label="Mileage"
        value={car.mileage}
        onChange={onChange}
        error={errors.mileage}/>

      <TextInput
        name="transmission"
        label="Transmission"
        value={car.transmission}
        onChange={onChange}
        error={errors.transmission}/>

      <TextInput
        name="color"
        label="Color"
        value={car.color}
        onChange={onChange}
        error={errors.color}/>

      <TextInput
        name="titlestatus"
        label="Title Status"
        value={car.titlestatus}
        onChange={onChange}
        error={errors.titlestatus}/>

      <TextInput
        name="price"
        label="Price"
        value={car.price}
        onChange={onChange}
        error={errors.price}/>
      <input
        type="submit"
        disabled={saving}
        value={saving ? 'Saving...' : 'Save'}
        className="btn btn-primary"
        onClick={onSave}/>
      <input style={deletestyle}
        type="button"
        disabled={saving}
        value={saving ? 'Saving...' : 'Delete'}
        className="btn btn-primary"
        onClick={onDelete}/>
    </form>
  );
};

CarForm.propTypes = {
  car: React.PropTypes.object.isRequired,
  allAuthors: React.PropTypes.array,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  onDelete: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool,
  errors: React.PropTypes.object
};

export default CarForm;
