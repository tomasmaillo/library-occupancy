/*
  This generates the dates of all of the days that have to fetched.
  For example: todays date and the date of last week on the same day.
  
  These are used to then know which days to fetch from the server.

  They are placed in a specific order. 
  - 1st: Greatest number first (today)
  - 2nd to nth: Increasing order (excluding today). 
    So we get last week starting from today on the same date
*/

import { NUM_OF_DAYS_TO_SHOW_FROM_TODAY } from "./common/constants";

// TODO: Does this update as soon as day changes? No lol
const dateObjectToParsedDate = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const formattedDate = `${year}${month.toString().padStart(2, "0")}${day
    .toString()
    .padStart(2, "0")}`;

  return formattedDate;
};

export const dateGenerator = () => {
  let days = [];

  const date = new Date();
  days.push(dateObjectToParsedDate(date));

  date.setDate(date.getDate() - 7);

  for (var i = 0; i < NUM_OF_DAYS_TO_SHOW_FROM_TODAY; i++) {
    days.push(dateObjectToParsedDate(date));
    date.setDate(date.getDate() + 1);
  }

  return days;
};
