import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import LinearProgress from 'material-ui/LinearProgress';
import {Link} from 'react-router';

const simplecardstyle = {
  width: "75%", margin: "0px auto", minWidth: "200px", maxWidth: "750px"
};

const fullpaperstyle = {
  width: "100%",
  minWidth: "250px",
  height: "100%",
  paddingTop: "100px",
  backgroundColor: "#EFEFEF",
  margin: "0px auto"
};

class BuyerInquiriesPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      inquires:[
        {
          key: 1,
          name: 'RAV4',
          status: 'Interested',
          make:'Toyota',
          completed: 20,
          picture:'https://www.coughlintoyota.com/assets/stock/colormatched_01/white/640/cc_2017tos110005_01_640/cc_2017tos110005_01_640_1g3.jpg'

        },
        {
          key: 2,
          name: 'Prius',
          status: 'Negotiating',
          next: '/negotiation',
          nexttitle: 'Negotiation',
          make:'Toyota',
          completed: 50,
          picture: 'https://www.toyota.com/imgix/responsive/images/mlp/colorizer/2018/prius/3T7/1.png?q=85&fm=jpg&w=1024&fit=max&cs=strip&bg=fff'
        },
        {
          key: 3,
          name: 'Malibu',
          status: 'Select Payment',
          make: 'Chevy',
          completed: 80,
          picture: 'https://media.ed.edmunds-media.com/chevrolet/malibu/2014/oem/2014_chevrolet_malibu_sedan_ltz_fq_oem_2_1280.jpg'
        }
      ]
    };

    this.handleExpandChange = this.handleExpandChange.bind(this);
  }

  handleExpandChange(expanded){
    this.setState({expanded: expanded});
  }

  render() {
    return (
      <div style={fullpaperstyle}>

        <Card style={simplecardstyle}>
          <CardTitle 
          title= "Current Inquiries"
          subtitle= "Status"/>
        </Card>
        {this.state.inquires.map((dynamicComponent, i) =>
          <Car key = {i} componentData = {dynamicComponent}/>) 
        }
      </div>

      
    );
  }
}

class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };

    this.handleExpandChange = this.handleExpandChange.bind(this);
  }

  handleExpandChange(expanded){
    this.setState({expanded: expanded});
  }


  render() {
    return(

      <div>
      <Card 
        expanded={this.state.expanded} 
        onExpandChange={this.handleExpandChange}
        style={simplecardstyle}>
        <CardHeader
          title={this.props.componentData.name}
          subtitle={this.props.componentData.status}
          avatar={this.props.componentData.picture}
          actAsExpander={true}
          showExpandableButton={true}
        />
        <LinearProgress mode="determinate" value={this.props.componentData.completed}
          style={{"width":"50%"}} />
        <CardMedia
          expandable={true}
        > 
          <img src={this.props.componentData.picture} alt="" />
        </CardMedia>
        <CardTitle 
          title={this.props.componentData.name} 
          subtitle={this.props.componentData.status} 
          expandable={true} />
        <CardText expandable={true}>
        <Link to="/chat">
            <FlatButton label= "Chat" primary ={true}/>
        </Link>  
        </CardText>
        <CardText expandable={true}>

          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
        
      
      </Card>
      </div>
    );
  }
}

BuyerInquiriesPage.propTypes = {
  
  componentData: React.PropTypes.array,
  name: React.PropTypes.string,
  status: React.PropTypes.string,
  picture: React.PropTypes.string
  
};


export default BuyerInquiriesPage;
