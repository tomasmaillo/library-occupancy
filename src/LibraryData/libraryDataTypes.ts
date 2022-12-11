export interface LibraryMeasurementInterface {
  date: string;
  time: string;
  percentage: number;
}

export interface LibraryDataInterface {
  lastMeasurement: LibraryMeasurementInterface;
  lastDays: Record<string, LibraryMeasurementInterface[]>;
}

export interface LibraryDataContextInterface {
  currentData?: LibraryDataInterface;
  setCurrentData: (data: any) => void;
}
