import { INTERESTING_HOURS } from "../../common/constants";
import { LibraryMeasurementInterface } from "../../LibraryData/libraryDataTypes";

const filterInterestingHours = (
  measurements: LibraryMeasurementInterface[]
) => {
  const filteredMeasurements = measurements.filter((measurement) => {
    const hour = parseInt(measurement.time.split(":")[0]);
    return INTERESTING_HOURS.includes(hour);
  });
  return filteredMeasurements;
};

export default filterInterestingHours;
