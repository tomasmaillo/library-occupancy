import { useLayoutEffect, useState } from "react";
import { MAX_GRAPH_WIDTH, INTERESTING_HOURS } from "./common/constants";
import Main from "./common/Main";

const height = 1000;

const TimeAxis = () => {
  const [width, setWidth] = useState(MAX_GRAPH_WIDTH);

  useLayoutEffect(() => {
    const updateSize = () => {
      if (window.innerWidth < 760) {
        setWidth(window.innerWidth);
      } else {
        setWidth(Math.min(window.innerWidth / 2, MAX_GRAPH_WIDTH));
      }
    };
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <Main
      style={{
        position: "relative",
        height: 1,
        display: "flex",
        justifyContent: "flex-end",
        zIndex: 100,
      }}>
      <svg
        style={{
          position: "absolute",
          float: "right",
          top: -30,
        }}
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        {INTERESTING_HOURS.map((time, i) => {
          // Show every second hour
          if (i % 2 !== 0) return;
          // If width is small, show only odd axis labels
          if (i % 4 != 0 && width < (3 * MAX_GRAPH_WIDTH) / 4) return;

          return (
            <>
              <line
                x1={(width / INTERESTING_HOURS.length) * i + 1} // +1 to avoid cutoff on left
                y1="0"
                x2={(width / INTERESTING_HOURS.length) * i}
                y2={height}
                stroke="#D1D1D1"
                strokeOpacity="0.32"
                strokeWidth="0.5"
              />
              <text
                x={(width / INTERESTING_HOURS.length) * i + 3}
                y="10"
                fill="#ffffff"
                fontSize="0.5rem">
                {time}
              </text>
            </>
          );
        })}
      </svg>
    </Main>
  );
};

export default TimeAxis;
