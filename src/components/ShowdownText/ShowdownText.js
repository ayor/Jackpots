import React, { useRef, useEffect } from 'react';
import { Sprite } from 'react-pixi-fiber';
import * as PIXI from 'pixi.js';
const ShowdownText = ({ screenWidth, screenHeight, tl }) => {
  let sRef = useRef();
  let hRef = useRef();
  let o1Ref = useRef();
  let w1Ref = useRef();
  let dRef = useRef();
  let o2Ref = useRef();
  let w2Ref = useRef();
  let nRef = useRef();
  useEffect(() => {
    tl.fromTo(sRef.current, { alpha: 0 }, { alpha: 1, duration: 0.2 }, '<');
    tl.fromTo(hRef.current, { alpha: 0 }, { alpha: 1, duration: 0.2 }, '>');
    tl.fromTo(o1Ref.current, { alpha: 0 }, { alpha: 1, duration: 0.2 }, '>');
    tl.fromTo(w1Ref.current, { alpha: 0 }, { alpha: 1, duration: 0.2 }, '<');
    tl.fromTo(dRef.current, { alpha: 0 }, { alpha: 1, duration: 0.2 }, '>');
    tl.fromTo(o2Ref.current, { alpha: 0 }, { alpha: 1, duration: 0.2 }, '>');
    tl.fromTo(w2Ref.current, { alpha: 0 }, { alpha: 1, duration: 0.2 }, '>');
    tl.fromTo(nRef.current, { alpha: 0 }, { alpha: 1, duration: 0.2 }, '>');
  }, []);

  const showdownArray = [
    {
      id: 1,
      text: 's',
      x: (screenWidth / 4) * 0.25,
      y: screenHeight / 9,
      width: screenWidth * 0.2,
      compRef: sRef,
      height: screenHeight * 0.53,
    },
    {
      id: 2,
      text: 'h',
      x: (screenWidth / 4) * 0.6,
      y: screenHeight / 9,
      width: screenWidth * 0.23,
      compRef: hRef,
      height: screenHeight * 0.53,
    },
    {
      id: 3,
      text: 'o-1',
      x: (screenWidth / 4) * 1.19,
      y: screenHeight / 9,
      width: screenWidth * 0.09,
      compRef: o1Ref,
      height: screenHeight * 0.53,
    },
    {
      id: 4,
      text: 'w-1',
      x: (screenWidth / 4) * 1.39,
      y: screenHeight / 10,
      width: screenWidth * 0.2,
      compRef: w1Ref,
      height: screenHeight * 0.53,
    },
    {
      id: 5,
      text: 'd',
      x: (screenWidth / 4) * 1.82,
      y: screenHeight / 11,
      width: screenWidth * 0.21,
      compRef: dRef,
      height: screenHeight * 0.53,
    },
    {
      id: 6,
      text: 'o-2',
      x: (screenWidth / 4) * 2.15,
      y: screenHeight / 11.8,
      width: screenWidth * 0.21,
      compRef: o2Ref,
      height: screenHeight * 0.56,
    },
    {
      id: 7,
      text: 'w-2',
      x: (screenWidth / 4) * 2.48,
      y: screenHeight / 10,
      width: screenWidth * 0.21,
      compRef: w2Ref,
      height: screenHeight * 0.56,
    },
    {
      id: 8,
      text: 'n',
      x: (screenWidth / 4) * 2.91,
      y: screenHeight / 10,
      width: screenWidth * 0.21,
      compRef: nRef,
      height: screenHeight * 0.56,
    },
  ];

  return showdownArray.map(({ x, y, compRef, width, height, text, id }) => {
    return (
      <Sprite
        key={id}
        x={x}
        y={y}
        ref={compRef}
        width={width}
        height={height}
        texture={PIXI.Texture.from(
          require(`../../assets/images/${text}@2x.png`)
        )}
      />
    );
  });
};

export default ShowdownText;
