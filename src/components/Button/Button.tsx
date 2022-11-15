import { StyledButton } from "./styledButton";

interface IProps {
  isDisabled: boolean;
}

export const Button = ({ isDisabled }: IProps) => {
  return (
    <StyledButton type="submit" disabled={isDisabled}>
      Ohhhoooo 🍻
    </StyledButton>
  );
};
