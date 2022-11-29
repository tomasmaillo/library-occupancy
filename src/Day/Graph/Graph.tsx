import { useState, useLayoutEffect, FC } from "react";
import {
  BackgroundColor,
  PredictionColor,
  TextColor,
} from "../../common/colors";
import { LibraryMeasurementInterface } from "../../LibraryData/libraryDataTypes";
import Line from "./Line";
import {
  MAX_GRAPH_WIDTH,
  GRAPH_HEIGHT,
  NUM_PLOTS_PER_DAY,
} from "../../common/constants";
import PercentageAxis from "./PercentageAxis";
import MeasurementPointer from "./MeasurementPointer";
import filterInterestingHours from "./filterInterestingHours";
import styled from "styled-components";

const GraphWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 100px; // different from graphHeight so that overlap with text over high values is possible
`;

// Still wont work on safari though :(
const setupPointerEventsStyle = `
  svg, svg * {
    pointer-events: none;
    pointer: default;
    cursor: default;
    user-select: none;
  }
`;

const SVGWrapper = styled.svg`
  transition: background-color 0.5s;
  background-color: ${() => BackgroundColor()};
  z-index: 10;
  float: right;
  position: absolute;
  bottom: 0;
`;

interface GraphProps {
  actual: LibraryMeasurementInterface[];
  predicted: LibraryMeasurementInterface[];
}
const Graph: FC<GraphProps> = ({ actual, predicted }) => {
  const filteredActual = filterInterestingHours(actual);
  const filteredPredicted = filterInterestingHours(predicted);

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
    <GraphWrapper>
      <style>{setupPointerEventsStyle}</style>
      <SVGWrapper
        width={width}
        height={GRAPH_HEIGHT}
        viewBox={`0 0 ${width} 100`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <PercentageAxis graphWidth={width} />

        <Line
          color={PredictionColor()}
          data={filteredPredicted}
          readingSpacing={width / NUM_PLOTS_PER_DAY}
        />

        <Line
          color={TextColor()}
          data={filteredActual}
          readingSpacing={width / NUM_PLOTS_PER_DAY}
        />

        <MeasurementPointer
          measurements={filteredActual}
          readingSpacing={width / NUM_PLOTS_PER_DAY}
        />
      </SVGWrapper>
    </GraphWrapper>
  );
};

export default Graph;
