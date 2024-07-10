import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <div className="container biography">
      <div className="banner">
        <img src={imageUrl} alt="aboutImg" />
      </div>
      <div className="banner">
        <p>Biography</p>
        <h3>Who We Are</h3>
        <p>
          Commodo consectetur qui sint dolor deserunt duis do voluptate qui est.
          Aliquip consequat voluptate exercitation id labore amet laboris. Magna
          dolor eu laboris qui cillum enim dolore labore proident ad minim
          adipisicing reprehenderit. Ut eiusmod tempor consectetur minim aute
          laboris irure elit sint anim esse est eiusmod dolore. Pariatur anim
          laboris ex fugiat consectetur excepteur irure occaecat eiusmod dolor
          consequat laborum voluptate.
        </p>
        <p>
          Culpa ad consequat do occaecat nulla est ipsum nulla eiusmod. Nisi
          veniam qui ex cupidatat deserunt ad do est. In anim elit ex aliqua
          cillum laboris enim ad consequat reprehenderit officia aliqua
          voluptate. Adipisicing nostrud consequat eiusmod consequat dolor
          nostrud est voluptate. Nostrud sit mollit occaecat non. Excepteur
          deserunt adipisicing ea elit aliquip sunt Lorem ex. Labore in
          adipisicing aliquip cupidatat consequat aliqua mollit cupidatat eu
          enim eu deserunt aliquip mollit.
        </p>
        <p>Amet ut magna quis labore.</p>
        
      </div>
    </div>
  );
};

export default Biography;
