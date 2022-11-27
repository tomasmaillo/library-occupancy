export interface LibraryMeasurementInterface {
  date: string;
  time: string;
  percentage: number;
}

export interface LibraryDataInterface {
  lastMeasurement: LibraryMeasurementInterface;
  today: LibraryMeasurementInterface[];
  yesterday: LibraryMeasurementInterface[];
}

export interface LibraryDataContextInterface {
  currentData?: LibraryDataInterface;
  setCurrentData: (data: any) => void;
}
