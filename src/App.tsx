import React, { createContext, useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import { BackgroundColor, TextColor } from "./colors";
import Graph from "./24Graph";
import {
  LibraryDataContextProvider,
  useLibraryData,
} from "./LibraryData/LibraryDataContext";
import Carousel from "./Carousel";
import Gap from "./Gap";
import LoadingAnimation from "./LoadingAnimation";
import Bar from "./Bar";
import Day from "./Day";
import TimeAxis from "./TimeAxis";

const Main = styled.div`
  font-size: 5rem;
  padding: 8px;
  margin: auto;
  max-width: 760px;
`;

const Background = styled.div`
  color: ${TextColor};
  background-color: ${BackgroundColor};
  transition: 0.5s;
  height: 100vh;
`;

const Row = styled.div`
  margin: 0px;
  display: flex;
  flex-direction: row;
  align-items: baseline;
`;

const App = () => {
  const { data } = useLibraryData();

  if (!data) return <LoadingAnimation />;

  return (
    <Background>
      <Gap height="7vh" />
      <Main>
        <Header />
        <Bar />
      </Main>

      <TimeAxis />

      <Day />

      {/* <Carousel /> */}
      {/* <Main>
        <Row></Row>
        <Row>
          <div className="css-1d590da">
            <div className="css-1p22ljb">
              {2300 * ((data?.percentage as any) / 100)}
            </div>
          </div>
          <Graph />
        </Row>
      </Main> */}
    </Background>
  );
};

const Page = () => {
  return (
    <LibraryDataContextProvider>
      <App />
    </LibraryDataContextProvider>
  );
};

export default Page;
