import { useState, useEffect } from "react";
import { colorVariations, TextColor } from "../../common/colors";

const PercentageAxis = ({
  graphWidth,
  graphHeight,
  yScaling,
}: {
  graphWidth: number;
  graphHeight: number;
  yScaling: number;
}) => {
  const [offset, setOffset] = useState(0);

  // TODO: Merge all calcYPosition functions into one (also in Line.tsx and Graph.tsx for labels)
  useEffect(() => {
    setOffset(20 * yScaling - 30);
  }, [yScaling]);

  const calcYPosition = (percentage: number) => {
    return graphHeight - percentage * yScaling + offset;
  };

  return (
    <g>
      {colorVariations.map((color, index) => {
        if (index % 2 != 0) return;
        return (
          <g>
            <line
              x1="0"
              y1={calcYPosition(color.max)}
              x2="1000"
              y2={calcYPosition(color.max)}
              stroke={color.text}
              strokeWidth="0.5"
              strokeDasharray="2 2"
            />
            <text
              x={graphWidth - 10}
              y={calcYPosition(color.max) - 4}
              style={{
                fontSize: "0.5rem",
                fill: color.text,
                textAnchor: "middle",
                dominantBaseline: "middle",
              }}
            >
              {color.max}%
            </text>
          </g>
        );
      })}
    </g>
  );
};

export default PercentageAxis;
