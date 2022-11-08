export interface LibraryDataInterface{
  time: string;
  percentage: number;
} 

export interface LibraryDataContextInterface {
  data?: LibraryDataInterface;
  setData: (data: any) => void;
}