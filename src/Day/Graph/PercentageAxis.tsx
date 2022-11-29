import styled from "styled-components";
import { colorVariations } from "../../common/colors";
import getY from "./getY";

// used twice for a double hover effect :cool:
const StyledPercentageAxis = styled.g`
  pointer-events: bounding-box;
  transition: 0.25s;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
`;

const PercentageAxis = ({ graphWidth }: { graphWidth: number }) => {
  return (
    <StyledPercentageAxis>
      {colorVariations.map((color, index) => {
        if (index % 2 != 0) return;
        const y = getY(color.max);
        return (
          <StyledPercentageAxis>
            <line
              x1="0"
              y1={y}
              x2="1000"
              y2={y}
              stroke={color.text}
              strokeWidth="0.5"
              strokeDasharray="2 2"
            />
            <text
              x={graphWidth - 10}
              y={y - 4}
              fontSize="0.5rem"
              fill={color.text}
              textAnchor="middle"
            >
              {color.max}%
            </text>
          </StyledPercentageAxis>
        );
      })}
    </StyledPercentageAxis>
  );
};

export default PercentageAxis;
