import styled from "styled-components";
import { BackgroundColor, TextColor } from "../common/colors";
import Signature from "./Signature";

const FooterGradient = styled.div`
  position: absolute;
  z-index: 200;
  height: 350px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    ${() => BackgroundColor()} 10%
  );
`;

const StyledByLine = styled.p`
  color: white;
  font-family: Inconsolata, monospace;
  text-decoration: none;
`;

const ByLine = () => {
  return (
    <StyledByLine>
      by{" "}
      <a
        href="https://tomasmaillo.com"
        target="_blank"
        style={{
          color: "white",
        }}
      >
        tomasmaillo.com
      </a>
    </StyledByLine>
  );
};

const Footer = () => {
  return (
    <FooterGradient>
      <Signature />
      <ByLine />
    </FooterGradient>
  );
};

export default Footer;
