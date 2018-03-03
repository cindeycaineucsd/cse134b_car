import React from 'react';
import Calendar from 'material-ui/DatePicker/Calendar';

function disableRandomDates() {
    return Math.random() > 0.4;
}

class SellerAppointmentPage extends React.Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      controlledDate: null,
      appointmentDate: []
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, date) {
    this.setState({
      controlledDate: date,
      appointmentDate: [1]
    });
  }

 

  render() {
    let curDates = this.state.controlledDate;

    return (
      <div className = "appointments">
        <h1>Appointments</h1>
        <p>Please pick an avaliable date for an appointment.</p>

        <Calendar firstDayOfWeek={1}
          value={this.state.controlledDate}
          onChange={this.handleChange}
        />
        <div>
          <h2>Current Appointment Date</h2>
          <p>This should be dates</p>
        </div>

      </div>
    );
  }
}



export default SellerAppointmentPage;
