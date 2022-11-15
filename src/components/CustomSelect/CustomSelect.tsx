import Select, { OnChangeValue, ActionMeta } from "react-select";
import { ISelectOption } from "../../types/types";
import { selectStyles } from "./styledSelect";

interface IProps {
  setTips: (value: number) => void;
  value: number;
}

export const CustomSelect = ({ setTips, value }: IProps) => {
  const options: ISelectOption[] = [
    { value: 10, label: "10%" },
    { value: 15, label: "15%" },
    { value: 20, label: "20%" },
  ];

  function handleSelect(
    newValue: OnChangeValue<ISelectOption, boolean>,
    actionMeta: ActionMeta<ISelectOption>
  ): void {
    setTips((newValue as ISelectOption).value);
  }
  const getValue = (value: number): ISelectOption | undefined => {
    return options.find((option) => option.value === value);
  };

  return (
    <Select
      styles={selectStyles}
      value={getValue(value)}
      options={options}
      onChange={handleSelect}
    />
  );
};
