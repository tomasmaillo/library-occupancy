import { BlurColor } from "../common/colors";

const Background = () => {
  return (
    <div
      style={{
        position: "absolute",
        zIndex: 500,
        pointerEvents: "none",
        filter: "blur(125px)",
        opacity: 0.4,
      }}
    >
      <svg
        style={{ position: "fixed" }}
        width="1323"
        height="982"
        viewBox="0 0 1323 982"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <style>
          {`
            @keyframes move1 {
              from {
                transform: translateX(calc(2px + ${
                  20 * Math.random()
                }px)) translateY(calc(2px + ${2 * Math.random()}px));
              }
              to {
                transform: translateX(calc(-2px - ${
                  20 * Math.random()
                }px)) translateY(calc(-2px - ${2 * Math.random()}px));
              }
            }
        
            @keyframes move2 {
              from {
                transform: translateX(calc(-2px - ${
                  2 * Math.random()
                }px)) translateY(calc(-2px - ${2 * Math.random()}px));
              }
              to {
                transform: translateX(calc(2px + ${
                  20 * Math.random()
                }px)) translateY(calc(2px + ${2 * Math.random()}px));
              }
            }
        
            @keyframes move3 {
              from {
                transform: translateX(calc(-2px - ${
                  2 * Math.random()
                }px)) translateY(calc(2px + ${2 * Math.random()}px));
              }
              to {
                transform: translateX(calc(2px + ${
                  2 * Math.random()
                }px)) translateY(calc(-2px - ${2 * Math.random()}px));
              }



              .blur:nth-of-type(1) {
                animation: move1 2s linear infinite alternate;
              }
        
              .blur:nth-of-type(2) {
                animation: move2 3s linear infinite alternate;
              }
        
              .blur:nth-of-type(3) {
                animation: move3 4s linear infinite alternate;
              }

          `}
        </style>

        <ellipse
          className="blur"
          cx="384"
          cy="882.5"
          rx="204"
          ry="190.5"
          fill={BlurColor()[2]}
          fill-opacity="0.6"
        />
        <ellipse
          className="blur"
          cx="1047.5"
          cy="168"
          rx="82.5"
          ry="121"
          fill={BlurColor()[3]}
          fill-opacity="0.69"
        />
        <circle cx="933.973" cy="86.9726" r="138.973" fill={BlurColor()[0]} />
      </svg>
    </div>
  );
};

export default Background;
