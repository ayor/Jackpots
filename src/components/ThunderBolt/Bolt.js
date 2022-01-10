import React, { useState, useRef, useEffect } from 'react';
import { Sprite } from 'react-pixi-fiber';
import * as PIXI from 'pixi.js';
import vegas from '../../assets/images/bolt@2x.png';
const centerPoint = new PIXI.Point(0.5, 0.5);

const Bolt = ({ screenHeight, screenWidth, tl }) => {
  const [x] = useState((screenWidth / 2) * 1.03);
  const [y] = useState((screenHeight / 6) * 0.95);
  const [width] = useState(screenWidth * 0.15);
  const [height] = useState(screenHeight * 0.3);

  let boltRef = useRef();

  useEffect(() => {
    tl.fromTo(
      boltRef.current,
      { alpha: 0 },
      { alpha: 1, repeat: -1, repeatDelay: 0, duration: 0.2 },
      '<'
    );
  });
  return (
    <Sprite
      anchor={centerPoint}
      x={x}
      ref={boltRef}
      y={y}
      width={width}
      height={height}
      texture={PIXI.Texture.from(vegas)}
    />
  );
};

export default Bolt;
