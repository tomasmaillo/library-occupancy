import styled from "styled-components";
import { TextColor } from "./colors";

const CarouselWrapper = styled.div`
  display: flex;
  border: 1px solid ${() => TextColor};
  border-width: 1px 0px 1px 0px;
  height: 5vh;
`;

const CarouselContent = styled.div`
  animation: scrolling 20s infinite linear;
  font-size: 2rem;
  margin: 0;
  transform: translateX(100%);
  text-transform: uppercase;

  white-space: nowrap;

  @keyframes scrolling {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(-100%);
    }
  }
`;

const Carousel = () => {
  return (
    <CarouselWrapper>
      <CarouselContent>
        Lets face it, no matter at what time you go it will be stupidly packed
        :D
      </CarouselContent>
    </CarouselWrapper>
  );
};

export default Carousel;
