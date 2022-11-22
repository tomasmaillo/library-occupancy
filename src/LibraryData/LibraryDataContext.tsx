import { createContext, useContext, useEffect, useState } from "react";
import {
  LibraryDataContextInterface,
  LibraryDataInterface,
  LibraryMeasurementInterface,
} from "./libraryDataTypes";

const defaultLibraryData: LibraryDataContextInterface = {
  setCurrentData: () => {},
};

// using official API
const getLastMeasurement = async ({
  URL = "https://lac-edwebtools.is.ed.ac.uk/discovered/occupy/MainLibrary.json",
}: {
  URL?: string;
}) => {
  let date = "";
  let occupancy = 100;
  let time = "dd/mm";

  const response = await fetch(URL);
  const responseData = await response.json();
  date = responseData.date;
  time = responseData.time;
  responseData.states.forEach((bin: any) => {
    if (bin.selected) occupancy = bin.percent;
  });

  return {
    date: date,
    time: time,
    percentage: occupancy,
  } as LibraryMeasurementInterface;
};

const getLastDayMeasurements = async ({
  URL = "http://vps-3e1c6811.vps.ovh.net:3000/last-24hrs",
}: {
  URL?: string;
}) => {
  let measurements = [] as LibraryMeasurementInterface[];

  const response = await fetch(URL);
  const responseData = await response.json();

  responseData.forEach((measurement: any) => {
    measurements.push({
      date: measurement.date,
      time: measurement.time,
      percentage: measurement.percent,
    });
  });

  return measurements;
};

export const LibraryDataContext =
  createContext<LibraryDataContextInterface>(defaultLibraryData);

export const LibraryDataContextProvider = ({ children }: any) => {
  const [currentData, setCurrentData] = useState<
    LibraryDataInterface | undefined
  >(defaultLibraryData.currentData);

  useEffect(() => {
    // const fetchAndStoreData = async () => {
    //   setData({
    //     time: "10/20",
    //     percentage: Math.floor(Math.random() * 100),
    //   });
    // };

    const updateData = async () => {
      const lastMeasurement = await getLastMeasurement({});
      const lastDayMeasurements = await getLastDayMeasurements({});

      setCurrentData({
        lastMeasurement: lastMeasurement,
        lastDay: lastDayMeasurements,
      });
    };

    updateData();
    const interval = setInterval(updateData, 5 * 60 * 1000); // run every 5mins
    return () => clearInterval(interval);
  }, []);

  const value = { currentData, setCurrentData } as LibraryDataContextInterface;
  return <LibraryDataContext.Provider value={value} children={children} />;
};

export const useLibraryData = () => {
  const value = useContext(LibraryDataContext);
  return value as LibraryDataContextInterface;
};
