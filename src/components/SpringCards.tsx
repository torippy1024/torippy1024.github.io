import { useState } from "react";
import { useSprings, animated, to as interpolate } from "@react-spring/web";
import { useDrag } from "react-use-gesture";


const cards = [
  "https://upload.wikimedia.org/wikipedia/commons/f/f5/RWS_Tarot_08_Strength.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/5/53/RWS_Tarot_16_Tower.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/9/9b/RWS_Tarot_07_Chariot.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/RWS_Tarot_02_High_Priestess.jpg/690px-RWS_Tarot_02_High_Priestess.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg",
];

const to = (i: number) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
});

const from = (_i: number) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });

const trans = (r: number, s: number) =>
  `perspective(1500px) rotateX(0deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`;

const SpringCards = () => {
  const [gone] = useState(() => new Set());
  const [props, api] = useSprings(cards.length, i => ({
    ...to(i),
    from: from(i),
  }));

  const bind = useDrag(({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
    const trigger = velocity > 0.2;
    const dir = xDir < 0 ? -1 : 1;

    if (!down && trigger) gone.add(index);

    api.start(i => {
      if (index !== i) return;
      const isGone = gone.has(index);
      const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0;
      const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0);
      const scale = down ? 1.1 : 1;
      return {
        x,
        rot,
        scale,
        delay: undefined,
        config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
      };
    });

    if (!down && gone.size === cards.length) {
      setTimeout(() => {
        gone.clear();
        api.start(i => to(i));
      }, 600);
    }
  });

  return (
    <div className="h-60 flex items-center justify-center overflow-hidden relative">
      <div>{"pw{robot}"}</div>
      {props.map(({ x, y, rot, scale }, i) => (
        <animated.div className="absolute touch-none" key={i} style={{ x, y }}>
          <animated.img
            {...bind(i)}
            style={{
              transform: interpolate([rot, scale], trans),
            }}
            src={`${cards[i]}`}
            className="h-48 p-2 rounded-xl shadow-2xl bg-gray-200 object-contain"
          />
        </animated.div>
      ))}
    </div>
  )
}

export default SpringCards;