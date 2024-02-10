import { useState } from "react";

// Define the type for the useToggle hook
type UseToggleReturnType = [boolean, (customState?: boolean) => void];

// Define the useToggle hook
const useToggle = (initialState: boolean): UseToggleReturnType => {
  const [state, setState] = useState<boolean>(initialState);

  const toggle = (customState?: boolean) => {
    setState((prevState) => {
      if (customState) return customState;
      return !prevState;
    });
  };

  return [state, toggle];
};

export default useToggle;
