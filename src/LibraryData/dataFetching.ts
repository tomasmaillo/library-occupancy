// TODO: Replace this for more generic implementation

import { LibraryMeasurementInterface } from "./libraryDataTypes";

export const getLastMeasurement = async ({
  URL = "https://lac-edwebtools.is.ed.ac.uk/discovered/occupy/MainLibrary.json",
}: {
  URL?: string;
}) => {
  const response = await fetch(URL);
  const responseData = await response.json();

  const date = responseData.date;
  const time = responseData.time;
  let occupancy = 0;
  responseData.states.forEach((bin: any) => {
    if (bin.selected) occupancy = bin.percent;
  });

  return {
    date: date || "",
    time: time || "",
    percentage: occupancy || 100,
  } as LibraryMeasurementInterface;
};

export const getDays = async ({
  IDs,
  URL = `https://server.tomasmaillo.com/days`,
}: {
  IDs: string[];
  URL?: string;
}) => {
  const response = await fetch(`${URL}/?ids=${IDs.join(",")}`);
  const parsedResponse = await response.json();

  const days = parsedResponse.days;

  const parsedDays = {} as any; // TODO: fix this horrible line lol
  IDs.forEach((ID) => {
    parsedDays[ID] = days[ID].data.map((measurement: any) => {
      return {
        date: measurement.date,
        time: measurement.time,
        percentage: measurement.percent, // TODO: Merge "percent" and "percentage"
      };
    }) as LibraryMeasurementInterface[];
  });

  return parsedDays;
};

export const getDay = async ({
  parsedDate,
  URL = `https://server.tomasmaillo.com/day`,
}: {
  parsedDate: string;
  URL?: string;
}) => {
  const response = await fetch(`${URL}/${parsedDate}`);
  const parsedResponse = await response.json();

  const measurements = parsedResponse.data.map((measurement: any) => {
    return {
      date: measurement.date,
      time: measurement.time,
      percentage: measurement.percent, // TODO: Merge "percent" and "percentage"
    };
  }) as LibraryMeasurementInterface[];
  return measurements;
};
