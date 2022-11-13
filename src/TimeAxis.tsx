import { useLayoutEffect, useState } from "react";
import styled from "styled-components";

const Main = styled.div`
  font-size: 5rem;
  padding: 8px;
  margin: auto;
  max-width: 760px;
`;

const maxWidth = 400;
const height = 1000;
const times = ["9am", "11am", "1pm", "3pm", "5pm", "7pm", "9pm"];

const TimeAxis = () => {
  const [width, setWidth] = useState(maxWidth);

  useLayoutEffect(() => {
    function updateSize() {
      setWidth(Math.min(window.innerWidth / 2, maxWidth));
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <Main
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "flex-end",
        zIndex: 100,
      }}
    >
      <svg
        style={{
          position: "absolute",
          float: "right",
          top: -20,
        }}
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {times.map((time, i) => {
          // If width is small, show only odd axis labels
          if (i % 2 != 0 && width < (3 * maxWidth) / 4) return;

          return (
            <>
              <line
                x1={(width / times.length) * i + 1} // +1 to avoid cutoff on left
                y1="0"
                x2={(width / times.length) * i}
                y2={height}
                stroke="#D1D1D1"
                stroke-opacity="0.32"
                stroke-width="0.5"
              />
              <text
                x={(width / times.length) * i + 3}
                y="10"
                fill="#ffffff"
                fontSize="0.5rem"
              >
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
