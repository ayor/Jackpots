import React, { useState, useRef, useEffect } from 'react';
import { Sprite } from 'react-pixi-fiber';
import * as PIXI from 'pixi.js';
import vegas from '../../assets/images/must_drop.png';
const centerPoint = new PIXI.Point(0.5, 0.5);

const MustDrop = ({ screenHeight, screenWidth, tl }) => {
  let mustDropRef = useRef();

  useEffect(() => {
    tl.fromTo(
      mustDropRef.current,
      { alpha: 0 },
      { alpha: 1, delay: 0.4, duration: 0.24, repeat: 2 }
    );
  }, [tl]);
  const [x] = useState(screenWidth / 2);
  const [y] = useState(screenHeight / 2);
  const [width] = useState(screenWidth * 0.7);
  const [height] = useState(screenHeight * 0.2);
  return (
    <Sprite
      anchor={centerPoint}
      x={x}
      ref={mustDropRef}
      y={y}
      width={width}
      height={height}
      texture={PIXI.Texture.from(vegas)}
    />
  );
};

export default MustDrop;
