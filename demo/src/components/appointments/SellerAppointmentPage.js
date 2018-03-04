import React from 'react';
import {Link} from 'react-router';
import DatePicker from 'material-ui/DatePicker';
import FlatButton from 'material-ui/FlatButton';


function disableRandomDates() {
    return Math.random() > 0.4;
}

class SellerAppointmentPage extends React.Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      controlledDate: null
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, date) {
    this.setState({
      controlledDate: date
    });
  }

 

  render() {
    let curDates = this.state.controlledDate;

    return (
      <div className = "appointments">
        <h1>Appointments</h1>
        <p>Please pick an avaliable date for an appointment.</p>

        <DatePicker
        hintText="Pick Appointment Date"
        value={this.state.controlledDate}
        onChange={this.handleChange}
        shouldDisableDate={disableRandomDates}
        />

        <div>
          <h3>Current Appointment Date</h3>
          <p>Current Choice</p>
          {Intl.DateTimeFormat('en-GB', { 
          year: 'numeric', 
          month: 'long', 
          day: '2-digit' 
          }).format(this.state.controlledDate)}
        </div>
        <Link to="inquiries"><FlatButton label="Confirm" primary={true}/></Link>
      </div>
    );
  }
}



export default SellerAppointmentPage;
