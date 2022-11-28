import styled from "styled-components";
import Graph from "./Graph/Graph";
import { PredictionColor, TextColor } from "../common/colors";
import Main from "../common/Main";
import AnimatedTitle from "../common/AnimatedText";
import { FC } from "react";
import { LibraryMeasurementInterface } from "../LibraryData/libraryDataTypes";
import PageWideAxis from "./PageWideAxis";

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

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

interface DayProps {
  date: string;
  details: string[];
  data: {
    actual?: LibraryMeasurementInterface[];
    predicted?: LibraryMeasurementInterface[];
  };
}
const Day: FC<DayProps> = ({
  date,
  details,
  data: { actual = [], predicted = [] },
}) => {
  return (
    <div style={{ position: "relative", marginBottom: 50 }}>
      <Main>
        <Row>
          <div style={{ height: 100, zIndex: 100 }}>
            <Date>{date}</Date>
            {details.map((detail) => (
              <Detail>
                {"->"} {detail}
              </Detail>
            ))}
          </div>
          <Graph actual={actual} predicted={predicted} />
        </Row>
      </Main>
      <PageWideAxis
        leftStrokeColor={actual.length > 0 ? TextColor() : PredictionColor()}
        rightStrokeColor={actual.length > 100 ? TextColor() : PredictionColor()}
      />
    </div>
  );
};

export default Day;
