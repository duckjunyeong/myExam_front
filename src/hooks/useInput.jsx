import React, { useCallback, useState } from "react";

const useInput = (initial) => {
  const [value, setValue] = useState(initial);

  const onChangeValue = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  return [value, onChangeValue, setValue];
};

export default useInput;
