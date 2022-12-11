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
import { dateGenerator } from "./dateGenerator";
import Days from "./Days";

const BackgroundSolidColor = styled.main`
  color: ${TextColor};
  background-color: ${BackgroundColor};
  transition: 0.5s;
  height: 100rem;
`;

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
