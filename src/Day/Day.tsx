import { FC } from "react";
import styled from "styled-components";

import { PredictionColor, TextColor } from "../common/colors";
import Main from "../common/Main";
import { LibraryMeasurementInterface } from "../LibraryData/libraryDataTypes";
import PageWideAxis from "./PageWideAxis";
import { SMALL_SCREEN_MAX_WIDTH } from "../common/constants";
import Details from "./Details";
import { Graph } from "./Graph";

const Row = styled.div`
  margin: 0px;
  display: flex;
  flex-direction: row;

  @media (max-width: ${SMALL_SCREEN_MAX_WIDTH}) {
    flex-direction: column;
  }
`;

const DayWrapper = styled.div`
  position: relative;
  margin-bottom: 50px;
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
    <DayWrapper>
      <Main>
        <Row>
          <Details date={date} details={details} />
          <Graph actual={actual} predicted={predicted} />
        </Row>
      </Main>
      <PageWideAxis
        leftStrokeColor={actual.length > 0 ? TextColor() : PredictionColor()}
        rightStrokeColor={actual.length > 100 ? TextColor() : PredictionColor()}
      />
    </DayWrapper>
  );
};

export default Day;
