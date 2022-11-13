import { MyButton } from "./myButton";

interface IProps {
  isDisabled: boolean;
}

export const Button = ({ isDisabled }: IProps) => {
  return (
    <MyButton type="submit" disabled={isDisabled}>
      Ohhhoooo 🍻
    </MyButton>
  );
};
