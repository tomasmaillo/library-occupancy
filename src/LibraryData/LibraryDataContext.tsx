import { createContext, useContext, useEffect, useState } from "react";
import { dateGenerator } from "../dateGenerator";
import { getLastMeasurement, getDays } from "./dataFetching";
import {
  LibraryDataContextInterface,
  LibraryDataInterface,
} from "./libraryDataTypes";

const defaultLibraryData: LibraryDataContextInterface = {
  setCurrentData: () => {},
};

export const LibraryDataContext =
  createContext<LibraryDataContextInterface>(defaultLibraryData);

export const LibraryDataContextProvider = ({ children }: any) => {
  const [currentData, setCurrentData] = useState<
    LibraryDataInterface | undefined
  >(defaultLibraryData.currentData);

  useEffect(() => {
    const dayIDs = dateGenerator();

    const updateData = async () => {
      const lastMeasurement = await getLastMeasurement({});
      const lastDays = await getDays({ IDs: dayIDs });

      setCurrentData({
        lastMeasurement: lastMeasurement,
        lastDays: lastDays,
      });
    };

    // const fakeUpdateData = async () => {
    //   setCurrentData({
    //     lastMeasurement: {
    //       date: "2021-03-01",
    //       time: "12:00",
    //       percentage: Math.random() * 100,
    //     },
    //     today: [],
    //     yesterday: [],
    //   });
    // };
    // const interval = setInterval(fakeUpdateData, 0.01 * 60 * 1000); // run every 5mins

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
