import styled from "styled-components";
import { TextColor } from "./colors";

const Core = styled.circle`
  fill: ${() => TextColor};
`;

const Radar = styled.circle`
  fill: ${() => TextColor};
  animation: pulse2 5s ease-in-out infinite;

  @keyframes pulse2 {
    0% {
      transform: scale(1);
      opacity: 0;
    }

    70% {
      transform: scale(1);
      opacity: 0;
    }

    71% {
      opacity: 1;
    }

    100% {
      transform: scale(8);
      opacity: 0;
    }
  }
`;

const Pulse = () => {
  return (
    <svg
      width="50px"
      height="50px"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="translate(50,50)">
        <Radar cx="0" cy="0" r="3" />
        <Core cx="0" cy="0" r="8" />
      </g>
    </svg>
  );
};

export default Pulse;
