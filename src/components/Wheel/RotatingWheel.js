import React, { useState, useCallback } from 'react';
import { usePixiTicker } from 'react-pixi-fiber';
import Wheel from './Wheel';

const RotatingWheel = (props) => {
  const [rotation, setRotation] = useState(props.rotation);

  const animate = useCallback(
    (delta) => {
      // just for fun, let's rotate mr rabbit a little
      // delta is 1 if running at 100% performance
      // creates frame-independent tranformation
      setRotation((rotation) => rotation + props.speed);
    },
    [props.speed]
  );
  usePixiTicker(animate);

  return <Wheel {...props} rotation={rotation} />;
};

export default RotatingWheel;
