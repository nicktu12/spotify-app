import React from 'react';
import PropTypes from 'prop-types';

export const Meter = (props) => {
  var {
    percent = 0,         // a number between 0 and 1, inclusive
    width = 100,         // the overall width
    height = 10,         // the overall height
    rounded = true,      // if true, use rounded corners
    color = "rgb(255,150,36)",   // the fill color
    animate = false,     // if true, animate when the percent changes
    label = null         // a label to describe the contents (for accessibility)
  } = props;

  var round =  rounded ? Math.ceil(height / 2) : 0;
  var otherWidth =  percent ? 
    Math.max(height, width * Math.min(percent, 1)) :
    0;
  var style = animate ? { "transition": "width 500ms, fill 250ms" } : null;

  return (
    <svg width={width} height={height} aria-label={label}>
      <rect 
        width={width} 
        height={height} 
        fill="rgb(22,21,21)" 
        rx={round} 
        ry={round}
      />
      <rect 
        width={otherWidth} 
        height={height} 
        fill={color} 
        rx={round} 
        ry={round} 
        style={style}
      />
    </svg>
  );
};

Meter.propTypes = {
  percent: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  rounded: PropTypes.bool,
  color: PropTypes.string,
  animate: PropTypes.bool,
  label: PropTypes.number,
};
