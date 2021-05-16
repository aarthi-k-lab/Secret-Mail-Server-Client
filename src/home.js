import React, { Component } from "react";
import SocialMedia from "./images/media.png";
class Home extends Component {
  state = {};
  render() {
    return (
      <div className="AboutUs row">
        <img src={SocialMedia} alt="party" />
        <h1 className="Welcome">Welcome to S.M.S</h1>
        <h5>Secret Mail Service</h5>
        <p>
          Now you can send secret mail to your friends and also delete it later
          if required.
        </p>
        <h5>
          Try it out and have fun.
          <img
            src="https://img.icons8.com/emoji/48/000000/grinning-face-emoji.png"
            alt="fun"
          />
        </h5>
      </div>
    );
  }
}

export default Home;
