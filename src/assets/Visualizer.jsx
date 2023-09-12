import React from "react";
import Sketch from "react-p5";

export const Visualizer = ({ song }) => {
  let changing = false;
  let segment = 0;
  let section = 0;
  let tatum = 0;
  let beat = 0;
  let bg;
  let c1, c2;
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight);
    bg = p5.color(0);
  };
  const draw = (p5) => {
    if (changing) {
    } else {
      updateGraphics();
    }
  };
  const windowResized = (p5) => {};

  const updateGraphics = () => {
    // for (let i = section; i < song.sections.length(); i++) {}
    // for (let i = segment; i < song.segments.length(); i++) {}
    // for (let i = tatum; i < song.tatums.length(); i++) {}
    // for (let i = beat; i < song.beats.length(); i++) {}
  };
  return <Sketch setup={setup} draw={draw} windowResized={windowResized} />;
};
