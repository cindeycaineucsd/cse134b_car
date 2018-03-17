import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import { Link } from 'react-router';
import ChatInput from '../chat/ChatInput';
import ChatBubble from '../chat/ChatBubble';
import ChatRow from '../chat/ChatRow';
import ChatPrice from '../chat/ChatPrice';
import TextInput from '../common/TextInput';
import Dialog from 'material-ui/Dialog';
import style from './chat.module.css';

const greyBackground = {
    backgroundColor: "#efefef"
};

const chatboxOuterStyle = {
    padding: "8px 10px 45px 10px",
    margin: "0 auto",
    width: "90%",
    maxWidth: "600px",
    minWidth: "200px",
    height: "100%",
    maxHeight: "455px",
    bottom: "0",
    position: "relative",
    z: 1
};
/*
const chatboxDisplayStyle = {
    height: "400px",
    overflow: "auto",
    border: "1px solid #efefef"
};
*/

const chatboxLowerStyle = {
    display: "flex",
    height: 32,
    width: "100%"
};

const chatTextStyle = {
    flexGrow: 1
};

const chatButtonsStyle = {
    padding: "4px 10px 6px 0px",
    margin: "auto"
};

const sendButtonStyle = {
    paddingRight: 1,
    paddingLeft: 1
};

class Chat extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentText: {},
            currentPrice: {},
            customerChats: [],
            priceOpen: false
        };

        this.handlePriceOpen = this.handlePriceOpen.bind(this);
        this.handlePriceClose = this.handlePriceClose.bind(this);
        this.handlePriceSubmit = this.handlePriceSubmit.bind(this);
    }

    handlePriceOpen() {
        this.setState({ priceOpen: true });
    }

    handlePriceClose() {
        this.setState({ priceOpen: false });
    }

    handlePriceSubmit() {
        this.setState({ priceOpen: false });
        this.onSendCustomerPrice();
    }

    onSendCustomerMessage() {
        const { customerChats, currentText, currentPrice } = this.state;

        this.setState({
            currentText: {},
            customerChats: customerChats.concat([currentText])
        });
    }

    onSendCustomerPrice() {
        const { customerChats, currentText, currentPrice } = this.state;

        this.setState({
            currentPrice: {},
            customerChats: customerChats.concat([currentPrice])
        });
    }

    render() {
        const priceActions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.handlePriceClose}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                keyboardFocused={true}
                onClick={this.handlePriceSubmit}
            />
        ];

        console.log('chats rendering', this.state.customerChats)
        return (
            <div style={greyBackground}>
                <Card style={chatboxOuterStyle}>
                    <div className={style.root}>
                        {this.state.customerChats.map((chat, index) => {
                            if (chat.type === 'price') {
                                const removeChat = () => {
                                    const newChats = this.state.customerChats;
                                    newChats.splice(index, 1)
                                    this.setState({customerChats: newChats});
                                }
                                return <ChatPrice
                                    key={index}
                                    price={chat.message}
                                    onDecline={removeChat} />
                            } else {
                                return <ChatBubble
                                    key={index}
                                    message={chat.message} />

                            }

                        })}

                    </div>

                    <div style={chatboxLowerStyle}>
                        <div style={chatTextStyle}>
                            <ChatInput
                                value={this.state.currentText.message}
                                onChange={(event) => {
                                    this.setState({
                                        currentText: {
                                            message: event.target.value,
                                            type: 'message'
                                        }
                                    })
                                }}
                                onKeyPress={(ev) => {
                                    console.log(`Pressed keyCode ${ev.key}`);
                                    if (ev.key === 'Enter') {
                                        ev.preventDefault();
                                        this.onSendCustomerMessage()
                                    }
                                }}
                                name="message" />
                        </div>
                        <div style={chatButtonsStyle}>
                            <RaisedButton label="Send" primary="true" style={sendButtonStyle}
                                onClick={() => { this.onSendCustomerMessage() }}
                            />
                            <RaisedButton label="Propose Price" primary="true"
                                onClick={this.handlePriceOpen} />
                        </div>
                    </div>
                </Card>


                <Dialog
                    title="Propose Price"
                    actions={priceActions}
                    modal={false}
                    open={this.state.priceOpen}
                    onRequestClose={this.handlePriceClose}
                >
                    <TextInput
                        name="Price"
                        label="Price"
                        onChange={(event) => {
                            this.setState({
                                currentPrice: {
                                    message: event.target.value,
                                    type: 'price'
                                }
                            });
                        }} />
                </Dialog>
            </div>
        );
    }
}


export default Chat;