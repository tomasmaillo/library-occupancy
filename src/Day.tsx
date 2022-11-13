import styled from "styled-components";
import Graph from "./24Graph";
import { TextColor } from "./colors";

const Main = styled.div`
  font-size: 5rem;
  padding: 8px;
  margin: auto;
  max-width: 760px;
`;

const Date = styled.div`
  font-size: 2rem;
  margin: 0;
  color: white;
`;

const Detail = styled.div`
  font-size: 1.5rem;
  margin: 0;
  color: white;
  white-space: nowrap;
`;

const Row = styled.div`
  /* TODO: change from flex to grid */
  /* display: grid;
  grid-template-columns: 50% 50%;
  grid-gap: 10px; */
  margin: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Day = () => {
  return (
    <div style={{ position: "relative", marginBottom: 25 }}>
      <svg
        style={{
          position: "absolute",
          transform: "translateY(8px)",
        }}
        width="100000"
        height="100"
        viewBox="0 0 100000 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d={`M 0 100 100000 100 Z`}
          stroke={TextColor()}
          stroke-width="3"
          stroke-linejoin="bevel"
        />
      </svg>
      <Main>
        <Row>
          <div style={{ height: 100, zIndex: 100 }}>
            <Date>today,</Date>
            <Detail>{"->"} Last 24hrs</Detail>
          </div>
          <Graph />
        </Row>
      </Main>
    </div>
  );
};

export default Day;
