import { createContext, useContext, useEffect, useState } from "react";
import {
  LibraryDataContextInterface,
  LibraryDataInterface,
  LibraryMeasurementInterface,
} from "./libraryDataTypes";

const defaultLibraryData: LibraryDataContextInterface = {
  setCurrentData: () => {},
};

// TODO: Replace this for more generic implementation
const getTodaysParsedDate = () => {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  const yyyy = today.getFullYear();

  return yyyy + mm + dd;
};
const getYesterdaysParsedDate = () => {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const dd = String(yesterday.getDate()).padStart(2, "0");
  const mm = String(yesterday.getMonth() + 1).padStart(2, "0");
  const yyyy = yesterday.getFullYear();

  return yyyy + mm + dd;
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

const getDay = async ({
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

export const LibraryDataContext =
  createContext<LibraryDataContextInterface>(defaultLibraryData);

export const LibraryDataContextProvider = ({ children }: any) => {
  const [currentData, setCurrentData] = useState<
    LibraryDataInterface | undefined
  >(defaultLibraryData.currentData);

  useEffect(() => {
    const updateData = async () => {
      const lastMeasurement = await getLastMeasurement({});
      const todayData = await getDay({
        parsedDate: getTodaysParsedDate(),
      });

      const yesterdayData = await getDay({
        parsedDate: getYesterdaysParsedDate(),
      });

      setCurrentData({
        lastMeasurement: lastMeasurement,
        today: todayData,
        yesterday: yesterdayData,
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
