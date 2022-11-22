const PageWideAxis = (props: {
  leftStrokeColor: string;
  rightStrokeColor: string;
}) => {
  const { leftStrokeColor, rightStrokeColor } = props;
  return (
    <svg
      style={{
        position: "absolute",
        transform: "translateY(8px)",
      }}
      width="100000"
      height="100"
      viewBox="0 0 100000 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d={`M 0 100 100000 100 Z`}
        stroke={leftStrokeColor}
        stroke-width="3"
        stroke-linejoin="bevel"
      />

      <path
        d={`M 0 100 100000 100 Z`}
        stroke={rightStrokeColor}
        stroke-width="3"
        stroke-linejoin="bevel"
      />
    </svg>
  );
};

export default PageWideAxis;
