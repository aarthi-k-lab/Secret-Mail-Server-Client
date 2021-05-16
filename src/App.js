import React, { Component } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import SendMail from "./sendmail.js";
import DeleteKey from "./deletekey.js";
import Home from "./home.js";

import MailLogo from "./images/email.png";

class App extends Component {
  state = {
    homeFlag: true,
    sendMailFalg: false,
    deleteMailFlag: false,
    error: "",
    messagedescription: "",
    deleteErr: "",
    deleteDes: "",
  };

  componentDidMount = () => {
    this.setState({
      error: "",
      messagedescription: "",
      deleteErr: "",
      deleteDes: "",
    });
  };

  setDefault = () => {
    this.setState({
      deleteErr: "",
      deleteDes: "",
    });
  };

  setDelDefault = () => {
    this.setState({
      error: "",
      messagedescription: "",
    });
  };

  handleSendMail = async (targeturl, email, password, key, Message) => {
    try {
      const createmsgurl = "https://secret-be.herokuapp.com/create-message";

      const msgdata = {
        randomKey: key,
        password: password,
        message: Message,
        targetUrl: targeturl,
        targetMail: email,
      };

      const createMsgRes = await fetch(createmsgurl, {
        method: "POST",
        body: JSON.stringify(msgdata),
        headers: {
          "Content-type": "application/json;characterset=UTF-8",
        },
      });
      let createMsgData = await createMsgRes.json();
      if (createMsgData && createMsgData.message) {
        this.setState({ messagedescription: createMsgData.message, error: "" });
      } else {
        this.setState({
          messagedescription: "",
          error:
            "There is a problem creating the message. Please check the details and try again",
        });
      }
    } catch (err) {
      this.setState({
        messagedescription: "",
        error:
          "There is a problem while creating the message. Please check the details and try again",
      });
    }
  };

  handleDelete = async (password, key) => {
    const deletemsgurl = "https://secret-be.herokuapp.com/delete-message";

    const deletemsgdata = {
      secretKey: key,
      password: password,
    };
    try {
      const deleteMsgRes = await fetch(deletemsgurl, {
        method: "DELETE",
        body: JSON.stringify(deletemsgdata),
        headers: {
          "Content-type": "application/json;characterset=UTF-8",
        },
      });

      const deleteMsgData = await deleteMsgRes.json();
      if (deleteMsgData && deleteMsgData.message) {
        this.setState({ deleteDes: deleteMsgData.message, deleteErr: "" });
        if (deleteMsgData.message === "Not a valid user!") {
          this.setState({
            deleteDes: "",
            deleteErr: "403: " + deleteMsgData.message,
          });
        } else if (deleteMsgData.message === "Password mismatch")
          this.setState({
            deleteDes: "",
            deleteErr: "401: " + deleteMsgData.message,
          });
      }
    } catch (error) {
      this.setState({
        deleteDes: "",
        deleteErr: error.response.status + ": " + error.response.data,
      });
    }
  };

  render() {
    return (
      <div className="App">
        <div className="app-container container">
          <div className="row">
            <div className="navbarcol col-4 col-md-3">
              <div className="navbarheader row">
                <div className="title">
                  <img
                    src={MailLogo}
                    alt="mailLogo"
                    height="50px"
                    width="50px"
                  />
                  <span className="titlefont">S.M.S</span>
                </div>
              </div>
              <div className="navbarHome row">
                <button
                  type="button"
                  className="Home btn btn-warning btn-outline-dark"
                  data-bs-toggle="button"
                  autoComplete="off"
                  aria-pressed="true"
                  onClick={() =>
                    this.setState({
                      homeFlag: true,
                      sendMailFalg: false,
                      deleteMailFlag: false,
                    })
                  }
                >
                  About S.M.S
                </button>
              </div>
              <div className="navbarSendMail row">
                <button
                  className="sendMail btn btn-info btn-outline-dark"
                  data-bs-toggle="button"
                  autoComplete="off"
                  aria-pressed="true"
                  type="button"
                  onClick={() =>
                    this.setState({
                      homeFlag: false,
                      sendMailFalg: true,
                      deleteMailFlag: false,
                    })
                  }
                >
                  Send Mail
                </button>
              </div>
              <div className="navbarDeleteMail row">
                <button
                  className="Delete Mail  btn btn-danger btn-outline-dark"
                  data-bs-toggle="button"
                  autoComplete="off"
                  aria-pressed="true"
                  type="button"
                  onClick={() =>
                    this.setState({
                      homeFlag: false,
                      sendMailFalg: false,
                      deleteMailFlag: true,
                    })
                  }
                >
                  Delete Mail
                </button>
              </div>
            </div>
            <div className="app-body-col col-8 col-md-9">
              <div className="app-body">
                {this.state.homeFlag === true ? (
                  <Home />
                ) : this.state.sendMailFalg === true ? (
                  <SendMail
                    onSendMail={this.handleSendMail}
                    error={this.state.error}
                    messagedescription={this.state.messagedescription}
                    setDefault={this.setDefault}
                  />
                ) : (
                  <DeleteKey
                    onDeleteMsg={this.handleDelete}
                    deleteErr={this.state.deleteErr}
                    deleteDes={this.state.deleteDes}
                    setDelDefault={this.setDelDefault}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
