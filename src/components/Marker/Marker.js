import React, { useEffect, useState, useRef } from 'react';
import { Sprite } from 'react-pixi-fiber';
import { gsap } from 'gsap';
import * as PIXI from 'pixi.js';
import marker from '../../assets/images/marker.png';
const centerPoint = new PIXI.Point(0.5, 0.5);

const Marker = ({ screenHeight, screenWidth }) => {
  const [x] = useState(screenWidth / 2);
  const [y] = useState(screenHeight / 1.7);

  const markerRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      markerRef.current,
      {
        alpha: 0,
      },
      { alpha: 1 }
    );
  }, []);
  return (
    <Sprite
      anchor={centerPoint}
      x={x}
      y={y}
      ref={markerRef}
      width={60}
      height={60}
      texture={PIXI.Texture.from(marker)}
    />
  );
};

export default Marker;
