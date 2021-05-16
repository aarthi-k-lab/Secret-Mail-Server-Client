import { React, Component } from "react";
import "./messagedisplay.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

class MessageDisplay extends Component {
  state = { message: "", result: "" };

  componentDidMount = async () => {
    try {
      const rs = this.props.rs;
      if (rs) {
        const getMessageUrl =
          "https://secret-be.herokuapp.com/message-by-id/" + rs;
        const getMsgRes = await fetch(getMessageUrl);
        const messageData = await getMsgRes.json();
        this.setState({ result: messageData.result });
        if (messageData.result.length >= 1) {
          this.setState({ message: messageData.result[0].message });
        } else {
          this.setState({ message: "Sorry the message has been deleted" });
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
  render() {
    return (
      <div className="MessageDisplay">
        <div className="messageview-container container">
          {this.state.message !== "" ? (
            <div className="messageview-body row">
              <h1 style={{ textAlign: "center", color: "white" }}>
                Hi !!! You got a message
              </h1>
              <h5 style={{ textAlign: "center", color: "white" }}>
                {this.state.message}
              </h5>
            </div>
          ) : (
            <div className="messageview-body row">
              <h1 style={{ textAlign: "center", color: "white" }}>
                Welcome to s.m.s
              </h1>
              <h5 style={{ textAlign: "center", color: "white" }}>
                To create your own secret message login to s.m.s
              </h5>
              <Router>
                <Link
                  to="/"
                  style={{ textAlign: "center", color: "white" }}
                  target="_blank"
                >
                  Create Secret Mail
                </Link>
              </Router>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default MessageDisplay;
