import styled from "styled-components";
import { TextColor } from "../../common/colors";
import { LibraryMeasurementInterface } from "../../LibraryData/libraryDataTypes";
import getY from "./getY";

const Reading = styled.g`
  transition: 0.3s;
  pointer-events: bounding-box;
  opacity: 0;
  border-radius: 50%;
  &:hover {
    opacity: 1;
  }
`;

const ReadingText = styled.tspan`
  font-size: 0.7rem;
  fill: white;
  text-anchor: middle;
`;

const MeasurementPointer = ({
  measurements,
  readingSpacing,
}: {
  measurements: LibraryMeasurementInterface[];
  readingSpacing: number;
}) => {
  return (
    <>
      {measurements.map((item, index) => {
        if (index % 6 !== 0) return;

        const x = index * readingSpacing + 1; // +1 to align with time axis
        const y = getY(item.percentage) - 20; // -20 to offset text slightly over the line

        return (
          <Reading>
            <line
              x1={x}
              y1={y + 10}
              x2={x}
              y2={y + 1000}
              strokeWidth={1}
              stroke={TextColor()}
            />

            <text>
              <ReadingText x={x} y={y - 5}>
                {item.percentage}%
              </ReadingText>
              <ReadingText x={x} y={y + 5}>
                {item.time}
              </ReadingText>
            </text>
          </Reading>
        );
      })}
    </>
  );
};

export default MeasurementPointer;
