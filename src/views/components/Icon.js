export const Icon = ({ name, color, width, height }) => {
  return (
    <>
      <svg
        height="height"
        viewBox="0 0 24 24"
        width="width"
        style={{ fill: color }}
      >
        <use href={`#${name}`}/>
      </svg>
    </>
  );
};
