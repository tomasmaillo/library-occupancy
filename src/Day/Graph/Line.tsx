import { LibraryMeasurementInterface } from "../../LibraryData/libraryDataTypes";

const Line = (props: {
  color: string;
  data: LibraryMeasurementInterface[];
  readingSpacing: number;
  yScaling: number;
}) => {
  const { color, data, readingSpacing, yScaling } = props;

  return (
    <path
      d={`M ${data
        ?.map(
          (item, i) =>
            `${i * readingSpacing} ${item.percentage * -1.3 * yScaling + 150}`
        )
        .join(" ")}`}
      stroke={color}
      className="graph"
      stroke-width="2"
      stroke-linejoin="bevel"
    />
  );
};

export default Line;
