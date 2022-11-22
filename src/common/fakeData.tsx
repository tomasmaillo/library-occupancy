// useful for debugging and testing

import { LibraryMeasurementInterface } from "../LibraryData/libraryDataTypes";

// fake data as historical data is not available *yet*
export const fakeData = [
  {
    time: "9:20",
    percentage: 20,
  },
  {
    time: "9:25",
    percentage: 21,
  },
  {
    time: "9:30",
    percentage: 23,
  },
  {
    time: "9:35",
    percentage: 25,
  },
  {
    time: "9:40",
    percentage: 26,
  },
  {
    time: "9:45",
    percentage: 28,
  },
  {
    time: "9:50",
    percentage: 29,
  },
  {
    time: "9:55",
    percentage: 31,
  },
  {
    time: "10:00",
    percentage: 35,
  },
  {
    time: "10:05",
    percentage: 38,
  },
  {
    time: "10:10",
    percentage: 40,
  },
  {
    time: "10:15",
    percentage: 41,
  },
  {
    time: "10:20",
    percentage: 43,
  },
  {
    time: "10:25",
    percentage: 45,
  },
  {
    time: "10:30",
    percentage: 47,
  },
  {
    time: "10:35",
    percentage: 48,
  },
  {
    time: "10:40",
    percentage: 50,
  },
  {
    time: "10:45",
    percentage: 51,
  },
  {
    time: "10:50",
    percentage: 51,
  },
  {
    time: "10:55",
    percentage: 53,
  },
  {
    time: "11:01",
    percentage: 57,
  },
  {
    time: "11:05",
    percentage: 59,
  },
  {
    time: "11:10",
    percentage: 61,
  },
  {
    time: "11:15",
    percentage: 62,
  },
  {
    time: "11:20",
    percentage: 64,
  },
  {
    time: "11:25",
    percentage: 65,
  },
  {
    time: "11:30",
    percentage: 66,
  },
  {
    time: "11:35",
    percentage: 66,
  },
  {
    time: "11:40",
    percentage: 66,
  },
  {
    time: "11:45",
    percentage: 67,
  },
  {
    time: "11:50",
    percentage: 67,
  },
  {
    time: "11:55",
    percentage: 68,
  },
  {
    time: "12:00",
    percentage: 66,
  },
  {
    time: "12:05",
    percentage: 65,
  },
  {
    time: "12:10",
    percentage: 66,
  },
  {
    time: "12:15",
    percentage: 68,
  },
  {
    time: "12:20",
    percentage: 67,
  },
  {
    time: "12:25",
    percentage: 67,
  },
  {
    time: "12:30",
    percentage: 67,
  },
  {
    time: "12:35",
    percentage: 67,
  },
  {
    time: "12:40",
    percentage: 66,
  },
  {
    time: "12:45",
    percentage: 67,
  },
  {
    time: "12:50",
    percentage: 67,
  },
  {
    time: "12:55",
    percentage: 65,
  },
  {
    time: "13:00",
    percentage: 63,
  },
  {
    time: "13:05",
    percentage: 63,
  },
  {
    time: "13:10",
    percentage: 63,
  },
  {
    time: "13:15",
    percentage: 64,
  },
  {
    time: "13:20",
    percentage: 64,
  },
  {
    time: "13:25",
    percentage: 65,
  },
  {
    time: "13:30",
    percentage: 66,
  },
  {
    time: "13:35",
    percentage: 66,
  },
  {
    time: "13:40",
    percentage: 66,
  },
  {
    time: "13:45",
    percentage: 66,
  },
  {
    time: "13:50",
    percentage: 66,
  },
  {
    time: "13:55",
    percentage: 66,
  },
  {
    time: "14:00",
    percentage: 66,
  },
  {
    time: "14:05",
    percentage: 67,
  },
  {
    time: "14:10",
    percentage: 69,
  },
  {
    time: "14:15",
    percentage: 71,
  },
  {
    time: "14:20",
    percentage: 71,
  },
  {
    time: "14:25",
    percentage: 72,
  },
  {
    time: "14:30",
    percentage: 73,
  },
  {
    time: "14:35",
    percentage: 73,
  },
  {
    time: "14:40",
    percentage: 73,
  },
  {
    time: "14:45",
    percentage: 74,
  },
  {
    time: "14:50",
    percentage: 72,
  },
  {
    time: "14:56",
    percentage: 71,
  },
  {
    time: "15:00",
    percentage: 70,
  },
  {
    time: "15:05",
    percentage: 71,
  },
  {
    time: "15:10",
    percentage: 72,
  },
  {
    time: "15:15",
    percentage: 73,
  },
  {
    time: "15:20",
    percentage: 75,
  },
  {
    time: "15:25",
    percentage: 74,
  },
  {
    time: "15:30",
    percentage: 74,
  },
  {
    time: "15:35",
    percentage: 74,
  },
  {
    time: "15:40",
    percentage: 74,
  },
  {
    time: "15:45",
    percentage: 73,
  },
  {
    time: "15:50",
    percentage: 73,
  },
  {
    time: "15:55",
    percentage: 72,
  },
  {
    time: "16:00",
    percentage: 69,
  },
  {
    time: "16:05",
    percentage: 68,
  },
  {
    time: "16:10",
    percentage: 68,
  },
  {
    time: "16:15",
    percentage: 69,
  },
  {
    time: "16:20",
    percentage: 69,
  },
  {
    time: "16:25",
    percentage: 67,
  },
  {
    time: "16:30",
    percentage: 66,
  },
  {
    time: "16:35",
    percentage: 66,
  },
  {
    time: "16:40",
    percentage: 66,
  },
  {
    time: "16:45",
    percentage: 65,
  },
  {
    time: "16:50",
    percentage: 66,
  },
  {
    time: "16:55",
    percentage: 64,
  },
  {
    time: "17:00",
    percentage: 61,
  },
  {
    time: "17:05",
    percentage: 60,
  },
  {
    time: "17:10",
    percentage: 59,
  },
  {
    time: "17:15",
    percentage: 57,
  },
  {
    time: "17:20",
    percentage: 56,
  },
  {
    time: "17:25",
    percentage: 56,
  },
  {
    time: "17:30",
    percentage: 56,
  },
  {
    time: "17:35",
    percentage: 54,
  },
  {
    time: "17:40",
    percentage: 53,
  },
  {
    time: "17:45",
    percentage: 52,
  },
  {
    time: "17:50",
    percentage: 50,
  },
  {
    time: "17:55",
    percentage: 48,
  },
  {
    time: "18:00",
    percentage: 46,
  },
  {
    time: "18:05",
    percentage: 45,
  },
  {
    time: "18:10",
    percentage: 45,
  },
  {
    time: "18:15",
    percentage: 43,
  },
  {
    time: "18:20",
    percentage: 42,
  },
  {
    time: "18:25",
    percentage: 41,
  },
  {
    time: "18:30",
    percentage: 40,
  },
  {
    time: "18:35",
    percentage: 40,
  },
  {
    time: "18:40",
    percentage: 39,
  },
  {
    time: "18:45",
    percentage: 38,
  },
  {
    time: "18:50",
    percentage: 36,
  },
  {
    time: "18:55",
    percentage: 36,
  },
  {
    time: "19:00",
    percentage: 35,
  },
  {
    time: "19:05",
    percentage: 33,
  },
  {
    time: "19:10",
    percentage: 33,
  },
  {
    time: "19:16",
    percentage: 32,
  },
  {
    time: "19:20",
    percentage: 32,
  },
  {
    time: "19:25",
    percentage: 31,
  },
  {
    time: "19:30",
    percentage: 31,
  },
  {
    time: "19:35",
    percentage: 30,
  },
  {
    time: "19:40",
    percentage: 30,
  },
  {
    time: "19:45",
    percentage: 29,
  },
  {
    time: "19:50",
    percentage: 29,
  },
  {
    time: "19:55",
    percentage: 29,
  },
  {
    time: "20:00",
    percentage: 29,
  },
  {
    time: "20:05",
    percentage: 28,
  },
  {
    time: "20:10",
    percentage: 27,
  },
  {
    time: "20:15",
    percentage: 27,
  },
  {
    time: "20:20",
    percentage: 28,
  },
  {
    time: "20:25",
    percentage: 28,
  },
  {
    time: "20:30",
    percentage: 27,
  },
  {
    time: "20:35",
    percentage: 27,
  },
  {
    time: "20:40",
    percentage: 27,
  },
  {
    time: "20:45",
    percentage: 27,
  },
  {
    time: "20:50",
    percentage: 27,
  },
  {
    time: "20:55",
    percentage: 27,
  },
  {
    time: "21:00",
    percentage: 26,
  },
  {
    time: "21:05",
    percentage: 26,
  },
  {
    time: "21:10",
    percentage: 26,
  },
  {
    time: "21:15",
    percentage: 25,
  },
  {
    time: "21:20",
    percentage: 25,
  },
  {
    time: "21:25",
    percentage: 24,
  },
  {
    time: "21:30",
    percentage: 24,
  },
  {
    time: "21:35",
    percentage: 24,
  },
  {
    time: "21:40",
    percentage: 23,
  },
  {
    time: "21:45",
    percentage: 22,
  },
  {
    time: "21:50",
    percentage: 22,
  },
  {
    time: "21:55",
    percentage: 22,
  },
  {
    time: "22:01",
    percentage: 21,
  },
  {
    time: "22:06",
    percentage: 21,
  },
  {
    time: "22:10",
    percentage: 20,
  },
  {
    time: "22:15",
    percentage: 20,
  },
  {
    time: "22:20",
    percentage: 20,
  },
  {
    time: "22:25",
    percentage: 20,
  },
  {
    time: "22:30",
    percentage: 20,
  },
] as LibraryMeasurementInterface[];

export const todayData = [
  {
    time: "09:20",
    percentage: 20,
  },
  {
    time: "09:25",
    percentage: 20,
  },
  {
    time: "09:30",
    percentage: 21,
  },
  {
    time: "09:35",
    percentage: 23,
  },
  {
    time: "09:40",
    percentage: 24,
  },
  {
    time: "09:45",
    percentage: 25,
  },
  {
    time: "09:50",
    percentage: 28,
  },
  {
    time: "09:55",
    percentage: 30,
  },
  {
    time: "10:00",
    percentage: 35,
  },
  {
    time: "10:05",
    percentage: 37,
  },
  {
    time: "10:10",
    percentage: 39,
  },
  {
    time: "10:15",
    percentage: 41,
  },
  {
    time: "10:20",
    percentage: 43,
  },
  {
    time: "10:25",
    percentage: 45,
  },
  {
    time: "10:30",
    percentage: 46,
  },
  {
    time: "10:35",
    percentage: 47,
  },
  {
    time: "10:40",
    percentage: 49,
  },
  {
    time: "10:45",
    percentage: 51,
  },
  {
    time: "10:50",
    percentage: 52,
  },
  {
    time: "10:55",
    percentage: 53,
  },
  {
    time: "11:00",
    percentage: 57,
  },
  {
    time: "11:05",
    percentage: 60,
  },
  {
    time: "11:10",
    percentage: 63,
  },
  {
    time: "11:15",
    percentage: 64,
  },
  {
    time: "11:20",
    percentage: 66,
  },
  {
    time: "11:25",
    percentage: 68,
  },
  {
    time: "11:30",
    percentage: 68,
  },
  {
    time: "11:35",
    percentage: 68,
  },
  {
    time: "11:40",
    percentage: 69,
  },
  {
    time: "11:45",
    percentage: 71,
  },
  {
    time: "11:50",
    percentage: 72,
  },
  {
    time: "11:55",
    percentage: 71,
  },
  {
    time: "12:01",
    percentage: 70,
  },
  {
    time: "12:05",
    percentage: 69,
  },
  {
    time: "12:10",
    percentage: 70,
  },
  {
    time: "12:15",
    percentage: 71,
  },
  {
    time: "12:20",
    percentage: 72,
  },
  {
    time: "12:25",
    percentage: 72,
  },
  {
    time: "12:30",
    percentage: 71,
  },
  {
    time: "12:35",
    percentage: 71,
  },
  {
    time: "12:40",
    percentage: 71,
  },
  {
    time: "12:45",
    percentage: 72,
  },
  {
    time: "12:50",
    percentage: 71,
  },
  {
    time: "12:55",
    percentage: 68,
  },
  {
    time: "13:01",
    percentage: 65,
  },
  {
    time: "13:05",
    percentage: 64,
  },
  {
    time: "13:10",
    percentage: 64,
  },
  {
    time: "13:15",
    percentage: 66,
  },
  {
    time: "13:20",
    percentage: 66,
  },
  {
    time: "13:25",
    percentage: 66,
  },
  {
    time: "13:30",
    percentage: 67,
  },
  {
    time: "13:35",
    percentage: 67,
  },
  {
    time: "13:40",
    percentage: 68,
  },
  {
    time: "13:45",
    percentage: 68,
  },
  {
    time: "13:50",
    percentage: 68,
  },
  {
    time: "13:55",
    percentage: 69,
  },
  {
    time: "14:00",
    percentage: 70,
  },
  {
    time: "14:05",
    percentage: 69,
  },
  {
    time: "14:10",
    percentage: 73,
  },
  {
    time: "14:15",
    percentage: 74,
  },
  {
    time: "14:20",
    percentage: 75,
  },
  {
    time: "14:25",
    percentage: 75,
  },
  {
    time: "14:30",
    percentage: 77,
  },
  {
    time: "14:35",
    percentage: 77,
  },
  {
    time: "14:40",
    percentage: 78,
  },
  {
    time: "14:45",
    percentage: 77,
  },
  {
    time: "14:50",
    percentage: 77,
  },
  {
    time: "14:55",
    percentage: 77,
  },
  {
    time: "15:00",
    percentage: 75,
  },
  {
    time: "15:05",
    percentage: 74,
  },
  {
    time: "15:10",
    percentage: 77,
  },
  {
    time: "15:15",
    percentage: 78,
  },
  {
    time: "15:20",
    percentage: 78,
  },
  {
    time: "15:25",
    percentage: 78,
  },
  {
    time: "15:30",
    percentage: 77,
  },
  {
    time: "15:35",
    percentage: 77,
  },
  {
    time: "15:40",
    percentage: 78,
  },
  {
    time: "15:45",
    percentage: 78,
  },
  {
    time: "15:50",
    percentage: 77,
  },
  {
    time: "15:55",
    percentage: 76,
  },
  {
    time: "16:01",
    percentage: 75,
  },
  {
    time: "16:05",
    percentage: 75,
  },
  {
    time: "16:10",
    percentage: 76,
  },
  {
    time: "16:15",
    percentage: 76,
  },
  {
    time: "16:20",
    percentage: 77,
  },
  {
    time: "16:25",
    percentage: 77,
  },
  {
    time: "16:30",
    percentage: 76,
  },
  {
    time: "16:35",
    percentage: 76,
  },
  {
    time: "16:40",
    percentage: 77,
  },
  {
    time: "16:45",
    percentage: 76,
  },
  {
    time: "16:50",
    percentage: 75,
  },
  {
    time: "16:55",
    percentage: 74,
  },
  {
    time: "17:00",
    percentage: 75,
  },
  {
    time: "17:05",
    percentage: 73,
  },
  {
    time: "17:10",
    percentage: 75,
  },
  {
    time: "17:15",
    percentage: 75,
  },
  {
    time: "17:20",
    percentage: 74,
  },
  {
    time: "17:25",
    percentage: 73,
  },
  {
    time: "17:30",
    percentage: 72,
  },
  {
    time: "17:35",
    percentage: 72,
  },
  {
    time: "17:40",
    percentage: 71,
  },
  {
    time: "17:45",
    percentage: 70,
  },
  {
    time: "17:50",
    percentage: 68,
  },
  {
    time: "17:56",
    percentage: 66,
  },
  {
    time: "18:01",
    percentage: 63,
  },
  {
    time: "18:05",
    percentage: 63,
  },
  {
    time: "18:10",
    percentage: 68,
  },
  {
    time: "18:16",
    percentage: 70,
  },
  {
    time: "18:20",
    percentage: 71,
  },
  {
    time: "18:25",
    percentage: 72,
  },
  {
    time: "18:31",
    percentage: 74,
  },
  {
    time: "18:36",
    percentage: 74,
  },
  {
    time: "18:40",
    percentage: 75,
  },
  {
    time: "18:46",
    percentage: 76,
  },
  {
    time: "18:50",
    percentage: 76,
  },
  {
    time: "18:55",
    percentage: 77,
  },
  {
    time: "19:01",
    percentage: 78,
  },
  {
    time: "19:06",
    percentage: 78,
  },
  {
    time: "19:10",
    percentage: 79,
  },
  {
    time: "19:16",
    percentage: 79,
  },
  {
    time: "19:21",
    percentage: 79,
  },
  {
    time: "19:26",
    percentage: 80,
  },
  {
    time: "19:31",
    percentage: 80,
  },
  {
    time: "19:35",
    percentage: 81,
  },
  {
    time: "19:40",
    percentage: 82,
  },
  {
    time: "19:46",
    percentage: 82,
  },
  {
    time: "19:51",
    percentage: 83,
  },
  {
    time: "19:56",
    percentage: 83,
  },
  {
    time: "20:01",
    percentage: 84,
  },
  {
    time: "20:06",
    percentage: 83,
  },
  {
    time: "20:10",
    percentage: 83,
  },
  {
    time: "20:15",
    percentage: 84,
  },
  {
    time: "20:20",
    percentage: 83,
  },
  {
    time: "20:25",
    percentage: 84,
  },
  {
    time: "20:31",
    percentage: 84,
  },
  {
    time: "20:36",
    percentage: 84,
  },
  {
    time: "20:41",
    percentage: 84,
  },
  {
    time: "20:45",
    percentage: 84,
  },
  {
    time: "20:50",
    percentage: 83,
  },
  {
    time: "20:55",
    percentage: 83,
  },
] as LibraryMeasurementInterface[];
