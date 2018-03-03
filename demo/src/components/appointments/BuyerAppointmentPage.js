import React from 'react';
import DatePicker from 'material-ui/DatePicker';

class BuyerAppointmentPage extends React.Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      controlledDate: []
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, date) {
    this.setState({
      controlledDate: date
    });
  }

  render() {
    return (
      <div className = "Appointments">
        <h1>Appointments</h1>
        <p>Please select your avaliable dates for an appointment.</p>

        <DatePicker
        hintText="Controlled Date Input"
        value={this.state.controlledDate}
        onChange={this.handleChange}
      />
        <div>
          <h2>Avaliability </h2>
          <p>hello {this.state.controlledDate.toString()}</p>
        </div>

       

      </div>
    );
  }
}


export default BuyerAppointmentPage;
