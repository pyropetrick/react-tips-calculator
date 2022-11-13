import Select, { OnChangeValue, ActionMeta, StylesConfig } from "react-select";
import { ISelectOption } from "../../types/types";

interface IProps {
  onSelect: (value: string) => void;
  value: string;
}

export const CustomSelect = ({ onSelect, value }: IProps) => {
  const options: ISelectOption[] = [
    { value: "10", label: "10%" },
    { value: "15", label: "15%" },
    { value: "20", label: "20%" },
  ];

  function handleSelect(
    newValue: OnChangeValue<ISelectOption, boolean>,
    actionMeta: ActionMeta<ISelectOption>
  ): void {
    onSelect((newValue as ISelectOption).value);
  }
  const getValue = (value: string): ISelectOption | undefined => {
    return value ? options.find((option) => option.value === value) : undefined;
  };

  const selectStyles: StylesConfig<ISelectOption, false> = {
    control: (styles) => ({
      ...styles,
      textAlign: "center",
    }),
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
