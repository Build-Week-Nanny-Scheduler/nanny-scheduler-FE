import React, { useState } from "react";

export const useInput = initialValue => {
  const [value, setValue] = useState({});
  const handleChanges = (updatedItem, updatedValue) => {
    setValue({ ...value, updatedValue });
  };
  return [value, setValue, handleChanges];
};
