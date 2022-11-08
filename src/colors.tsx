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
    background: "#3a0b5d",
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
