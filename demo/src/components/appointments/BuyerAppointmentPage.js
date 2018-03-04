import React from 'react';
import {Link} from 'react-router';
import DatePicker from 'material-ui/DatePicker';
import FlatButton from 'material-ui/FlatButton';

class BuyerAppointmentPage extends React.Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      controlledDate: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange(event, date) {
    let newArray = this.state.controlledDate.slice();    
    newArray.push({day: date});   
    this.setState({controlledDate:newArray});
  }

  handleDelete(event){
    let newArray = [];
    this.setState({controlledDate:newArray});
  }

  render() {
    return (
      <div className = "Appointments">
        <h1>Appointments</h1>
        <p>Please select your avaliable dates for an appointment.</p>

        <DatePicker
        hintText="Choose Date"
        value={this.state.controlledDate}
        onChange={this.handleChange}
        />
        <div>
          <h3>Selected Dates </h3>
          <FlatButton label="Clear" primary={true} onClick={this.handleDelete}/>
          {this.state.controlledDate.map((dynamicComponent, i) =>
          <Appointments key = {i} componentData = {dynamicComponent}/>) 
          }
          
        </div>
        <Link to="inquiries"><FlatButton label="Confirm" primary={true}/></Link>
      </div>
    );
  }
}

class Appointments extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>    
        {Intl.DateTimeFormat('en-GB', { 
          year: 'numeric', 
          month: 'long', 
          day: '2-digit' 
          }).format(this.props.componentData.day)}
      </div>
    );
  }
}

export default BuyerAppointmentPage;
