import React from "react";
import { useLibraryData } from "../LibraryData/LibraryDataContext";

type Color = {
  max: number;
  text: string;
  background: string;
};

const defaultColors = {
  text: "black",
  background: "white",
};

export const colorVariations: Color[] = [
  {
    max: 20,
    text: "white",
    background: "#1522b8",
  },
  {
    max: 30,
    text: "springgreen",
    background: "#1522b8",
  },
  {
    max: 40,
    text: "springgreen",
    background: "#1522b8",
  },
  {
    max: 50,
    text: "springgreen",
    background: "#1522b8",
  },
  {
    max: 60,
    text: "yellow",
    background: "#2c3e2f",
  },
  {
    max: 70,
    text: "orange",
    background: "#601817",
  },
  {
    max: 80,
    text: "orangered",
    background: "#250312",
  },
  {
    max: 90,
    text: "red",
    background: "#090607",
  },
  {
    max: 500,
    text: "red",
    background: "#090607",
  },
];

export const BackgroundColor = () => {
  const { currentData } = useLibraryData();
  if (!currentData?.lastMeasurement.percentage) return defaultColors.background;

  const color = colorVariations.find(
    (color) => currentData?.lastMeasurement.percentage < color.max
  );
  return color?.background || defaultColors.background;
};

export const TextColor = () => {
  const { currentData } = useLibraryData();
  if (!currentData?.lastMeasurement.percentage) return defaultColors.text;

  const color = colorVariations.find(
    (color) => currentData?.lastMeasurement.percentage < color.max
  );
  return color?.text || defaultColors.text;
};

export const PredictionColor = () => "#9f9f9f";

// Returns the max percentage of the bin that is currently selected
export const Bin = () => {
  const { currentData } = useLibraryData();
  if (!currentData?.lastMeasurement.percentage) return 0;

  const color = colorVariations.find(
    (color) => currentData?.lastMeasurement.percentage < color.max
  );
  return color?.max || 0;
};
