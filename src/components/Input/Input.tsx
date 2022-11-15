import { ChangeEvent } from "react";
import { StyledInput } from "./styledInput";

interface IProps {
  placeholder: string;
  onChange: (value: number) => void;
}

export const Input = ({ placeholder, onChange }: IProps) => {
  const handleInput = (event: ChangeEvent<HTMLInputElement>): void => {
    onChange(+event.target.value);
  };

  return (
    <StyledInput
      type="number"
      placeholder={placeholder}
      onChange={handleInput}
    />
  );
};
