import { useState, useEffect, useLayoutEffect } from "react";
import { BackgroundColor, TextColor } from "./colors";
import { LibraryDataInterface } from "./LibraryData/libraryDataTypes";

// fake data as historical data is not available *yet*
const fakeData = [
  {
    time: "9:20",
    percent: 20,
  },
  {
    time: "9:25",
    percent: 21,
  },
  {
    time: "9:30",
    percent: 23,
  },
  {
    time: "9:35",
    percent: 25,
  },
  {
    time: "9:40",
    percent: 26,
  },
  {
    time: "9:45",
    percent: 28,
  },
  {
    time: "9:50",
    percent: 29,
  },
  {
    time: "9:55",
    percent: 31,
  },
  {
    time: "10:00",
    percent: 35,
  },
  {
    time: "10:05",
    percent: 38,
  },
  {
    time: "10:10",
    percent: 40,
  },
  {
    time: "10:15",
    percent: 41,
  },
  {
    time: "10:20",
    percent: 43,
  },
  {
    time: "10:25",
    percent: 45,
  },
  {
    time: "10:30",
    percent: 47,
  },
  {
    time: "10:35",
    percent: 48,
  },
  {
    time: "10:40",
    percent: 50,
  },
  {
    time: "10:45",
    percent: 51,
  },
  {
    time: "10:50",
    percent: 51,
  },
  {
    time: "10:55",
    percent: 53,
  },
  {
    time: "11:01",
    percent: 57,
  },
  {
    time: "11:05",
    percent: 59,
  },
  {
    time: "11:10",
    percent: 61,
  },
  {
    time: "11:15",
    percent: 62,
  },
  {
    time: "11:20",
    percent: 64,
  },
  {
    time: "11:25",
    percent: 65,
  },
  {
    time: "11:30",
    percent: 66,
  },
  {
    time: "11:35",
    percent: 66,
  },
  {
    time: "11:40",
    percent: 66,
  },
  {
    time: "11:45",
    percent: 67,
  },
  {
    time: "11:50",
    percent: 67,
  },
  {
    time: "11:55",
    percent: 68,
  },
  {
    time: "12:00",
    percent: 66,
  },
  {
    time: "12:05",
    percent: 65,
  },
  {
    time: "12:10",
    percent: 66,
  },
  {
    time: "12:15",
    percent: 68,
  },
  {
    time: "12:20",
    percent: 67,
  },
  {
    time: "12:25",
    percent: 67,
  },
  {
    time: "12:30",
    percent: 67,
  },
  {
    time: "12:35",
    percent: 67,
  },
  {
    time: "12:40",
    percent: 66,
  },
  {
    time: "12:45",
    percent: 67,
  },
  {
    time: "12:50",
    percent: 67,
  },
  {
    time: "12:55",
    percent: 65,
  },
  {
    time: "13:00",
    percent: 63,
  },
  {
    time: "13:05",
    percent: 63,
  },
  {
    time: "13:10",
    percent: 63,
  },
  {
    time: "13:15",
    percent: 64,
  },
  {
    time: "13:20",
    percent: 64,
  },
  {
    time: "13:25",
    percent: 65,
  },
  {
    time: "13:30",
    percent: 66,
  },
  {
    time: "13:35",
    percent: 66,
  },
  {
    time: "13:40",
    percent: 66,
  },
  {
    time: "13:45",
    percent: 66,
  },
  {
    time: "13:50",
    percent: 66,
  },
  {
    time: "13:55",
    percent: 66,
  },
  {
    time: "14:00",
    percent: 66,
  },
  {
    time: "14:05",
    percent: 67,
  },
  {
    time: "14:10",
    percent: 69,
  },
  {
    time: "14:15",
    percent: 71,
  },
  {
    time: "14:20",
    percent: 71,
  },
  {
    time: "14:25",
    percent: 72,
  },
  {
    time: "14:30",
    percent: 73,
  },
  {
    time: "14:35",
    percent: 73,
  },
  {
    time: "14:40",
    percent: 73,
  },
  {
    time: "14:45",
    percent: 74,
  },
  {
    time: "14:50",
    percent: 72,
  },
  {
    time: "14:56",
    percent: 71,
  },
  {
    time: "15:00",
    percent: 70,
  },
  {
    time: "15:05",
    percent: 71,
  },
  {
    time: "15:10",
    percent: 72,
  },
  {
    time: "15:15",
    percent: 73,
  },
  {
    time: "15:20",
    percent: 75,
  },
  {
    time: "15:25",
    percent: 74,
  },
  {
    time: "15:30",
    percent: 74,
  },
  {
    time: "15:35",
    percent: 74,
  },
  {
    time: "15:40",
    percent: 74,
  },
  {
    time: "15:45",
    percent: 73,
  },
  {
    time: "15:50",
    percent: 73,
  },
  {
    time: "15:55",
    percent: 72,
  },
  {
    time: "16:00",
    percent: 69,
  },
  {
    time: "16:05",
    percent: 68,
  },
  {
    time: "16:10",
    percent: 68,
  },
  {
    time: "16:15",
    percent: 69,
  },
  {
    time: "16:20",
    percent: 69,
  },
  {
    time: "16:25",
    percent: 67,
  },
  {
    time: "16:30",
    percent: 66,
  },
  {
    time: "16:35",
    percent: 66,
  },
  {
    time: "16:40",
    percent: 66,
  },
  {
    time: "16:45",
    percent: 65,
  },
  {
    time: "16:50",
    percent: 66,
  },
  {
    time: "16:55",
    percent: 64,
  },
  {
    time: "17:00",
    percent: 61,
  },
  {
    time: "17:05",
    percent: 60,
  },
  {
    time: "17:10",
    percent: 59,
  },
  {
    time: "17:15",
    percent: 57,
  },
  {
    time: "17:20",
    percent: 56,
  },
  {
    time: "17:25",
    percent: 56,
  },
  {
    time: "17:30",
    percent: 56,
  },
  {
    time: "17:35",
    percent: 54,
  },
  {
    time: "17:40",
    percent: 53,
  },
  {
    time: "17:45",
    percent: 52,
  },
  {
    time: "17:50",
    percent: 50,
  },
  {
    time: "17:55",
    percent: 48,
  },
  {
    time: "18:00",
    percent: 46,
  },
  {
    time: "18:05",
    percent: 45,
  },
  {
    time: "18:10",
    percent: 45,
  },
  {
    time: "18:15",
    percent: 43,
  },
  {
    time: "18:20",
    percent: 42,
  },
  {
    time: "18:25",
    percent: 41,
  },
  {
    time: "18:30",
    percent: 40,
  },
  {
    time: "18:35",
    percent: 40,
  },
  {
    time: "18:40",
    percent: 39,
  },
  {
    time: "18:45",
    percent: 38,
  },
  {
    time: "18:50",
    percent: 36,
  },
  {
    time: "18:55",
    percent: 36,
  },
  {
    time: "19:00",
    percent: 35,
  },
  {
    time: "19:05",
    percent: 33,
  },
  {
    time: "19:10",
    percent: 33,
  },
  {
    time: "19:16",
    percent: 32,
  },
  {
    time: "19:20",
    percent: 32,
  },
  {
    time: "19:25",
    percent: 31,
  },
  {
    time: "19:30",
    percent: 31,
  },
  {
    time: "19:35",
    percent: 30,
  },
  {
    time: "19:40",
    percent: 30,
  },
  {
    time: "19:45",
    percent: 29,
  },
  {
    time: "19:50",
    percent: 29,
  },
  {
    time: "19:55",
    percent: 29,
  },
  {
    time: "20:00",
    percent: 29,
  },
  {
    time: "20:05",
    percent: 28,
  },
  {
    time: "20:10",
    percent: 27,
  },
  {
    time: "20:15",
    percent: 27,
  },
  {
    time: "20:20",
    percent: 28,
  },
  {
    time: "20:25",
    percent: 28,
  },
  {
    time: "20:30",
    percent: 27,
  },
  {
    time: "20:35",
    percent: 27,
  },
  {
    time: "20:40",
    percent: 27,
  },
  {
    time: "20:45",
    percent: 27,
  },
  {
    time: "20:50",
    percent: 27,
  },
  {
    time: "20:55",
    percent: 27,
  },
  {
    time: "21:00",
    percent: 26,
  },
  {
    time: "21:05",
    percent: 26,
  },
  {
    time: "21:10",
    percent: 26,
  },
  {
    time: "21:15",
    percent: 25,
  },
  {
    time: "21:20",
    percent: 25,
  },
  {
    time: "21:25",
    percent: 24,
  },
  {
    time: "21:30",
    percent: 24,
  },
  {
    time: "21:35",
    percent: 24,
  },
  {
    time: "21:40",
    percent: 23,
  },
  {
    time: "21:45",
    percent: 22,
  },
  {
    time: "21:50",
    percent: 22,
  },
  {
    time: "21:55",
    percent: 22,
  },
  {
    time: "22:01",
    percent: 21,
  },
  {
    time: "22:06",
    percent: 21,
  },
  {
    time: "22:10",
    percent: 20,
  },
  {
    time: "22:15",
    percent: 20,
  },
  {
    time: "22:20",
    percent: 20,
  },
  {
    time: "22:25",
    percent: 20,
  },
  {
    time: "22:30",
    percent: 20,
  },
];

const readingsPerDay = 158; // TODO: will have to be a calculated from the selected timeframe

const Graph = () => {
  // const [lastDay, setLastDady] = useState<[any] | undefined>();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch(
  //       "http://vps-3e1c6811.vps.ovh.net:3000/last-24hrs"
  //     );
  //     const responseData = await response.json();
  //     console.log(
  //       responseData?.map((item: { percent: any }) => item.percent).join(" ")
  //     );
  //     setLastDady(responseData);
  //   };
  //   fetchData();
  // }, []);

  const [width, setWidth] = useState(400);

  useLayoutEffect(() => {
    function updateSize() {
      setWidth(Math.min(window.innerWidth / 2, 400));
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "flex-end",
        width: "100%",
      }}
    >
      <svg
        style={{
          transition: "background 0.5s",
          backgroundColor: BackgroundColor(),
          zIndex: 10,
          float: "right",
        }}
        width={width}
        height="100"
        viewBox={`0 0 ${width} 100`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d={`M ${fakeData
            ?.map(
              (item, i) =>
                `${i * (width / readingsPerDay)} ${item.percent * -1.8 + 135}`
            )
            .join(" ")}`}
          stroke={TextColor()}
          stroke-width="2"
          stroke-linejoin="bevel"
        />
      </svg>
    </div>
  );
};

export default Graph;
