import React from "react";

function CardAboutUs() {
  return (
    <div>
      <div id="aboutHeading">
        <h1>About us</h1>
      </div>
      <div>
        <p id="aboutPTagStyle">
          We are a group of full-stack developers training in Tuwaiq Academy
          (JavaScript Bootcamp) We decided to build IoT app that help users to
          manage their devices remotely !
        </p>
      </div>
      <div id="Cardd">
        <div className="AbuoutCard">
          <img
            className="AboutUsImage"
            src="data:image/png;base64,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"
            alt="Avatar"
          />
          <div className="containerForCard">
            <h4>
              <b>Ayman AlAsiri</b>
            </h4>
            <p>Full-Stack developer</p>
            <p>BA of Information Systems</p>
            <p>Trainee at Tuwaiq Academy</p>
            <a href="linkedin">Find me on linkedin</a>
          </div>
        </div>
      </div>
      <div id="Cardd">
        <div className="AbuoutCard">
          <img
            className="AboutUsImage"
            src="data:image/png;base64,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"
            alt="Avatar"
          />
          <div className="containerForCard">
            <h4>
              <b>Mohammed AlMallahi</b>
            </h4>
            <p>Full-Stack developer</p>
            <p>BA of </p>
            <p>BA of Information Systems</p>
            <a href="linkedin">Find me on linkedin</a>
          </div>
        </div>
      </div>
      <div id="Cardd">
        <div className="AbuoutCard">
          <img
            className="AboutUsImage"
            src="data:image/png;base64,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"
            alt="Avatar"
          />
          <div className="containerForCard">
            <h4>
              <b>Ahmed AlSaif</b>
            </h4>
            <p>Full-Stack developer</p>
            <p>BA of</p>
            <p>Trainee at Tuwaiq Academy</p>
            <a href="linkedin">Find me on linkedin</a>
          </div>
        </div>
      </div>
      <div id="Cardd">
        <div className="AbuoutCard">
          <img
            className="AboutUsImage"
            src="data:image/png;base64,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"
            alt="Avatar"
          />
          <div className="containerForCard">
            <h4>
              <b>Mohammed Bagabas</b>
            </h4>
            <p>Full-Stack developer</p>
            <p>BA of</p>
            <p>Trainee at Tuwaiq Academy</p>
            <a href="linkedin">Find me on linkedin</a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CardAboutUs;
