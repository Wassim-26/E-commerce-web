import React from "react";

export default function ShoeItem(props) {
  return (
    <div
      className="img-container"
      onClick={function () {
        props.changeShowWithProps(props.img);
      }}
    >
      <img src={props.img} width={132} height={132} />
      <p className="shoe-brand">{props.name}</p>
    </div>
  );
}
