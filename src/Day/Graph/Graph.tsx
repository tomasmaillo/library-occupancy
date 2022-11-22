import { useState, useLayoutEffect, FC } from "react";
import {
  BackgroundColor,
  PredictionColor,
  TextColor,
} from "../../common/colors";
import { LibraryMeasurementInterface } from "../../LibraryData/libraryDataTypes";
import Line from "./Line";

import { INTERESTING_HOURS } from "../../common/constants";

const readingsPerDay = 158; // TODO: will have to be a calculated from the selected timeframe

const filterInterestingHours = (
  measurements: LibraryMeasurementInterface[]
) => {
  const filteredMeasurements = [] as LibraryMeasurementInterface[];
  measurements.forEach((measurement) => {
    const hour = parseInt(measurement.time.split(":")[0]);
    if (INTERESTING_HOURS.includes(hour)) {
      filteredMeasurements.push(measurement);
    }
  });
  return filteredMeasurements;
};

interface GraphProps {
  actual: LibraryMeasurementInterface[];
  predicted: LibraryMeasurementInterface[];
}
const Graph: FC<GraphProps> = (props) => {
  const [actual] = useState<LibraryMeasurementInterface[]>(
    filterInterestingHours(props.actual)
  );
  const [predicted] = useState<LibraryMeasurementInterface[]>(
    filterInterestingHours(props.predicted)
  );

  const [width, setWidth] = useState(400);

  useLayoutEffect(() => {
    function updateSize() {
      setWidth(Math.min(window.innerWidth / 2, 400));
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div
      style={{
        top: "0.5px",
        position: "relative",
        display: "flex",
        justifyContent: "flex-end",
        width: "100%",
      }}
    >
      <style>
        {`
          svg, svg * {
            pointer-events: none;
            pointer: default;
            cursor: default;
            user-select: none;
          }
        `}
      </style>
      <svg
        style={{
          transition: "background 0.5s",
          backgroundColor: BackgroundColor(),
          zIndex: 10,
          float: "right",
        }}
        width={width}
        height="100"
        viewBox={`0 0 ${width} 100`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <style>
          {`
            tspan{
              transition:0.3s;
              pointer-events:all;
              opacity:0;
            }
            tspan:hover{
              opacity:1;
            }
          `}
        </style>

        <Line
          color={PredictionColor()}
          data={predicted}
          readingSpacing={width / readingsPerDay}
          yScaling={1.5}
        />

        <Line
          color={TextColor()}
          data={actual}
          readingSpacing={width / readingsPerDay}
          yScaling={1.5}
        />

        {actual.map((item, index) => {
          if (index % 4 !== 0) return;
          const x = (index * width) / actual.length;
          const y = -item.percentage * 1.8 + 135;
          return (
            <text>
              <tspan
                x={x}
                y={y}
                style={{
                  fontSize: "1.5rem",
                  fill: "white",
                  textAnchor: "middle",
                  dominantBaseline: "middle",
                }}
              >
                {item.percentage}%
              </tspan>
            </text>
          );
        })}
      </svg>
    </div>
  );
};

export default Graph;
