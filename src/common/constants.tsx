const HOURS = [
  "12am",
  "1am",
  "2am",
  "3am",
  "4am",
  "5am",
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
  "8pm",
  "9pm",
  "10pm",
  "11pm",
];

const INTERESTING_HOURS = [
  8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
];

const DIGITAL_ANALOGUE_HOURS = {
  0: "12am",
  1: "1am",
  2: "2am",
  3: "3am",
  4: "4am",
  5: "5am",
  6: "6am",
  7: "7am",
  8: "8am",
  9: "9am",
  10: "10am",
  11: "11am",
  12: "12pm",
  13: "1pm",
  14: "2pm",
  15: "3pm",
  16: "4pm",
  17: "5pm",
  18: "6pm",
  19: "7pm",
  20: "8pm",
  21: "9pm",
  22: "10pm",
  23: "11pm",
};

const DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const DAYS_SHORT = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const MONTHS_SHORT = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// Graph constants
const NUM_PLOTS_PER_DAY = INTERESTING_HOURS.length * (60 / 5);
const GRAPH_HEIGHT = 155;
const Y_SCALING = 1.8;
const MAX_GRAPH_WIDTH = 400;

const SMALL_SCREEN_MAX_WIDTH = "768px";

const NUM_OF_DAYS_TO_SHOW_FROM_TODAY = 3; // cant be greater than 6

export {
  HOURS,
  INTERESTING_HOURS,
  DIGITAL_ANALOGUE_HOURS,
  DAYS,
  DAYS_SHORT,
  MONTHS,
  MONTHS_SHORT,
  NUM_PLOTS_PER_DAY,
  GRAPH_HEIGHT,
  Y_SCALING,
  MAX_GRAPH_WIDTH,
  SMALL_SCREEN_MAX_WIDTH,
  NUM_OF_DAYS_TO_SHOW_FROM_TODAY,
};
