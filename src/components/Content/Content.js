import React from "react";
import "./Content.css";

function Content() {
  let data = {
    titleB1: "READY TO USE",
    titleB2:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  };
  return (
    <>
      <div className="conimage" id="Service">
        <div className="container title-con ">
          <div className="card card-con shadow-con">
            <h2 className="card-context fw-bold">{data.titleB1}</h2>
            <p className="card-context">{data.titleB2}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
