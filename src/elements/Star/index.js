import React from "react";
import propTypes from "prop-types";
import'./index.scss'

export default function Star({ value, height, width, spacing }) {
  const decimals = Number(value) % 1;

  const star = [];

  let leftPos = 0;
  for (let index = 0; index < value - decimals; index++) {
    leftPos = leftPos + width;
    star.push(
      <div
        className="star"
        key={`star-${index}`}
        style={{ left:index *  width, height: height, width: width, marginRight: spacing }}
      ></div>
    );
  }

  if (decimals > 0 && value <= 5) {
    star.push(
      <div
        className="star"
        key={`starWithDecimals`}
        style={{ left: leftPos, height: height, width: decimals * width - spacing }}
      ></div>
    );
  }

  const starPlaceholder = [];
  for (let index = 0; index < 5; index++) {
    starPlaceholder.push(
      <div
        className="star placeholder"
        key={`starPlaceHolder-${index}`}
        style={{  left:index * width, height: height, width: width, marginRight: spacing }}
      ></div>
    );
  }

  return <React.Fragment>
  
    <div className={['stars'].join("")} style={{ height: height }}>
        {starPlaceholder}
        {star}
    </div>

  </React.Fragment>;
}
Star.propTypes = {
  className: propTypes.string,
  value: propTypes.number,
  width: propTypes.number,
  spacing: propTypes.number,
  height: propTypes.number,
};
