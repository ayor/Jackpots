import React from 'react';
import { Sprite } from 'react-pixi-fiber';
import * as PIXI from 'pixi.js';
import backgroundImage from '../../assets/images/header.png';

// const centerPoint = new PIXI.Point(0.5, 0.5);

const Background = ({ screenWidth, screenHeight }) => {
  return (
    <Sprite
      texture={PIXI.Texture.from(backgroundImage)}
      width={screenWidth}
      height={screenHeight}
    />
  );
};

export default Background;
