import styled from "styled-components";

const Gap = styled.div<{ height: string }>`
  height: ${(props) => props.height};
`;

export default Gap;
