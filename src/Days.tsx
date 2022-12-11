import { AnimatePresence, motion } from "framer-motion";
import { dateGenerator } from "./dateGenerator";
import Day from "./Day/Day";
import { useLibraryData } from "./LibraryData/LibraryDataContext";

import { DAYS_SHORT, DAYS } from "./common/constants";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, left: -90 },
  show: { opacity: 1, left: 0 },
};

const dayIDs = dateGenerator();

// TODO: Change structure to be entirely on .map even for today.
const Days = () => {
  const { currentData } = useLibraryData();
  if (!currentData?.lastMeasurement.percentage) return null; // will always be true but TS doesn't know that

  return (
    <AnimatePresence>
      <motion.div variants={container} initial="hidden" animate="show">
        <motion.div
          style={{
            opacity: 1,
            position: "relative",
            top: -15,
          }}
          variants={item}
        >
          <Day
            date="today,"
            details={[`compared to this day last week`]}
            data={{
              actual: currentData.lastDays[dayIDs[0]],
              predicted: currentData.lastDays[dayIDs[1]],
            }}
          />
        </motion.div>

        {dayIDs.map((dayID, i) => {
          if (i < 2) return null; // to not show today or todays prediction
          return (
            <motion.div
              style={{
                opacity: 1,
                position: "relative",
                top: -15,
              }}
              variants={item}
            >
              <Day
                date={i != 2 ? getDayOfWeek(dayID) : "tomorrow,"}
                details={[`prediction with ${getDayOfWeekAndDate(dayID)}`]}
                data={{
                  predicted: currentData.lastDays[dayID],
                }}
              />
            </motion.div>
          );
        })}
      </motion.div>
    </AnimatePresence>
  );
};

// TODO: I fucking hate these functions
// this outputs a date in the format MM/DD/YYYY. I hate this format.
export const parsedDateToDateString = (date: string) => {
  return (
    date.substring(4, 6) +
    "/" +
    date.substring(6, 8) +
    "/" +
    date.substring(0, 4)
  );
};

const getDayOfWeekAndDate = (dateString: string): string => {
  const date = new Date(parsedDateToDateString(dateString));

  const dayOfWeek = date.getDay();
  const dayOfMonth = date.getDate();
  const dayOfWeekName = DAYS_SHORT[dayOfWeek];

  return `${dayOfWeekName.toLowerCase()} ${dayOfMonth}th`;
};

const getDayOfWeek = (dateString: string): string => {
  const date = new Date(parsedDateToDateString(dateString));

  const dayOfWeek = date.getDay();
  const dayOfWeekName = DAYS[dayOfWeek];

  return dayOfWeekName.toLowerCase();
};

export default Days;
