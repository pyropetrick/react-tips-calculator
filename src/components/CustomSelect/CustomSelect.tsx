import Select from "react-select";
import { ISelectOption } from "../../types/types";

const options: ISelectOption[] = [
  { value: "10%", label: "10%" },
  { value: "15%", label: "15%" },
  { value: "20%", label: "20%" },
];

export const CustomSelect = () => {
  return <Select options={options} />;
};
