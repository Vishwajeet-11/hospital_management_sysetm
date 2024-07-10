import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <div className="hero container">
      <div className="banner">
        <h1>{title}</h1>
        <p>
          Aute enim ea laboris nulla dolor reprehenderit consequat adipisicing
          Lorem aliquip.Dolor veniam aute voluptate esse enim aute esse nisi
          Lorem occaecat eu. Exercitation excepteur sit duis exercitation tempor
          excepteur fugiat dolor irure duis eu nulla mollit ad. Deserunt in
          occaecat ea do commodo magna ea do mollit.
        </p>
      </div>
      <div className="banner">
        <img src={imageUrl} alt="hero"  className="animated-image"/> 
        <span>
          <img src="/Vector.png" alt="vector"/>
        </span>
      </div>
    </div>
  );
};

export default Hero;
