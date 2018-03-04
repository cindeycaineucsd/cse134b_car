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
}

const buyerStyle = {
    display: "inline-block",
    width: "100%",
    marginLeft: "auto",
    marginRight: 0,
    backgroundColor: "#5BC236",
    border: "2px solid #5BC236",
    borderRadius: "5px"
}


const chatRowStyle = {
    width: "100%",
    padding: "1px 1px 1px 1px",
    marginLeft: "auto",
    marginRight: 0,
    wordWrap: "break-word"
}

class ChatBubble extends React.Component {
    render() {
      return (
        <div style={chatRowStyle}>

          <div style={buyerStyle}>{this.props.message}</div>
          </div>
      );
    }
  }


export default ChatBubble;