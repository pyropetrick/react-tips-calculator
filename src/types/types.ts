import { ActionMeta, OnChangeValue } from "react-select";

export interface ISelectOption {
  value: number;
  label: string;
}
export interface ISelectProps {
  options: ISelectOption[];
  onChange: (
    newValue: OnChangeValue<ISelectOption, boolean>,
    actionMeta: ActionMeta<ISelectOption>
  ) => void;
  value: ISelectOption;
}
