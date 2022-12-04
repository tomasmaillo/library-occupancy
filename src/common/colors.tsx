import React from "react";
import { useLibraryData } from "../LibraryData/LibraryDataContext";

type Color = {
  max: number;
  text: string;
  background: string;
  blur: string[];
};

const defaultColors = {
  text: "black",
  background: "white",
  blur: ["#999999", "#888888", "#777777", "#666666"],
};

export const colorVariations: Color[] = [
  {
    max: 20,
    text: "#ffffff", // white
    background: "#051268",
    blur: ["#d1d1d1", "#c1c1c1", "#b1b1b1", "#a1a1a1"],
  },
  {
    max: 30,
    text: "#00ff7f", // springgreen
    background: "#051268",
    blur: ["#30b5aa", "#9ab13d", "#68b32a", "#37b617"],
  },
  {
    max: 40,
    text: "#00ff7f", // springgreen
    background: "#051268",
    blur: ["#30b5aa", "#9ab13d", "#68b32a", "#37b617"],
  },
  {
    max: 50,
    text: "#00ff7f", // springgreen
    background: "#051268",
    blur: ["#30b5aa", "#9ab13d", "#68b32a", "#37b617"],
  },
  {
    max: 60,
    text: "#ffff00", // yellow
    background: "#132e1c",
    blur: ["#f8f093", "#f2e76a", "#ecdc41", "#e6d219"],
  },
  {
    max: 70,
    text: "#ffa500", // orange
    background: "#310e0d",
    blur: ["#f18c23", "#e7771c", "#dc6116", "#d14b0f"],
  },
  {
    max: 80,
    text: "#ff4500", // orangered
    background: "#250312",
    blur: ["#ed4e1f", "#e44119", "#da3413", "#d1270d"],
  },
  {
    max: 90,
    text: "#ff0000", // red
    background: "#010102",
    blur: ["#ea0c0c", "#df0606", "#d40101", "#ca0000"],
  },
  {
    max: 500,
    text: "#ff0000", // red
    background: "#010102",
    blur: ["#ea0c0c", "#df0606", "#d40101", "#ca0000"],
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

export const BlurColor = () => {
  const { currentData } = useLibraryData();
  if (!currentData?.lastMeasurement.percentage) return defaultColors.blur;

  const color = colorVariations.find(
    (color) => currentData?.lastMeasurement.percentage < color.max
  );
  return color?.blur || defaultColors.blur;
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
