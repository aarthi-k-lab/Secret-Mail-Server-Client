import React, { Component } from "react";
class DeleteKey extends Component {
  state = { password: "", key: "" };
  onTrigger = async (event) => {
    this.props.onDeleteMsg(this.state.password, this.state.key);
    event.preventDefault();
  };

  componentDidMount = () => {
    this.props.setDelDefault();
  };

  render() {
    const { deleteErr, deleteDes } = this.props;
    return (
      <div className="deleteMessageformdiv row gx-2">
        <h1>Delete the message sent!!</h1>
        <form className="deleteMessageForm" onSubmit={this.onTrigger}>
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

          <div className="errormessage" style={{ marginTop: "5px" }}>
            {deleteErr}
          </div>
          <div className="messagedescription" style={{ marginTop: "5px" }}>
            {deleteDes}
          </div>
          <button
            type="submit"
            data-toggle="button"
            aria-pressed="false"
            autoComplete="off"
            className=" btn btn-danger btn-lg"
            style={{ marginTop: "8px" }}
          >
            Delete
          </button>
        </form>
      </div>
    );
  }
}

export default DeleteKey;
