import React, { useState } from 'react';
import { Sprite } from 'react-pixi-fiber';
import * as PIXI from 'pixi.js';
import buttonSpin from '../../assets/images/btn-spin.png';
const centerPoint = new PIXI.Point(0.5, 0.5);

const ButtonSpin = ({
  screenHeight,
  screenWidth,
  handleButtonClick,
  isSpinning,
}) => {
  const [x] = useState(screenWidth / 2);
  const [y] = useState(screenHeight / 1.05);
  // const [width, setWidth] = useState(250);
  // const [scale, setScale] = useState(1);
  // const [height, setHeight] = useState(60);

  return (
    <Sprite
      anchor={centerPoint}
      x={x}
      y={y}
      width={250}
      interactive
      buttonMode
      cursor={isSpinning ? 'not-allowed' : 'pointer'}
      // scale={scale}
      pointerdown={handleButtonClick}
      // pointerover={() => setScale(0.8)}
      // pointerout={() => setScale(0.6)}
      height={60}
      texture={PIXI.Texture.from(buttonSpin)}
    />
  );
};

export default ButtonSpin;
