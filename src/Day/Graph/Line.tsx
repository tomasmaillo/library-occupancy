import { useState, useEffect } from "react";
import { LibraryMeasurementInterface } from "../../LibraryData/libraryDataTypes";
import getY from "./getY";

const Line = (props: {
  color: string;
  data: LibraryMeasurementInterface[];
  readingSpacing: number;
}) => {
  const { color, data, readingSpacing } = props;

  return (
    <path
      d={`M ${data
        ?.map((item, i) => `${i * readingSpacing} ${getY(item.percentage)}`)
        .join(" ")}`}
      stroke={color}
      className="graph"
      strokeWidth="3"
      stroke-linejoin="bevel"
    />
  );
};

export default Line;
