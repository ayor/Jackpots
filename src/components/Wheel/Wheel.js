import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Sprite } from 'react-pixi-fiber';
import * as PIXI from 'pixi.js';
import wheel from '../../assets/images/wheel.png';
const centerPoint = new PIXI.Point(0.5, 0.5);

const Wheel = ({ screenHeight, screenWidth, rotation }) => {
  const [x] = useState(screenWidth / 2);
  const [y] = useState(screenHeight / 1.35);

  const wheelRef = useRef();

  return (
    <Sprite
      anchor={centerPoint}
      x={x}
      ref={wheelRef}
      y={y}
      rotation={rotation}
      width={250}
      height={250}
      texture={PIXI.Texture.from(wheel)}
    />
  );
};

export default Wheel;
