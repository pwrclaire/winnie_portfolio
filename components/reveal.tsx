import React, { useState, useEffect }from "react";
import R from "react-reveal-text";
import { useWindowDimensions } from './hooks';

export default function Revealf() {
  const [toShow, setToShow] = useState(false);
  const lg = useWindowDimensions().width > 768;
  useEffect(() => {
    setTimeout(() => {
      setToShow(true);
    }, 300);
  }, [])
  return (
    <div style={lg ? textStyles : textStyles2}>
      <R show={toShow}>PHOTOGRAPHY</R>
    </div>
  );
}

const textStyles = {
  color: '#4AB1A1',
  fontSize: '42px',
  lineHeight: '50px',
  fontFamily: 'sans-serif',
  textAlign: 'center',
  paddingLeft: '0.5em',
  letterSpacing: '0.3em',
};

const textStyles2 = {
  color: '#4AB1A1',
  fontSize: '30px',
  lineHeight: '50px',
  fontFamily: 'sans-serif',
  textAlign: 'center',
  paddingLeft: '0.4em',
  letterSpacing: '0.2em',
}