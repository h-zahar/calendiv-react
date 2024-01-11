const PrevIcon = ({
  width = 10,
  height = 10,
}: {
  width?: number;
  height?: number;
}) => {
  return (
    <div>
      <svg
        fill="#000000"
        version="1.1"
        baseProfile="tiny"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width={width}
        height={height}
        viewBox="0 0 42 42"
        xmlSpace="preserve"
      >
        <polygon
          fill-rule="evenodd"
          points="31,38.32 13.391,21 31,3.68 28.279,1 8,21.01 28.279,41 "
        />
      </svg>
    </div>
  );
};

export default PrevIcon;
