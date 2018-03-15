import React from 'react';
import {Link} from 'react-router';
import AutoComplete from 'material-ui/AutoComplete/AutoComplete';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/FlatButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

const mainstyle = {
    width: 900,
    display: 'flex',
    alignSelf: 'flex-end'
};

const cardstyle = {
    width: 300,
    height: 'auto',
    bottom: 0,
    margin: 5
};

const titlestyle = {
    textAlign: 'center'
};

const buttonboxstyle = {
    display: 'flex',
    alignSelf: 'stretch',
    bottom: 0
};

const detailstyle = {
    fontSize: 30,
    textAlign: 'center'
};
const buttonstyle = {
    alignSelf: 'center',
    margin: 'auto',
    color: "#FFFFFF"
};

class PaymentOptionsPage extends React.Component {
  render() {
    return (
    <div className="payment_main" style={mainstyle}>
        <Card style={cardstyle}>
            <CardTitle style={titlestyle} title="Buy"/>
            <p>Buy the car of the listed price. In the past, buying a gently used car was the best way to save money when purchasing a vehicle. A big reason behind this logic is that new cars depreciate considerably the moment they are taken home from the dealership.</p> 
            <div style={detailstyle}>
                Price: $18,000 
            </div>
            <div style={buttonboxstyle}>
                <Link to="/">
                <RaisedButton label="Confirm" style={buttonstyle} backgroundColor="#00BCD4" />
                </Link>
            </div>
        </Card>
        <Card style={cardstyle}>
            <CardTitle style={titlestyle} title="Finance"/>
            <p>You might borrow money directly from a bank, finance company, or credit union. In your loan, you agree to pay the amount financed, plus a finance charge, over a period of time. Once you’re ready to buy a car from a dealer, you use this loan to pay for the car. </p> 
            <div style={detailstyle}>
                Downpayment: <br />
                <DropDownMenu value={1}>
                    <MenuItem value={1} primaryText="$1,000" />
                    <MenuItem value={2} primaryText="$2,000" />
                    <MenuItem value={3} primaryText="$3,000" />
                    <MenuItem value={4} primaryText="$4,000" />
                    <MenuItem value={5} primaryText="$5,000" />
                </DropDownMenu>
                <br />Duration:<br />
                <DropDownMenu value={1}>
                    <MenuItem value={1} primaryText="6 Months" />
                    <MenuItem value={2} primaryText="12 Months" />
                    <MenuItem value={3} primaryText="18 Months" />
                    <MenuItem value={4} primaryText="24 Months" />
                    <MenuItem value={5} primaryText="36 Months" />
                </DropDownMenu>
            </div>
            <div style={buttonboxstyle}>
                <Link to="/">
                <RaisedButton label="Confirm" style={buttonstyle} backgroundColor="#00BCD4" />
                </Link>
            </div>        
        </Card>
        <Card style={cardstyle}>
            <CardTitle style={titlestyle} title="Lease"/>
            <p>Leasing a car could be more clearly described as long-term car rental. You pay a monthly price that allows you to “borrow" a brand new car for an extended period of time—typically around 36 months, though this number will vary based on your dealership. At the end of your lease, you will have the choice to either buy your car, for an amount specified in your lease agreement, or turn the vehicle in.</p> 
            <div style={detailstyle}>
                Price: $18,000 
            </div>
            <div style={buttonboxstyle}>
                <Link to="/">
                <RaisedButton label="Confirm" style={buttonstyle} backgroundColor="#00BCD4" />
                </Link>
            </div>
        </Card>
    </div>
    );
  }
}

export default PaymentOptionsPage;