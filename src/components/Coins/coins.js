import React, { useEffect, useRef } from 'react';
import { Container, Sprite, Text } from 'react-pixi-fiber';
import * as PIXI from 'pixi.js';
import { gsap } from 'gsap';
import coins from '../../assets/images/coins.png';
const centerPoint = new PIXI.Point(0.5, 0.5);

const textStyle = {
  fontFamily: 'Arial',
  fontSize: 26,
  fontStyle: 'italic',
  fontWeight: 'bold',
  fill: ['#ffffff', '#00ff99'], // gradient
  stroke: '#4a1850',
  strokeThickness: 5,
  dropShadow: true,
  dropShadowColor: '#000000',
  dropShadowBlur: 4,
  dropShadowAngle: Math.PI / 6,
  dropShadowDistance: 6,
  wordWrap: true,
  wordWrapWidth: 440,
  lineJoin: 'round',
};
const Message = React.forwardRef((props, ref) => {
  return (
    <Text anchor={centerPoint} ref={ref} text={props.text} style={textStyle} />
  );
});

export default function Coins({ screenWidth, screenHeight, message }) {
  let coinRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      coinRef.current,
      { y: 0, x: screenWidth / 2, alpha: 0 },
      {
        x: screenWidth / 2,
        y: screenHeight / 1.5,

        alpha: 1,
        width: 300,

        height: 300,
        duration: 1.1,
        ease: 'bounce',
      }
    );
  }, []);
  return (
    <Container>
      {message === 'Jackpot!!' && (
        <Sprite
          anchor={centerPoint}
          x={screenWidth / 2}
          ref={coinRef}
          y={screenHeight / 2}
          width={300}
          height={300}
          texture={PIXI.Texture.from(coins)}
        />
      )}
      <Message text={message} ref={coinRef} />
    </Container>
  );
}
