import { Button } from "../Button/Button";
import { CustomSelect } from "../CustomSelect/CustomSelect";
import { Input } from "../Input/Input";
import { InputGroup, StyledForm, SubTitle, Title, TotalBill } from "./form";
import { useState } from "react";

interface IFormData {
  bill: number;
  persons: number;
  tips: string;
}
export const Form = () => {
  const [formData, setFormData] = useState<IFormData>({
    bill: 0,
    persons: 0,
    tips: "",
  });

  const submitForm = () => console.log(formData);

  return (
    <StyledForm onSubmit={submitForm}>
      <Title>Welcome to App</Title>
      <SubTitle>Let’s go calculate your tips</SubTitle>
      <InputGroup>
        <Input placeholder="Enter bill" />
        <Input placeholder="Enter persons" />
        <CustomSelect />
      </InputGroup>
      <TotalBill>Total: 0.00$</TotalBill>
      <Button />
    </StyledForm>
  );
};
