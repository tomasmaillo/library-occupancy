import { createContext, useContext, useEffect, useState } from "react";
import {
  LibraryDataContextInterface,
  LibraryDataInterface,
} from "./libraryDataTypes";

const defaultLibraryData: LibraryDataContextInterface = {
  data: {
    time: "dd/mm",
    percentage: 100,
  },
  setData: () => {},
};

export const LibraryDataContext =
  createContext<LibraryDataContextInterface>(defaultLibraryData);

export const LibraryDataContextProvider = ({ children }: any) => {
  const [data, setData] = useState<LibraryDataInterface>(
    defaultLibraryData.data
  );

  const URl =
    "https://lac-edwebtools.is.ed.ac.uk/discovered/occupy/MainLibrary.json";

  useEffect(() => {
    const fetchAndStoreData = async () => {
      let occupancy = 100;
      let lastFetched = "dd/mm";

      const response = await fetch(URl);
      const responseData = await response.json();
      lastFetched = responseData.time;
      responseData.states.forEach((bin: any) => {
        if (bin.selected) occupancy = bin.percent;
      });

      setData({ time: lastFetched, percentage: occupancy });
    };

    fetchAndStoreData();
    const interval = setInterval(fetchAndStoreData, 5 * 60 * 1000); // run every 5mins

    return () => clearInterval(interval);
  }, []);

  return (
    <LibraryDataContext.Provider
      value={{ data, setData }}
      children={children}
    />
  );
};

export const useLibraryData = () => {
  const { data, setData } = useContext(LibraryDataContext);

  return { data, setData } as LibraryDataContextInterface;
};
