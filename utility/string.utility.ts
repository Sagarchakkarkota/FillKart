const addEllipsis = ({
  string,
  length,
}: {
  string: string;
  length: number;
}) => {
  if (string?.length <= length) return string;
  return string?.slice(0, length) + "...";
};

const hexToRGBA = ({ hex, alpha }: { hex: string; alpha: number }): string => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export { addEllipsis, hexToRGBA };
