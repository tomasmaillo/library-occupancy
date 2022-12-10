import styled from "styled-components";
import Graph from "./Graph/Graph";
import { PredictionColor, TextColor } from "../common/colors";
import Main from "../common/Main";
import AnimatedTitle from "../common/AnimatedText";
import { FC } from "react";
import { LibraryMeasurementInterface } from "../LibraryData/libraryDataTypes";
import PageWideAxis from "./PageWideAxis";
import { SMALL_SCREEN_MAX_WIDTH } from "../common/constants";

const Date = styled.div`
  font-size: 2rem;
  margin: 0;
  color: white;
`;

const Detail = styled.div`
  font-size: 1.3rem;
  font-family: "Avenir Next";
  font-style: italic;
  line-height: 1.5rem;
  margin: 0;
  color: white;
  white-space: nowrap;
  transform: translateX(7px);
`;

const Row = styled.div`
  /* TODO: change from flex to grid */
  /* display: grid;
  grid-template-columns: 50% 50%;
  grid-gap: 10px; */
  margin: 0px;
  display: flex;
  flex-direction: row;

  @media (max-width: ${SMALL_SCREEN_MAX_WIDTH}) {
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
                <svg
                  style={{
                    transform: "scale(1.3) translateY(-1px)",
                    marginRight: 10,
                  }}
                  width="15"
                  height="13"
                  viewBox="0 0 15 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 0C1 7.25926 1.62082 8.46914 14 7.8642"
                    stroke="white"
                  />
                  <path d="M10 4L14 8L10 12" stroke="white" />
                </svg>
                {detail}
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
