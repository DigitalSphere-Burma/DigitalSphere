interface ButtonProps {
  text: string;
  type: "primary" | "secondary";
  className?: string;
  onClick?: Function;
}
export default function Button({
  text,
  type,
  className,
  onClick = () => {},
}: ButtonProps) {
  const primary = "bg-primary hover:bg-primary text-white";
  const secondary = "border hover:bg-gray-700";

  return (
    <button
      className={`${
        type === "primary" ? primary : secondary
      } py-3 font-bold rounded-full hover:brightness-110 ${className}`}
    >
      {text}
    </button>
  );
}
