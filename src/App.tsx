import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import './App.scss';

function App() {
  const boxRef = useRef();
  // wait until DOM has been rendered
  useEffect(() => {
    gsap.to(boxRef.current, { rotation: "+=360" });
  });
  return (
    <div className="App">
      <h4 className="box" ref={boxRef}>Hi</h4>
    </div>
  );
}

export default App;
