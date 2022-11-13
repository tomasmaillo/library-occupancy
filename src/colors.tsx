import React, { useState, useEffect } from "react";
import { useLibraryData } from "./LibraryData/LibraryDataContext";

type Color = {
  max: number;
  text: string;
  background: string;
};

const defaultColors = {
  text: "black",
  background: "white",
};

const colorVariations: Color[] = [
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
    max: 100,
    text: "red",
    background: "#090607",
  },
];

export const BackgroundColor = () => {
  const { data } = useLibraryData();
  if (!data?.percentage) return defaultColors.background;

  const color = colorVariations.find((color) => data.percentage < color.max);
  return color?.background || defaultColors.background;
};

export const TextColor = () => {
  const { data } = useLibraryData();
  if (!data?.percentage) return defaultColors.text;

  const color = colorVariations.find((color) => data?.percentage < color.max);
  return color?.text || defaultColors.text;
};

// Returns the max percentage of the bin that is currently selected
export const Bin = () => {
  const { data } = useLibraryData();
  if (!data?.percentage) return 0;

  const color = colorVariations.find((color) => data?.percentage < color.max);
  return color?.max || 0;
};
