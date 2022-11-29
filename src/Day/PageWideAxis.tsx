const PageWideAxis = (props: {
  leftStrokeColor: string;
  rightStrokeColor: string;
}) => {
  const { leftStrokeColor, rightStrokeColor } = props;
  return (
    <svg
      style={{
        position: "absolute",
        transform: "translateY(-12px)",
      }}
      width="100000"
      height="5"
      viewBox="0 0 100000 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d={`M 0 2.5 100000 2.5 Z`}
        stroke={leftStrokeColor}
        strokeWidth="3"
        stroke-linejoin="bevel"
      />

      <path
        d={`M 0 2.5 100000 2.5 Z`}
        stroke={rightStrokeColor}
        strokeWidth="3"
        stroke-linejoin="bevel"
      />
    </svg>
  );
};

export default PageWideAxis;
