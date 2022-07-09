import { useEffect, useState } from "react";

export const useInput = (initialValue, validations) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setIsDirty] = useState(false);
  const isValid = useValidation(value, validations);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onBlur = () => {
    setIsDirty(true);
  };
  return {
    value,
    onChange,
    onBlur,
    isDirty,
    ...isValid,
  };
};

export const useValidation = (value, validations) => {
  const [isEmpty, setEmpty] = useState(true);
  const [minLength, setMinLengthError] = useState(false);
  const [maxLength, setMaxLengthError] = useState(false);
  const [isValid, setValid] = useState(false);

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case "minLength":
          value.length < validations[validation]
            ? setMinLengthError(true)
            : setMinLengthError(false);
          break;
        case "isEmpty":
          value ? setEmpty(false) : setEmpty(true);
          break;
        case "maxLengthError":
          value.length > validations[validation]
            ? setMaxLengthError(true)
            : setMaxLengthError(false);
      }
    }
  }, [value]);

  useEffect(() => {
    setValid(isEmpty || minLength || maxLength);
  }, [isEmpty, minLength, maxLength]);

  return {
    isEmpty,
    setMinLengthError,
    setMaxLengthError,
    isValid,
  };
};