import React, { useEffect, useState } from 'react';
import 'pixi.js-legacy';
import { Stage } from 'react-pixi-fiber';
import { gsap } from 'gsap';
import ShowdownBg from '../components/ShowdownBackground/bg';
import Background from '../components/Background/Background';
import MustDrop from '../components/MustDrop/MustDrop';
import Bolt from '../components/ThunderBolt/Bolt';
import ShowdownText from '../components/ShowdownText/ShowdownText';
import ButtonSpin from '../components/Button/Button';
import RotatingWheel from '../components/Wheel/RotatingWheel';
import { getPosition } from '../getData';
import HeaderText from '../components/HeaderText/HeaderText';
import Sound from 'react-sound';
// import ElectricWave from '../assets/blast.mp3';
import WheelSpin from '../assets/wheel-spin.wav';
import Spin from '../assets/new-spin.wav';
import Marker from '../components/Marker/Marker';
import Jackpot from '../components/Coins/coins';
const initialHeight = window.innerHeight;
const initialWidth = window.innerWidth;

const container = {
  minHeight: '100vh',
  width: '100%',
  padding: 0,
  margin: 0,
};

const Layout = () => {
  const [height, setHeight] = useState(initialHeight);
  const [width, setWidth] = useState(initialWidth);
  const [rotation, setRotation] = useState(0);
  const [wheelSpin, setWheelSpin] = useState(0);

  const [jackpotSize, setJackpotSize] = useState({ width: 1, height: 1 });
  const [showJackpot, setShowJackpot] = useState(false);
  const [isSpinning, setSpinning] = useState(false);
  const [speed, setSpeed] = useState(0.002);
  const [isPlaying, setPlaying] = useState(false);
  const [playLoadSound] = useState(false);
  const [showMarker, setShowMarker] = useState(false);
  const [tl] = useState(gsap.timeline({ delay: 0.8 }));
  const [options, setOptions] = useState({
    height,
    width,
    backgroundColor: 0xffffff,
  });

  useEffect(() => {
    // btnRef.current.click();

    const handleResize = () => {
      debugger;
      let newHeight = window.innerHeight;
      let newWidth = window.innerWidth;

      setHeight(newHeight);
      setWidth(newWidth);
      setOptions({ height: newHeight, width: newWidth });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleButtonClick = async () => {
    setRotation(0);
    setJackpotSize({
      width: 1,
      height: 1,
    });
    setShowJackpot(false);
    if (isSpinning) return;
    setShowMarker(false);

    setPlaying(true);
    setWheelSpin(200);
    setSpeed(1);
    setSpinning(true);
    const data = await getPosition();

    if (data) {
      setPlaying(false);
      setSpeed(0);
      setRotation(data['Position']);
      setSpinning(false);
      setShowMarker(true);
      setTimeout(() => {
        const axis = Math.random();
        setJackpotSize({
          width: axis,
          height: axis,
        });
        setShowJackpot(true);
      }, 1000);
    }
  };

  const handleSoundLoad = (obj) => {
    if (obj.loaded) {
      // setPlaying(true);
    }
  };

  return (
    <div style={container}>
      <Sound
        url={Spin}
        onLoad={handleSoundLoad}
        playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
      />
      <Sound
        url={WheelSpin}
        playStatus={playLoadSound ? Sound.status.PLAYING : Sound.status.STOPPED}
      />
      {/* <button ref={btnRef} onClick={() => setPlayingLoadSound(() => true)}>
        play
      </button> */}

      <Stage options={options}>
        <Background screenHeight={height} screenWidth={width} />
        <ShowdownBg screenHeight={height} screenWidth={width} />
        <HeaderText screenHeight={height} screenWidth={width} tl={tl} />

        <Bolt tl={tl} screenHeight={height} screenWidth={width} />
        <ShowdownText tl={tl} screenHeight={height} screenWidth={width} />

        <MustDrop tl={tl} screenHeight={height} screenWidth={width} />
        <RotatingWheel
          screenHeight={height}
          screenWidth={width}
          speed={speed}
          rotation={rotation}
          wheelSpin={wheelSpin}
        />
        {showMarker && <Marker screenHeight={height} screenWidth={width} />}

        <ButtonSpin
          screenHeight={height}
          screenWidth={width}
          isSpinning={isSpinning}
          handleButtonClick={handleButtonClick}
        />
        {showJackpot && (
          <Jackpot
            jackpotSize={jackpotSize}
            screenHeight={height}
            screenWidth={width}
          />
        )}
      </Stage>
    </div>
  );
};

export default Layout;
