import React, { Component } from "react";
import "./MailsDefault.css";

class Mail74 extends Component {
  state = {};
  render() {
    return <div onMouseOver={this.props.inEmailText}></div>;
  }
}

Mail74.defaultProps = {
  senderName: "xxxx",
  sender: "xxxxx",
  date: "xxxxx",
  subject: "xxxxx",
  capital: "xxxxx",
  keyID: 0,
  avatarColor: "xxxx",
  unseen: true,
};

export default Mail74;
