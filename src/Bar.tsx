import { TextColor } from "./colors";
import { useLibraryData } from "./LibraryData/LibraryDataContext";

const Bar = () => {
  const { data } = useLibraryData();
  if (!data) return null;

  return (
    <div style={{ position: "relative", height: "25px" }}>
      <svg
        style={{ position: "absolute", top: "-22px" }}
        fill="none"
        viewBox="0 0 500 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        {[...Array(50)].map((e, i) => (
          <line
            x1={i * 10}
            y1="17"
            x2={i * 10 + 10}
            y2="0"
            stroke={data.percentage / 2 < i ? "white" : TextColor()}
          />
        ))}
      </svg>
    </div>
  );
};

export default Bar;
