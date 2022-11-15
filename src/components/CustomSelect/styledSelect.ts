import { StylesConfig } from "react-select";
import { ISelectOption } from "../../types/types";

export const selectStyles: StylesConfig<ISelectOption, false> = {
  control: (styles) => ({
    ...styles,
    textAlign: "center",
    borderRadius: "30px",
    border: "none",
  }),
  indicatorSeparator: (styles) => ({ ...styles, background: "none" }),
  indicatorsContainer: (styles) => ({ ...styles, color: "#756C6C" }),
  singleValue: (styles) => ({ ...styles, color: "#756C6C", padding: "15px 0" }),
};
