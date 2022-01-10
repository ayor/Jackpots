import React, { useEffect, useRef } from 'react';
import { Sprite } from 'react-pixi-fiber';
import * as PIXI from 'pixi.js';
import { gsap } from 'gsap';
import coins from '../../assets/images/coins.png';
const centerPoint = new PIXI.Point(0.5, 0.5);
export default function Coins({ screenWidth, screenHeight, jackpotSize }) {
  const coinRef = useRef();
  useEffect(() => {
    gsap.fromTo(
      coinRef.current,
      { y: 0, x: screenWidth / 2, alpha: 0 },
      {
        x: screenWidth / 2,
        y: screenHeight / 1.5,

        alpha: 1,
        width: 300 * jackpotSize.width,

        height: 300 * jackpotSize.height,
        duration: 1.2,
        ease: 'bounce',
      }
    );
  }, []);
  return (
    <Sprite
      anchor={centerPoint}
      x={screenWidth / 2}
      ref={coinRef}
      y={screenHeight / 2}
      width={50}
      height={50}
      texture={PIXI.Texture.from(coins)}
    />
  );
}
