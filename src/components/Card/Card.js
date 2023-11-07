import React from "react";
import "./Card.css";
import BasicModal from "../Modal/BasicModal";
const Card = (props) => {
  // console.log("props");
  // console.log(props);
  let colorr = "rgb(179, 0, 0)";
  if (props.data.vote_average.toFixed(0) > 5) {
    colorr = "rgb(0, 179, 128)";
  }
  return (
    <div>
      <div className="card-wrapper relative">
        <div
          style={{ borderColor: `${colorr}` }}
          className=" progress-rounded flex justify-center items-center"
        >
          {props.data.vote_average.toFixed(1)}
        </div>
        <div className="card flex justify-center flex-col bg-slate-200 text-align-center h-12 pb-5">
          <img
            className="poster-image "
            src={props.baseURL + "/t/p/w220_and_h330_face" + props.poster}
          />
          <BasicModal data={props.data} />
          <h1 className="title p-2 text-xs font-bold ">{props.title}</h1>
          <h1>{props.orignalTitle}</h1>
        </div>
      </div>
    </div>
  );
};

export default Card;
