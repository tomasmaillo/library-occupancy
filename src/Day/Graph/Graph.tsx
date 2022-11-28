import { useState, useLayoutEffect, FC } from "react";
import {
  BackgroundColor,
  PredictionColor,
  TextColor,
} from "../../common/colors";
import { LibraryMeasurementInterface } from "../../LibraryData/libraryDataTypes";
import Line from "./Line";

import { INTERESTING_HOURS, NUM_PLOTS_PER_DAY } from "../../common/constants";
import PercentageAxis from "./PercentageAxis";

const filterInterestingHours = (
  measurements: LibraryMeasurementInterface[]
) => {
  const filteredMeasurements = measurements.filter((measurement) => {
    const hour = parseInt(measurement.time.split(":")[0]);
    return INTERESTING_HOURS.includes(hour);
  });
  return filteredMeasurements;
};

const GRAPH_HEIGHT = 155;

interface GraphProps {
  actual: LibraryMeasurementInterface[];
  predicted: LibraryMeasurementInterface[];
}
const Graph: FC<GraphProps> = (props) => {
  const { actual, predicted } = props;
  const filteredActual = filterInterestingHours(actual);
  const filteredPredicted = filterInterestingHours(predicted);

  const [width, setWidth] = useState(400);
  const Y_SCALING = 1.8;

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
        height: 100, // different from graphHeight so that overlap with text over high values is possible
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
        height={GRAPH_HEIGHT}
        viewBox={`0 0 ${width} 100`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <style>
          {`
            g {
              pointer-events: bounding-box;
              transition: 0.25s;
              opacity: 0.8;
            }
            g:hover {
              opacity: 1;
            }
            .reading{
              transition:0.3s;
              pointer-events: bounding-box;
              opacity:0;
              border-radius: 50%;
            }
            .reading:hover{
              opacity:1;
            }
          `}
        </style>

        <PercentageAxis
          graphWidth={width}
          graphHeight={GRAPH_HEIGHT}
          yScaling={Y_SCALING}
        />

        <Line
          color={PredictionColor()}
          data={filteredPredicted}
          readingSpacing={width / NUM_PLOTS_PER_DAY}
          yScaling={Y_SCALING}
          graphHeight={GRAPH_HEIGHT}
        />

        <Line
          color={TextColor()}
          data={filteredActual}
          readingSpacing={width / NUM_PLOTS_PER_DAY}
          yScaling={Y_SCALING}
          graphHeight={GRAPH_HEIGHT}
        />

        {/* TODO: Move this plz :D */}
        {filteredActual.map((item, index) => {
          if (index % 6 !== 0) return;
          const x = index * (width / NUM_PLOTS_PER_DAY);
          const y =
            GRAPH_HEIGHT - item.percentage * Y_SCALING + 30 * Y_SCALING - 65;

          return (
            <g className="reading">
              <line
                x1={x}
                y1={y + 10}
                x2={x}
                y2={y + 1000}
                stroke={TextColor()}
                strokeWidth={0.5}
              />

              <text>
                <tspan
                  x={x}
                  y={y - 5}
                  style={{
                    fontSize: "0.7rem",
                    fill: "white",
                    textAnchor: "middle",
                    dominantBaseline: "middle",
                    background: "red",
                  }}
                >
                  {item.percentage}%
                </tspan>

                <tspan
                  x={x}
                  y={y + 5}
                  style={{
                    fontSize: "0.7rem",
                    fill: "white",
                    textAnchor: "middle",
                    dominantBaseline: "middle",
                    background: "red",
                  }}
                >
                  {item.time}
                </tspan>
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default Graph;
