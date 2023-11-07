import React from "react";
import "./Card.css";
import BasicModal from "../Modal/BasicModal";
const Card = (props) => {
  // console.log("props");
  // console.log(props);
  return (
    <div>
      <div className="card-wrapper">
        <div className="card flex justify-center flex-col bg-slate-200 text-align-center pb-5">
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
