import { useState } from "react";

export function useFieldHook() {
  const [value, setValue] = useState("");
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return [value, onChange];
}
