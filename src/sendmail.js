import React, { Component } from "react";
class SendMail extends Component {
  state = {
    targeturl: "",
    email: "",
    password: "",
    key: "",
    Message: "",
    checked: false,
    defaultUrl: "https://localhost:3200/",
  };

  componentDidMount = () => {
    this.props.setDefault();
  };

  onTrigger = async (event) => {
    let target =
      this.state.checked === false
        ? this.state.targeturl
        : this.state.defaultUrl;
    this.props.onSendMail(
      target,
      this.state.email,
      this.state.password,
      this.state.key,
      this.state.Message
    );
    event.preventDefault();
  };

  render() {
    const { error, messagedescription } = this.props;
    return (
      <div className="sendEmailformdiv row gx-2">
        <h1>Send Secret Email to your friends!!</h1>
        <form className="sendMailFom" onSubmit={this.onTrigger}>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckIndeterminate"
              onChange={() => {
                this.setState({
                  checked: !this.state.checked,
                });
              }}
            />
            <label
              className="form-check-label"
              htmlFor="flexCheckIndeterminate"
            >
              <b>Use default Target Url</b>
            </label>
          </div>
          {this.state.checked === false ? (
            <div
              className="input-group flex-nowrap row targeturl "
              style={{ marginTop: "5px" }}
            >
              <span
                className="input-group-text col-3 col-md-2"
                id="addon-wrapping"
              >
                <img
                  src="https://img.icons8.com/metro/26/000000/delete-link.png"
                  height="20px"
                  alt="targeturl"
                />
              </span>
              <input
                type="url"
                className="form-control col-9 col-md-10"
                placeholder="Target URL"
                aria-label="targetUrl"
                aria-describedby="addon-wrapping"
                required
                onChange={(event) =>
                  this.setState({ targeturl: event.target.value })
                }
              ></input>
            </div>
          ) : (
            <></>
          )}
          <div
            className="input-group flex-nowrap email row"
            style={{ marginTop: "5px" }}
          >
            <span
              className="input-group-text col-3 col-md-2"
              id="addon-wrapping"
            >
              📧
            </span>
            <input
              type="email"
              className="form-control col-9 col-md-10"
              placeholder="Target Email"
              aria-label="Email"
              aria-describedby="addon-wrapping"
              required
              onChange={(event) => this.setState({ email: event.target.value })}
            ></input>
          </div>
          <div
            className="input-group flex-nowrap password row"
            style={{ marginTop: "5px" }}
          >
            <span
              className="input-group-text col-3 col-md-2"
              id="addon-wrapping"
            >
              <img
                src="https://img.icons8.com/ios-filled/50/000000/password-window.png"
                height="20px"
                alt="password"
              />
            </span>
            <input
              type="password"
              className="form-control col-9 col-md-10"
              placeholder="Password"
              aria-label="Password"
              aria-describedby="addon-wrapping"
              required
              onChange={(event) =>
                this.setState({ password: event.target.value })
              }
            ></input>
          </div>
          <div
            className="input-group flex-nowrap key row"
            style={{ marginTop: "5px" }}
          >
            <span
              className="input-group-text col-3 col-md-2"
              id="addon-wrapping"
            >
              <img
                src="https://img.icons8.com/pastel-glyph/64/000000/key--v1.png"
                height="20px"
                alt="key"
              />
            </span>
            <input
              type="text"
              className="form-control col-9 col-md-10"
              placeholder="Key"
              aria-label="key"
              aria-describedby="addon-wrapping"
              required
              onChange={(event) => this.setState({ key: event.target.value })}
            ></input>
          </div>
          <div
            className="input-group flex-nowrap Message row"
            style={{ marginTop: "5px" }}
          >
            <span
              className="input-group-text col-3 col-md-2"
              id="addon-wrapping"
            >
              <img
                src="https://img.icons8.com/fluent/48/000000/writer-male.png"
                height="20px"
                alt="Message"
              />
            </span>
            <textarea
              className="form-control col-9 col-md-10"
              placeholder="Message"
              aria-label="Message"
              aria-describedby="addon-wrapping"
              required
              onChange={(event) =>
                this.setState({ Message: event.target.value })
              }
            ></textarea>
          </div>
          <div className="errormessage" style={{ marginTop: "5px" }}>
            {error}
          </div>
          <div className="messagedescription" style={{ marginTop: "5px" }}>
            {messagedescription}
          </div>
          <button
            type="submit"
            data-toggle="button"
            aria-pressed="false"
            autoComplete="off"
            className=" btn btn-success btn-lg"
            style={{ marginTop: "8px" }}
          >
            Send
          </button>
        </form>
      </div>
    );
  }
}

export default SendMail;
