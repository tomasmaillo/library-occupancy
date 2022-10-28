import React, { createContext, useContext, useState } from "react";
import "./App.css";
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

const Main = styled.div`
  font-size: 5rem;
  margin: auto;
  max-width: 760px;
`;

const Background = styled.div`
  color: ${TextColor};
  background-color: ${BackgroundColor};
  height: 100vh;
`;

const Row = styled.div`
  margin: 0px;
  display: flex;
  flex-direction: row;
  align-items: baseline;
`;

function App() {
  const { data } = useLibraryData();
  return (
    <LibraryDataContextProvider>
      <Background>
        <Gap height="7vh" />
        <Main>
          <Header />
        </Main>
        <Carousel />
        <Main>
          <Row>
            <div className="css-1d590da">
              <div className="css-1p22ljb">
                {2300 * ((data.percentage as any) / 100)}
              </div>
            </div>
            <Graph />
          </Row>
        </Main>
      </Background>
    </LibraryDataContextProvider>
  );
}

export default App;
