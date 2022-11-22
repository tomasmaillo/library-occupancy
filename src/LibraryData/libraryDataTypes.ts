export interface LibraryMeasurementInterface{
  date: string;
  time: string;
  percentage: number;
}

export interface LibraryDataInterface{
  lastMeasurement: LibraryMeasurementInterface;
  lastDay: LibraryMeasurementInterface[];
}

export interface LibraryDataContextInterface {
  currentData?: LibraryDataInterface;
  setCurrentData: (data: any) => void;
}