import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import {Link} from 'react-router';

const fullpaperstyle = {
  width: "100%",
  minWidth: "250px",
  height: "100%",
  paddingTop: "100px",
  backgroundColor: "#EFEFEF",
  margin: "0px auto"
};

const simplecardstyle = {
  width: "75%", margin: "0px auto", minWidth: "200px", maxWidth: "750px",
  textAlign: "center", display: "flex"
};

const CardExampleWithAvatar = () => (
  <Card style={simplecardstyle}>
    <CardTitle title="Start Negotiation?"/>
    <CardActions>
      <Link to="/chat">        
      <RaisedButton label="Yes" primary="true"/>
      </Link>
      <Link to="/">
      <RaisedButton label="No" primary="true"/>
      </Link>
    </CardActions>
  </Card>
);

class StartNegotiationPage extends React.Component {
  render() {
    return (
      <div style={fullpaperstyle}>
          <CardExampleWithAvatar/>
      </div>
    );
  }
}

export default StartNegotiationPage;
