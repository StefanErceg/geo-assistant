import { useState } from "react";
import PaperDropdown from "react-native-paper-dropdown";

export interface DropdownItem {
  value: string;
  label: string;
}

interface Props {
  list: DropdownItem[];
  label: string;
  value: string;
  setValue: (value: string) => void;
}

export const Dropdown = (props: Props) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <PaperDropdown
      {...props}
      mode={"outlined"}
      visible={expanded}
      showDropDown={() => {
        setExpanded(true);
      }}
      onDismiss={() => {
        setExpanded(false);
      }}
    />
  );
};
