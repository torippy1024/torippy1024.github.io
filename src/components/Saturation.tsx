import Sketch from "react-p5";
import p5Types from "p5"; //Import this for typechecking and intellisense

const barWidth = 20;
let lastBar = -1;
  
const Saturation = () => {
	const setup = (p5: p5Types, canvasParentRef: Element) => {
    const width = Math.min(p5.windowWidth * 0.6, 720);
    p5.createCanvas(width, 100).parent(canvasParentRef);
    p5.colorMode(p5.HSB, p5.width, p5.height, 100);
    p5.noStroke();
	};

	const draw = (p5: p5Types) => {
    let whichBar = p5.mouseX / barWidth;
    if (whichBar !== lastBar && p5.mouseY > 0 && p5.mouseY < p5.height) {
      let barX = whichBar * barWidth;
      p5.fill(barX, p5.mouseY, 66);
      p5.rect(barX, 0, barWidth, p5.height);
      lastBar = whichBar;
    }
	};

	return (
    <div className="relative flex justify-center items-center">
      <div className="border">
        <Sketch setup={setup} draw={draw} />
      </div>
      <div className="absolute top-0 w-full text-center">
        <div className="text-base-100 font-bold text-3xl sm:text-5xl">
          {"pw{happy}"}
        </div>
        <div>
          ?
        </div>
      </div>
    </div>
  );
};

export default Saturation;