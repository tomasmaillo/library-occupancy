import React from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

import { BackgroundColor, Bin, TextColor } from "./common/colors";
import {
  LibraryDataContextProvider,
  useLibraryData,
} from "./LibraryData/LibraryDataContext";
import TimeAxis from "./TimeAxis";
import { Header } from "./Header";
import { Day } from "./Day";
import { Footer } from "./Footer";
import ThemeUpdater from "./ThemeUpdater";
import { Loading } from "./Loading";

const BackgroundSolidColor = styled.main`
  color: ${TextColor};
  background-color: ${BackgroundColor};
  transition: 0.5s;
  height: 100rem;
`;

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

const Days = () => {
  const { currentData } = useLibraryData();
  if (!currentData?.lastMeasurement.percentage) return null; // will always be true but TS doesn't know that

  return (
    <AnimatePresence>
      {/* TODO: replace by .map */}
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
            details={[`compared to this day last week`, "super packed"]}
            data={{
              actual: currentData.today,
              predicted: currentData.yesterday,
            }}
          />
        </motion.div>
        <motion.div
          style={{
            opacity: 1,
            position: "relative",
            top: -15,
          }}
          variants={item}
        >
          <Day
            date="tomorrow,"
            details={["prediction with last week"]}
            data={{
              predicted: currentData.yesterday,
            }}
          />
        </motion.div>
        <motion.div
          style={{
            opacity: 1,
            position: "relative",
            top: -15,
          }}
          variants={item}
        >
          <Day
            date="sunday,"
            details={["prediction with last week"]}
            data={{
              actual: [],
              predicted: currentData.yesterday,
            }}
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const Page = () => {
  const { currentData } = useLibraryData();
  if (!currentData?.lastMeasurement.percentage) return <Loading />;

  return (
    <BackgroundSolidColor>
      <Header />
      <TimeAxis />
      <Days />
      <Footer />
    </BackgroundSolidColor>
  );
};

const App = () => (
  <LibraryDataContextProvider>
    <ThemeUpdater />
    <Page />
  </LibraryDataContextProvider>
);

export default App;
