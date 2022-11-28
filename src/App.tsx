import React from "react";
import styled from "styled-components";

import { BackgroundColor, Bin, TextColor } from "./common/colors";
import {
  LibraryDataContextProvider,
  useLibraryData,
} from "./LibraryData/LibraryDataContext";
import TimeAxis from "./TimeAxis";
import { Loading } from "./Loading";
import { Header } from "./Header";
import { Day } from "./Day";
import { fakeData } from "./common/fakeData";
import { AnimatePresence, motion } from "framer-motion";
import { isVisible } from "@testing-library/user-event/dist/utils";

const Background = styled.div`
  color: ${TextColor};
  background-color: ${BackgroundColor};
  transition: 0.5s;
  height: 100vh;
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

const Page = () => {
  const { currentData } = useLibraryData();
  if (!currentData?.lastMeasurement.percentage) return <Loading />;

  // TODO: Move this elsewhere
  document.body.style.backgroundColor = BackgroundColor();
  const favicon = document.getElementById("favicon") as HTMLLinkElement;
  if (favicon !== null) favicon.href = `${Bin()}.ico`;
  const theme = document.getElementById("theme-color") as HTMLMetaElement;
  if (theme !== null) theme.content = BackgroundColor();

  return (
    <Background>
      <Header />
      <TimeAxis />

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
            initial={{ opacity: 0, left: -90 }}
            animate={{ opacity: 1, left: 0 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
          >
            <Day
              date="yesterday,"
              details={["the past 24 hours"]}
              data={{
                actual: currentData.yesterday,
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
              date="today,"
              details={["using yesterday's data"]}
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
              details={["prediction with today"]}
              data={{
                predicted: currentData.today,
              }}
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </Background>
  );
};

const App = () => (
  <LibraryDataContextProvider>
    <Page />
  </LibraryDataContextProvider>
);

export default App;
