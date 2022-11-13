import styled from "styled-components";
import AnimatedText from "../common/AnimatedText";
import { TextColor } from "../common/colors";
import { useLibraryData } from "../LibraryData/LibraryDataContext";
import Bar from "./Bar";
import Pulse from "./Pulse";
import Gap from "../common/Gap";
import Main from "../common/Main";

const LineWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  font-style: normal;
`;

const Percentage = styled.div`
  font-size: 7rem;
  line-height: 7.5rem;
`;

const LocationWrapper = styled.div`
  font-size: 1rem;
  margin: 0;
  transform: translateY(0.6rem);
  font-style: bold;
`;

const Live = styled.div`
  z-index: 100;
  color: white;
  cursor: help;
  font-size: 1rem;
  margin: 0;
  margin-left: 1rem;
  font-style: bold;
`;

const HeaderWrapper = styled.div`
  cursor: default;
  user-select: none;
`;

const Header = () => {
  const { data } = useLibraryData();

  return (
    <Main>
      <HeaderWrapper>
        <Gap height="7vh" />
        <LocationWrapper>Main Library</LocationWrapper>
        <LineWrapper>
          <Percentage>
            <AnimatedText text={`${data?.percentage}%`} />
          </Percentage>

          <Live title={`Last updated at ${data?.time}`}>
            live
            <div style={{ transform: "translate(-34px, -36px)" }}>
              <Pulse />
            </div>
          </Live>
        </LineWrapper>
        <Bar />
      </HeaderWrapper>
    </Main>
  );
};

export default Header;
