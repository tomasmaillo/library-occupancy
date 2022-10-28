import styled from "styled-components";
import AnimatedText from "./AnimatedText";
import { TextColor } from "./colors";
import { useLibraryData } from "./LibraryData/LibraryDataContext";

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  font-family: system-ui, sans-serif;
  font-style: normal;
`;

const Percentage = styled.div`
  font-size: 7rem;
`;

const LastFetched = styled.div`
  font-size: 3rem;
  margin-left: 2rem;
`;

const LocationWrapper = styled.div`
  font-size: 1rem;
  margin: 0;
  transform: translateY(0.6rem);
  font-style: bold;
`;

const Header = () => {
  const {
    data: { percentage, time },
  } = useLibraryData();
  return (
    <>
      <LocationWrapper>Main Library</LocationWrapper>
      <HeaderWrapper>
        <Percentage>
          <AnimatedText text={`${percentage}%`} />
        </Percentage>
        <LastFetched>
          <AnimatedText text={`${time}`} />
        </LastFetched>
      </HeaderWrapper>
    </>
  );
};

export default Header;
