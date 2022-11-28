import { useState, useEffect } from "react";
import { LibraryMeasurementInterface } from "../../LibraryData/libraryDataTypes";

const Line = (props: {
  color: string;
  data: LibraryMeasurementInterface[];
  readingSpacing: number;
  yScaling: number;
  graphHeight: number;
}) => {
  const { color, data, readingSpacing, yScaling, graphHeight } = props;
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    setOffset(20 * yScaling - 29);
  }, [yScaling]);

  const calcYPosition = (percentage: number) => {
    return graphHeight - percentage * yScaling + offset;
  };

  return (
    <path
      d={`M ${data
        ?.map(
          (item, i) => `${i * readingSpacing} ${calcYPosition(item.percentage)}`
        )
        .join(" ")}`}
      stroke={color}
      className="graph"
      stroke-width="3"
      stroke-linejoin="bevel"
    />
  );
};

export default Line;
