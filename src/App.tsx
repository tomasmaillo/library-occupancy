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

const Background = styled.div`
  color: ${TextColor};
  background-color: ${BackgroundColor};
  transition: 0.5s;
  height: 100vh;
`;

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
      <Day
        date="today,"
        details={["helluuu", "what is up"]}
        data={{
          actual: currentData.lastDay,
          predicted: fakeData,
        }}
      />
      <Day
        date="tomorrow,"
        details={["helluuu"]}
        data={{
          predicted: fakeData,
        }}
      />
    </Background>
  );
};

const App = () => (
  <LibraryDataContextProvider>
    <Page />
  </LibraryDataContextProvider>
);

export default App;
