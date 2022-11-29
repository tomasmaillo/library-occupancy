import { GRAPH_HEIGHT, Y_SCALING } from "../../common/constants";

const getY = (percentage: number) => {
  return GRAPH_HEIGHT - percentage * Y_SCALING + 20 * Y_SCALING - 29;
};

export default getY;
