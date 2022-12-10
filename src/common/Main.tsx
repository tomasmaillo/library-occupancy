import styled from "styled-components";

import { SMALL_SCREEN_MAX_WIDTH } from "./constants";

const Main = styled.div`
  font-size: 5rem;
  padding: 8px;
  margin: auto;
  max-width: ${SMALL_SCREEN_MAX_WIDTH};
`;

export default Main;
