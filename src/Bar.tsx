import { useState, useLayoutEffect } from "react";
import { TextColor } from "./colors";
import { useLibraryData } from "./LibraryData/LibraryDataContext";

const maxWidth = 400;

const Bar = () => {
  const { data } = useLibraryData();
  const [width, setWidth] = useState(maxWidth);

  const getTotalNumberOfLines = () => Math.floor(width / 10);
  const getLineSpacing = () => Math.floor(width / getTotalNumberOfLines());

  // TODO: Implement gradient for bar

  useLayoutEffect(() => {
    function updateSize() {
      setWidth(Math.min(window.innerWidth / 2, maxWidth));
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  if (!data) return null;

  return (
    <div style={{ position: "relative", height: "25px" }}>
      <svg
        style={{ position: "absolute", top: "-40px" }}
        fill="none"
        viewBox={`0 0 ${width} 15`}
        xmlns="http://www.w3.org/2000/svg"
      >
        {[...Array(getTotalNumberOfLines())].map((e, i) => (
          <line
            x1={i * getLineSpacing()}
            y1="12"
            x2={i * getLineSpacing() + 10}
            y2="0"
            stroke={
              data.percentage * (getTotalNumberOfLines() / 100) < i
                ? "white"
                : TextColor()
            }
          />
        ))}
      </svg>
    </div>
  );
};

export default Bar;
