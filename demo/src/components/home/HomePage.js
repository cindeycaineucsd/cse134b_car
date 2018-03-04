import React from 'react';
import {Link} from 'react-router';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';

let imageStyle = {
  width: "50%",
  magin: "auto"
};

const simplecardstyle = {
  width: "75%", margin: "0px auto", minWidth: "200px", maxWidth: "750px",
  marginBottom: "30px"
};

const fullpaperstyle = {
  width: "100%",
  minWidth: "250px",
  height: "100%",
  paddingTop: "100px",
  backgroundColor: "#EFEFEF",
  margin: "0px auto"
};

const tableStyle = {
  width:"100%",
  float:"left"
}

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      inquires:[
        {
          key: 1,
          name: 'RAV4',
          make: 'Toyota',
          year: '2010',
          mileage: '80,000',
          transmission:	'Automatic',
          color:	'White',
          titlestatus:	'Clean',  
          description: 'Great car for a great value. Really new and ready to drive.',
          price: '$8,000',
          picture:'https://www.coughlintoyota.com/assets/stock/colormatched_01/white/640/cc_2017tos110005_01_640/cc_2017tos110005_01_640_1g3.jpg'

        },
        {
          key: 2,
          name: 'Wrangler',
          make: 'Jeep',
          year: '2016',
          mileage: '40,000',
          transmission:	'Automatic',
          color:	'Silver',
          titlestatus:	'Clean',  
          description: 'Ready to drive off the lot. Low milage and barely used.',
          price: '$12,000',
          picture: 'https://icdn5.digitaltrends.com/image/2016-jeep-wrangler-rubicon-side-1500x1000.jpg?ver=1'
        },
        {
          key: 3,
          name: 'Prius',
          make: 'Toyota',
          year: '2014',
          mileage: '70,000',
          transmission:	'Automatic',
          color:	'Red',
          titlestatus:	'Clean',  
          description: 'Great car for a great value. All parts are checked and nothing is out of the order.',
          price: '$10,000',
          picture: 'https://www.toyota.com/imgix/responsive/images/mlp/colorizer/2018/prius/3T7/1.png?q=85&fm=jpg&w=1024&fit=max&cs=strip&bg=fff'
        },
        {
          key: 4,
          name: 'Malibu',
          make: 'Chevy',
          year: '2008',
          mileage: '60,000',
          transmission:	'Automatic',
          color:	'Blue',
          titlestatus:	'Clean',  
          description: 'Please contact me for a test drive. Ready to go. Great car for a great value.',
          price: '$6,000',
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
      <div style= {fullpaperstyle}>
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
        style ={simplecardstyle}>
        <CardHeader
          title={this.props.componentData.name}
          subtitle={this.props.componentData.year}
          actAsExpander={true}
          showExpandableButton={true}
        />
        
        <CardMedia style={imageStyle} actAsExpander={true}> 
          <img src={this.props.componentData.picture} alt="" />
        </CardMedia>
        <CardTitle 
          title={this.props.componentData.name} 
          subtitle={this.props.componentData.make}
          expandable={true} />
        <CardText expandable={true}>
          {this.props.componentData.description}
        <Table style={tableStyle}>
          <TableBody displayRowCheckbox= {false} >
            <TableRow>
              <TableRowColumn>Make:</TableRowColumn>
              <TableRowColumn>{this.props.componentData.make} </TableRowColumn>
              <TableRowColumn>Transmission:</TableRowColumn>
              <TableRowColumn>{this.props.componentData.transmission} </TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>Model:</TableRowColumn>
              <TableRowColumn>{this.props.componentData.name} </TableRowColumn>
              <TableRowColumn>Color:</TableRowColumn>
              <TableRowColumn>{this.props.componentData.color} </TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>Year:</TableRowColumn>
              <TableRowColumn>{this.props.componentData.year} </TableRowColumn>
              <TableRowColumn>Title Status:</TableRowColumn>
              <TableRowColumn>{this.props.componentData.titlestatus} </TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>Mileage:</TableRowColumn>
              <TableRowColumn>{this.props.componentData.mileage} </TableRowColumn>
              <TableRowColumn>Price:</TableRowColumn>
              <TableRowColumn>{this.props.componentData.price} </TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>

        </CardText>
        <CardText>
          <Link to="/chat">
            <FlatButton label= "Contact Seller" primary ={true}/>
          </Link>  
          <Link to="/appointmentbuyer">
            <FlatButton label= "Make Appointment" primary ={true}/>
          </Link>  
        </CardText>
      </Card>
      </div>
    );
  }
}

export default HomePage;
