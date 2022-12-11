import styled from "styled-components";
import DownArrow from "../common/DownArrow";

const DetailWrapper = styled.div`
  font-size: 1.3rem;
  font-family: "Avenir Next";
  font-style: italic;
  line-height: 1.5rem;
  margin: 0;
  color: white;
  white-space: nowrap;
  transform: translateX(7px);
  display: grid;
  grid-template-columns: 23px auto;
  align-items: center;
`;

const Detail = ({ detail }: { detail: string }) => {
  return (
    <DetailWrapper>
      <DownArrow />
      {detail}
    </DetailWrapper>
  );
};

const DateWrapper = styled.div`
  font-size: 2rem;
  margin: 0;
  color: white;
`;

const Wrapper = styled.div`
  height: 100;
  z-index: 100;
`;

const Details = ({ date, details }: { date: string; details: string[] }) => {
  return (
    <Wrapper>
      <DateWrapper>{date}</DateWrapper>
      {details.map((detail) => (
        <Detail detail={detail} />
      ))}
    </Wrapper>
  );
};

export default Details;
