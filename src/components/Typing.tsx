import React, {
  useState,
  useEffect,
  useRef
} from "react";

type TypingPropsType = {
  message: string;
  typeEnd: Function;
  cursor?: boolean;
  className?: string;
  speed?: number;
  startDelay?: number;
};

const Typing = ({
  message,
  typeEnd,
  cursor = true,
  className = "",
  speed = 100
}: TypingPropsType) => {

  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const msgEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setText("");
    setIsTyping(true);
    const charItr = message[Symbol.iterator]();
    let timerId: number;

    (function showChar() {
      const nextChar = charItr.next();
      if (nextChar.done) {
        setIsTyping(false);
        typeEnd();
        return;
      }
      setText(current => current + nextChar.value);

      timerId = window.setTimeout(showChar, speed);
    }());

    return () => clearTimeout(timerId);
  }, []);

  return (
    <div
      className={className + " flex items-stretch"}
      ref={msgEl}
    >
      {text}
      {isTyping && <div className="animate-blink w-[1px]"></div>}
    </div>
  );
};

export default Typing;