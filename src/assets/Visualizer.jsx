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
  let m;
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight);
    bg = p5.color(0);
  };
  const draw = (p5) => {
    m = p5.millis() / 1000;
    p5.ellipse(p5.mouseX, p5.mouseY, 100);
    if (changing) {
      p5.fill(p5.random(255), p5.random(255), p5.random(255), p5.random(255));
      p5.stroke(p5.random(255), p5.random(255), p5.random(255), p5.random(255));
      changing = false;
    } else {
      if (p5.millis() <= song.track.duration * 1000) {
        updateGraphics();
      }
    }
  };
  const windowResized = (p5) => {};

  const updateGraphics = () => {
    // for (let i = section; i < song.sections.length; i++) {
    //   if (m > song.sections[i].start + song.sections[i].duration) {
    //     changing = true;
    //     section += 1;
    //     console.log(section);
    //     break;
    //   }
    // }
    for (let i = segment; i < song.segments.length; i++) {
      if (m > song.segments[i].start + song.segments[i].duration) {
        changing = true;
        segment += 1;
        break;
      }
    }
    // for (let i = tatum; i < song.tatums.length; i++) {}
    // for (let i = beat; i < song.beats.length; i++) {}
  };
  return <Sketch setup={setup} draw={draw} windowResized={windowResized} />;
};
