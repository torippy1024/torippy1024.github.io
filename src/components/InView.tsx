import { ReactNode } from "react";
import { useInView } from "react-intersection-observer";
import "animate.css";

type InViewType = {
  children: ReactNode;
  rootMargin?: number;
  minHeight?: number;
  className?: string;
};

const InView = ({children, rootMargin=100, minHeight=rootMargin, className=""}: InViewType) => {
  const { ref, inView } = useInView({
    rootMargin: `${-rootMargin}px`,
    triggerOnce: true,
  });

  return (
    <div ref={ref} style={{minHeight: minHeight}} className={className}>
      {inView && <div className="animate__animated animate__fadeInUp">
        {children}
      </div>}
    </div>
  );
};

export default InView;