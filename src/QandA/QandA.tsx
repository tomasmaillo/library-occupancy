import styled from "styled-components";
import Main from "../common/Main";

const StyledQuestionAndAnswer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2.25rem;
`;

const StyledQuestion = styled.p`
  font-size: 1.2rem;
  margin: 0;
  margin-bottom: 0.7rem;
`;

const StyledAnswer = styled.p`
  color: white;
  margin: 0;

  & > a {
    color: white;
  }
`;

const QandA = () => {
  return (
    <Main
      style={{
        marginTop: "5rem",
      }}
    >
      <StyledQuestionAndAnswer>
        <StyledQuestion>Where does the data come from?</StyledQuestion>
        <StyledAnswer>
          I am funneling the data from the{" "}
          <a href="https://lac-edwebtools.is.ed.ac.uk/discovered/occupy/occupancy-app.html">
            Main Library's barriers
          </a>{" "}
          (public API) into a private server and logging the data on a database.
          The data updates every 5(ish) minutes.
          <br /> <br />
          On several occasions the barriers have stopped providing data, which
          then gets converted into "20%" occupancy by a middleware server by the
          University. This happens very rarely, but it does happen.
        </StyledAnswer>
      </StyledQuestionAndAnswer>

      <StyledQuestionAndAnswer>
        <StyledQuestion>
          Why does the occupancy not go below 20%?
        </StyledQuestion>
        <StyledAnswer>
          Due to the University's privacy concerns, whenever the actual
          occupancy is below 20%, the occupancy is set to 20%.
        </StyledAnswer>
      </StyledQuestionAndAnswer>

      <StyledQuestionAndAnswer>
        <StyledQuestion>Can I contribute to this?</StyledQuestion>
        <StyledAnswer>
          Yes! Reach out! I am currently aiming at solidifying the prediction
          model by gathering my own data. Check out the{" "}
          <a href="https://github.com/tomasmaillo/library-occupancy">
            library-occupancy GitHub Repo
          </a>
        </StyledAnswer>
      </StyledQuestionAndAnswer>
    </Main>
  );
};

export default QandA;
