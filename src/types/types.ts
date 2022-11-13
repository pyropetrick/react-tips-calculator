import { ActionMeta, OnChangeValue } from "react-select";

export interface ISelectOption {
  value: string;
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
