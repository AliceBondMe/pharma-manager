import { FC, useEffect, useState } from "react";
import clockface from '../../assets/images/clock-face.png'
import { hoursArrowStyle, imageWrapStyle, minutesArrowStyle, secondsArrowStyle } from './MedicinesPage.styles';

const getSecAngle = (seconds: number): string => {
  return `${seconds / 60 * 360}deg`;
}
const getMinAngle = (minutes: number): string => {
  return `${minutes / 60 * 360}deg`;
}
const getHourAngle = (hours: number): string => {
  return `${hours / 12 * 360}deg`;
}

const MedicinesPage: FC = () => {
  const [currentTime, setCurrentTime ] = useState(new Date());

  useEffect(() => {
    const secondsInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000 / 60)
  
    return () => {
      clearInterval(secondsInterval);
    }
  }, [])

  const seconds = currentTime.getSeconds() + currentTime.getMilliseconds() / 1000;
  const minutes = currentTime.getMinutes() + seconds / 60;
  const hours = currentTime.getHours() % 12 + minutes / 60;
  

  return <>
    <h2>CLOCK</h2>
    <div css={imageWrapStyle} >
      <img src={clockface} alt="clockface" />
      <div css={secondsArrowStyle(getSecAngle(seconds))}></div>
      <div css={minutesArrowStyle(getMinAngle(minutes))}></div>
      <div css={hoursArrowStyle(getHourAngle(hours))}></div>
    </div>
  </>;
};
export default MedicinesPage;
