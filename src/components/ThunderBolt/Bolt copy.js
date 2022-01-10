import React, { useState } from 'react';
import { Sprite } from 'react-pixi-fiber';
import * as PIXI from 'pixi.js';
import vegas from '../../assets/images/bolt@2x.png';
const centerPoint = new PIXI.Point(0.5, 0.5);

const Bolt = ({ screenHeight, screenWidth }) => {
  const [x] = useState((screenWidth / 2) * 1.03);
  const [y] = useState((screenHeight / 6) * 0.95);
  const [width] = useState(screenWidth * 0.15);
  const [height] = useState(screenHeight * 0.3);
  return (
    <Sprite
      anchor={centerPoint}
      x={x}
      y={y}
      width={width}
      height={height}
      texture={PIXI.Texture.from(vegas)}
    />
  );
};

export default Bolt;
