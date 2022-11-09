import { StyledInput } from "./styledInput";

interface IProps {
  placeholder: string;
}

export const Input = ({ placeholder }: IProps) => {
  return <StyledInput type="number" placeholder={placeholder} />;
};
