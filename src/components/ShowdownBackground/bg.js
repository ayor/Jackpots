import React, { useEffect, useState } from 'react';
import { Sprite } from 'react-pixi-fiber';
import * as PIXI from 'pixi.js';
import showdownBg from '../../assets/images/showdown-off.png';
const centerPoint = new PIXI.Point(0.5, 0.5);

const ShowdownBg = ({ screenWidth, screenHeight }) => {
  const [x] = useState(screenWidth / 2);
  const [y] = useState(screenHeight / 3);
  const [width] = useState(screenWidth * 0.8);
  const [height] = useState(screenHeight * 0.5);

  useEffect(() => {});
  return (
    <Sprite
      anchor={centerPoint}
      width={width}
      height={height}
      x={x}
      y={y}
      texture={PIXI.Texture.from(showdownBg)}
    />
  );
};

export default ShowdownBg;
