import React from "react";
import { Link } from "react-router-dom";

import "./landing.title.styles.scss";

const Landing = () => {

  let imgStyle = {
    backgroundImage: `linear-gradient(
            rgba(0, 0, 0, 0.2),
            rgba(0, 0, 0, 0.5)
          ), url("./img/landing.jpg")`,
  };

  return (
    <div className="main-title image" style={imgStyle}>
      {/* LOGO */}
      <div className="logo">
        <p> do the travel.</p>
      </div>
      {/* Content part */}
      <div className="content">
        <h1>Get ready for your lifetime journey!</h1>
        <h5>
          Collection of the most beautiful places, experiences and unusual
          housing in the world
        </h5>
        <Link to="/quiz">
          <button type="button" className="btn btn-primary btn-lg">
            Start the Quiz
          </button>
        </Link>
      </div>

      {/* onClick make the URL inside imgStyle change, you can pass it with props */}
      <div className="pagination">
        <ion-icon name="chevron-back-outline"></ion-icon>
        <p>Get inspired</p>
        <ion-icon name="chevron-forward-outline"></ion-icon>
      </div>
    </div>
  );
};

export default Landing;