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

const Background = styled.div`
  color: ${TextColor};
  background-color: ${BackgroundColor};
  transition: 0.5s;
  height: 100vh;
`;

const Page = () => {
  const { data } = useLibraryData();
  if (!data) return <Loading />;

  // TODO: Move this elsewhere
  document.body.style.backgroundColor = BackgroundColor();
  const favicon = document.getElementById("favicon") as HTMLLinkElement;
  if (favicon !== null) favicon.href = `${Bin()}.ico`;

  return (
    <Background>
      <Header />
      <TimeAxis />
      <Day />
    </Background>
  );
};

const App = () => (
  <LibraryDataContextProvider>
    <Page />
  </LibraryDataContextProvider>
);

export default App;
