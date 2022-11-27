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
  const filteredMeasurements = measurements.filter((measurement) => {
    const hour = parseInt(measurement.time.split(":")[0]);
    return INTERESTING_HOURS.includes(hour);
  });
  return filteredMeasurements;
};

interface GraphProps {
  actual: LibraryMeasurementInterface[];
  predicted: LibraryMeasurementInterface[];
}
const Graph: FC<GraphProps> = (props) => {
  const { actual, predicted } = props;
  const filteredActual = filterInterestingHours(actual);
  const filteredPredicted = filterInterestingHours(predicted);

  const [width, setWidth] = useState(400);

  useLayoutEffect(() => {
    const updateSize = () => {
      if (window.innerWidth < 760) {
        setWidth(window.innerWidth);
      } else {
        setWidth(Math.min(window.innerWidth / 2, 400));
      }
    };
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "flex-end",
        width: "100%",
        height: 100,
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
          position: "absolute",
          bottom: 0,
        }}
        width={width}
        height="125"
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
          data={filteredPredicted}
          readingSpacing={width / readingsPerDay}
          yScaling={1.5}
        />

        <Line
          color={TextColor()}
          data={filteredActual}
          readingSpacing={width / readingsPerDay}
          yScaling={1.5}
        />

        {filteredActual.map((item, index) => {
          if (index % 4 !== 0) return;
          const x = (index * width) / filteredActual.length;
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
