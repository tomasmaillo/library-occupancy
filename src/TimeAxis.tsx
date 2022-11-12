import { useLayoutEffect, useState } from "react";
import styled from "styled-components";
import { BackgroundColor } from "./colors";

const Main = styled.div`
  font-size: 5rem;
  padding: 8px;
  margin: auto;
  max-width: 760px;
`;

const height = 1000;
const times = ["9am", "11am", "1pm", "3pm", "5pm", "7pm", "9pm"];

const TimeAxis = () => {
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
    <Main
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "flex-end",
        zIndex: 100,
      }}
    >
      <svg
        style={{
          position: "absolute",
          float: "right",
          top: -20,
        }}
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {times.map((time, i) => {
          return (
            <>
              <line
                x1={(width / times.length) * i + 1} // +1 to avoid cutoff on left
                y1="0"
                x2={(width / times.length) * i}
                y2={height}
                stroke="#D1D1D1"
                stroke-opacity="0.32"
                stroke-width="0.5"
              />
              <text
                x={(width / times.length) * i + 3}
                y="10"
                fill="#ffffff"
                font-size="0.5rem"
              >
                {time}
              </text>
            </>
          );
        })}
        {/* 
        <line
          x1="48.25"
          y1="11"
          x2="48.25"
          y2={height}
          stroke="#D1D1D1"
          stroke-opacity="0.32"
          stroke-width="0.5"
        />
        <line
          x1="86.25"
          y1="11"
          x2="86.25"
          y2={height}
          stroke="#D1D1D1"
          stroke-opacity="0.32"
          stroke-width="0.5"
        />
        <path
          d="M2.768 0.352C1.32 0.352 0.288 1.16 0.288 2.296C0.288 3.392 1.264 4.176 2.616 4.176C2.72 4.176 2.856 4.168 2.992 4.144L1.536 6H2.84L4.752 3.504C5.136 3.016 5.272 2.72 5.272 2.288C5.272 1.144 4.248 0.352 2.768 0.352ZM2.768 3.352C1.984 3.352 1.44 2.92 1.44 2.296C1.44 1.672 1.984 1.24 2.768 1.24C3.576 1.24 4.12 1.672 4.12 2.296C4.12 2.92 3.56 3.352 2.768 3.352ZM8.10631 1.984C7.35431 1.984 6.67431 2.12 6.01031 2.456L6.41031 3.24C6.95431 2.904 7.48231 2.784 8.02631 2.784C8.85831 2.784 8.98631 3.136 8.98631 3.592V3.608H7.42631C6.41031 3.608 5.81831 4.008 5.81831 4.8C5.81831 5.616 6.47431 6.072 7.61831 6.072C8.24231 6.072 8.81031 5.864 9.13831 5.384L9.29031 6H10.2103V3.568C10.2103 2.504 9.50631 1.984 8.10631 1.984ZM7.81831 5.328C7.34631 5.328 7.04231 5.144 7.04231 4.816C7.04231 4.48 7.33031 4.352 7.76231 4.352H8.97831C8.93831 4.936 8.55431 5.328 7.81831 5.328ZM16.4418 1.984C15.8738 1.984 15.2658 2.136 14.8738 2.816C14.6018 2.184 14.0498 1.984 13.4418 1.984C12.9378 1.984 12.4018 2.136 12.0978 2.664V2.056H11.0258V6H12.1538V4.064C12.1538 3.592 12.2418 2.84 13.1618 2.84C13.6898 2.84 14.0098 3.176 14.0098 3.776V6H15.1298V4.064C15.1298 3.568 15.1858 2.84 16.1058 2.84C16.7058 2.84 16.9698 3.256 16.9698 3.824V6H18.1138V3.504C18.1138 2.768 17.6018 1.984 16.4418 1.984Z"
          fill="white"
        />
        <path
          d="M37.856 0.744C37.856 1.28 37.4 1.288 37.184 1.288H36.24V2.088H37.856V6H39V0.424H37.856V0.744ZM41.3888 5.048C43.2128 4.488 44.3728 3.312 44.3728 2.088C44.3728 1.048 43.5568 0.36 42.2128 0.36C40.9008 0.36 39.8768 1.248 39.8768 2.4L40.9888 2.472C41.0368 1.768 41.5088 1.336 42.1888 1.336C42.8608 1.336 43.2288 1.648 43.2288 2.232C43.2288 3.496 41.1168 4.528 39.8528 5.024V6H44.6688V5.048H41.3888ZM47.9996 1.984C47.4316 1.984 46.9196 2.192 46.5676 2.568V2.056H45.4476V7.632H46.5676V5.464C46.8396 5.832 47.3836 6.072 48.0476 6.072C49.3756 6.072 50.3036 5.272 50.3036 4.048C50.3036 2.784 49.3756 1.984 47.9996 1.984ZM47.8796 5.232C47.1116 5.232 46.5676 4.76 46.5676 4.04C46.5676 3.312 47.1116 2.84 47.8796 2.84C48.6396 2.84 49.1836 3.328 49.1836 4.04C49.1836 4.752 48.6396 5.232 47.8796 5.232ZM56.4183 1.984C55.8503 1.984 55.2423 2.136 54.8503 2.816C54.5783 2.184 54.0263 1.984 53.4183 1.984C52.9143 1.984 52.3783 2.136 52.0743 2.664V2.056H51.0023V6H52.1303V4.064C52.1303 3.592 52.2183 2.84 53.1383 2.84C53.6663 2.84 53.9863 3.176 53.9863 3.776V6H55.1063V4.064C55.1063 3.568 55.1623 2.84 56.0823 2.84C56.6823 2.84 56.9463 3.256 56.9463 3.824V6H58.0903V3.504C58.0903 2.768 57.5783 1.984 56.4183 1.984Z"
          fill="white"
        />
        <path
          d="M79.832 6.064C81.168 6.064 82.376 5.48 82.376 4.296C82.376 3.664 81.952 3.128 81.048 2.96C81.584 2.784 82.016 2.416 82.016 1.872C82.016 0.928 81.016 0.36 79.856 0.36C78.664 0.36 77.624 0.968 77.624 2.016L78.752 2.072C78.76 1.6 79.2 1.248 79.832 1.248C80.416 1.248 80.872 1.496 80.872 1.944C80.872 2.48 80.264 2.688 79.52 2.688V3.488C80.624 3.488 81.232 3.648 81.232 4.312C81.232 4.824 80.672 5.176 79.872 5.176C79.048 5.176 78.416 4.776 78.416 4.176L77.296 4.224C77.296 5.464 78.488 6.064 79.832 6.064ZM85.6949 1.984C85.1269 1.984 84.6149 2.192 84.2629 2.568V2.056H83.1429V7.632H84.2629V5.464C84.5349 5.832 85.0789 6.072 85.7429 6.072C87.0709 6.072 87.9989 5.272 87.9989 4.048C87.9989 2.784 87.0709 1.984 85.6949 1.984ZM85.5749 5.232C84.8069 5.232 84.2629 4.76 84.2629 4.04C84.2629 3.312 84.8069 2.84 85.5749 2.84C86.3349 2.84 86.8789 3.328 86.8789 4.04C86.8789 4.752 86.3349 5.232 85.5749 5.232ZM94.1136 1.984C93.5456 1.984 92.9376 2.136 92.5456 2.816C92.2736 2.184 91.7216 1.984 91.1136 1.984C90.6096 1.984 90.0736 2.136 89.7696 2.664V2.056H88.6976V6H89.8256V4.064C89.8256 3.592 89.9136 2.84 90.8336 2.84C91.3616 2.84 91.6816 3.176 91.6816 3.776V6H92.8016V4.064C92.8016 3.568 92.8576 2.84 93.7776 2.84C94.3776 2.84 94.6416 3.256 94.6416 3.824V6H95.7856V3.504C95.7856 2.768 95.2736 1.984 94.1136 1.984Z"
          fill="white"
        />
        <line
          x1="124.25"
          y1="11"
          x2="124.25"
          y2={height}
          stroke="#D1D1D1"
          stroke-opacity="0.32"
          stroke-width="0.5"
        />
        <path
          d="M117.944 2.248C117.84 2.248 117.704 2.256 117.568 2.28L119.024 0.424H117.72L115.808 2.92C115.424 3.408 115.288 3.704 115.288 4.136C115.288 5.28 116.312 6.072 117.792 6.072C119.24 6.072 120.272 5.264 120.272 4.128C120.272 3.032 119.296 2.248 117.944 2.248ZM117.792 5.184C116.984 5.184 116.44 4.752 116.44 4.128C116.44 3.504 117 3.072 117.792 3.072C118.576 3.072 119.12 3.504 119.12 4.128C119.12 4.752 118.576 5.184 117.792 5.184ZM123.554 1.984C122.986 1.984 122.474 2.192 122.122 2.568V2.056H121.002V7.632H122.122V5.464C122.394 5.832 122.938 6.072 123.602 6.072C124.93 6.072 125.858 5.272 125.858 4.048C125.858 2.784 124.93 1.984 123.554 1.984ZM123.434 5.232C122.666 5.232 122.122 4.76 122.122 4.04C122.122 3.312 122.666 2.84 123.434 2.84C124.194 2.84 124.738 3.328 124.738 4.04C124.738 4.752 124.194 5.232 123.434 5.232ZM131.973 1.984C131.405 1.984 130.797 2.136 130.405 2.816C130.133 2.184 129.581 1.984 128.973 1.984C128.469 1.984 127.933 2.136 127.629 2.664V2.056H126.557V6H127.685V4.064C127.685 3.592 127.773 2.84 128.693 2.84C129.221 2.84 129.541 3.176 129.541 3.776V6H130.661V4.064C130.661 3.568 130.717 2.84 131.637 2.84C132.237 2.84 132.501 3.256 132.501 3.824V6H133.645V3.504C133.645 2.768 133.133 1.984 131.973 1.984Z"
          fill="white"
        />
        <line
          x1={width}
          y1="11"
          x2={width}
          y2={height}
          stroke="#D1D1D1"
          stroke-opacity="0.32"
          stroke-width="0.5"
        />
        <text x="50" y="50">
          MHLEJL:EKJE:LKJ
        </text>
        <path
          d="M155.88 6.072C157.44 6.072 158.384 5.368 158.384 4.36C158.384 3.72 157.992 3.184 157.368 2.968C157.808 2.792 158.056 2.408 158.056 1.912C158.056 1 157.208 0.352 155.88 0.352C154.576 0.352 153.68 0.968 153.68 1.904C153.68 2.416 153.944 2.792 154.368 2.968C153.72 3.192 153.344 3.72 153.344 4.36C153.344 5.416 154.368 6.072 155.88 6.072ZM155.88 2.704C155.248 2.704 154.824 2.424 154.824 1.96C154.824 1.512 155.264 1.24 155.88 1.24C156.504 1.24 156.92 1.528 156.92 1.984C156.92 2.416 156.496 2.704 155.88 2.704ZM155.872 5.168C155.064 5.168 154.472 4.808 154.472 4.224C154.472 3.68 155.04 3.328 155.872 3.328C156.696 3.328 157.248 3.68 157.248 4.224C157.248 4.816 156.672 5.168 155.872 5.168ZM161.718 1.984C161.15 1.984 160.638 2.192 160.286 2.568V2.056H159.166V7.632H160.286V5.464C160.558 5.832 161.102 6.072 161.766 6.072C163.094 6.072 164.022 5.272 164.022 4.048C164.022 2.784 163.094 1.984 161.718 1.984ZM161.598 5.232C160.83 5.232 160.286 4.76 160.286 4.04C160.286 3.312 160.83 2.84 161.598 2.84C162.358 2.84 162.902 3.328 162.902 4.04C162.902 4.752 162.358 5.232 161.598 5.232ZM170.137 1.984C169.569 1.984 168.961 2.136 168.569 2.816C168.297 2.184 167.745 1.984 167.137 1.984C166.633 1.984 166.097 2.136 165.793 2.664V2.056H164.721V6H165.849V4.064C165.849 3.592 165.937 2.84 166.857 2.84C167.385 2.84 167.705 3.176 167.705 3.776V6H168.825V4.064C168.825 3.568 168.881 2.84 169.801 2.84C170.401 2.84 170.665 3.256 170.665 3.824V6H171.809V3.504C171.809 2.768 171.297 1.984 170.137 1.984Z"
          fill="white"
        /> */}
      </svg>
    </Main>
  );
};

export default TimeAxis;
