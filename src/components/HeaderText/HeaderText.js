import React, { useEffect, useState, useRef } from 'react';
import { Sprite, Container } from 'react-pixi-fiber';
import vegas from '../../assets/images/vegas@2x.png';

import * as PIXI from 'pixi.js';
import slots from '../../assets/images/slots@2x.png';
const centerPoint = new PIXI.Point(0.5, 0.5);

const HeaderText = ({ screenHeight, screenWidth, tl }) => {
  const [vegasX] = useState(screenWidth / 3);
  const [vegasY] = useState(screenHeight / 6);
  const [vegasWidth] = useState(screenWidth * 0.37);
  const [vegasHeight] = useState(screenHeight * 0.19);

  //sslots sstates
  const [x] = useState((screenWidth / 3) * 2.08);
  const [y] = useState(screenHeight / 6);
  const [width] = useState(screenWidth * 0.33);
  const [height] = useState(screenHeight * 0.19);
  let vegasRef = useRef();
  let slotRef = useRef();

  useEffect(() => {
    tl.fromTo([vegasRef.current, slotRef.current], { alpha: 0 }, { alpha: 1 });
    tl.fromTo(
      [vegasRef.current, slotRef.current],
      { alpha: 0 },
      { alpha: 1, delay: 0.1, duration: 0.25, repeat: 1 }
    );
  }, [tl]);
  return (
    <Container>
      <Sprite
        anchor={centerPoint}
        x={vegasX}
        y={vegasY}
        ref={vegasRef}
        width={vegasWidth}
        height={vegasHeight}
        texture={PIXI.Texture.from(vegas)}
      />

      <Sprite
        anchor={centerPoint}
        x={x}
        y={y}
        ref={slotRef}
        width={width}
        height={height}
        texture={PIXI.Texture.from(slots)}
      />
    </Container>
  );
};

export default HeaderText;
