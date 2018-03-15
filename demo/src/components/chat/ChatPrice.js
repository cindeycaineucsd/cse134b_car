import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Chip from 'material-ui/Chip';
import Paper from 'material-ui/Paper';
import {Link} from 'react-router';

const sellerStyle = {
    maxWidth: "80%",
    float: "left"
};

const buyerPriceStyle = {
    display: "inline-block",
    width: "100%",
    backgroundColor: "#5BC236",
    border: "2px solid #5BC236",
    borderRadius: "5px",
    textAlign: "center"
};


const chatRowStyle = {
    width: "100%",
    padding: "1px 1px 1px 1px",
    marginLeft: "auto",
    marginRight: 0,
    wordWrap: "break-word"
    
};

const buttonContainerStyle = {
    margin: "0 auto",
    textAlign: "center"
};

const priceButtonsStyle = {
    backgroundColor: "#4BB226",
    margin: "1px 1px 5px 1px"
};

class ChatPrice extends React.Component {
    render() {
      return (
        <div style={chatRowStyle}>
          <div style={buyerPriceStyle}>
            <h4>{"$" + this.props.price}</h4>
            <div style={buttonContainerStyle}>   
                <Link to="/paymentoptions">       
                    <FlatButton label="Yes" default="true" style={priceButtonsStyle}/>
                </Link>
                <FlatButton label="No" default="true" style={priceButtonsStyle} onClick={() => this.props.onDecline()}/>
            </div>
          </div>
        </div>
      );
    }
  }


export default ChatPrice;