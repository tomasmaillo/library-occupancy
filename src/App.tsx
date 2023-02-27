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
import { QandA } from "./QandA";

const PageWrapper = styled.main`
  position: absolute;
  width: 100%;
  margin: auto;
  color: ${TextColor};
  transition: 0.5s;
`;

const Page = () => {
  const { currentData } = useLibraryData();
  if (!currentData?.lastMeasurement.percentage) return <Loading />;

  return (
    <PageWrapper>
      <Header />
      <TimeAxis />
      <Days />
      <QandA />
      <Footer />
    </PageWrapper>
  );
};

const App = () => (
  <LibraryDataContextProvider>
    <ThemeUpdater />
    <Page />
  </LibraryDataContextProvider>
);

export default App;
