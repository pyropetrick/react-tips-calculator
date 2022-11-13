import { Button } from "../Button/Button";
import { CustomSelect } from "../CustomSelect/CustomSelect";
import { Input } from "../Input/Input";
import { InputGroup, StyledForm, SubTitle, Title, TotalBill } from "./form";
import { FormEvent, useEffect, useState } from "react";

export const Form = () => {
  const [bill, setBill] = useState<string>("");
  const [persons, setPersons] = useState<string>("");
  const [tips, setTips] = useState<string>("10");
  const [total, setTotal] = useState<number>(0);
  const [isDisabled, toogleDisabled] = useState<boolean>(true);

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const commonTips = +bill / +tips;
    const commonBill = +bill + commonTips;
    setTotal(+(commonBill / +persons).toFixed(2));
  };
  useEffect(() =>
    bill && persons && tips && +bill > 0 && +persons > 0
      ? toogleDisabled(false)
      : toogleDisabled(true)
  );

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Title>Welcome to App</Title>
      <SubTitle>Let’s go calculate your tips</SubTitle>
      <InputGroup>
        <Input placeholder="Enter bill" onChange={setBill} />
        <Input placeholder="Enter persons" onChange={setPersons} />
        <CustomSelect value={tips} onSelect={setTips} />
      </InputGroup>
      <TotalBill>Total: {total}$</TotalBill>
      <Button isDisabled={isDisabled} />
    </StyledForm>
  );
};
