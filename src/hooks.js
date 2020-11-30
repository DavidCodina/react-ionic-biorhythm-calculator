import { useState } from 'react';


export function useLocalStorage(key, defaultValue){
  function getInitialValue(){
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator
    return localStorage.getItem(key) ?? defaultValue;
  }

  const [value, setValue] = useState(getInitialValue);

  function setAndStoreValue(newValue){
    setValue(newValue);
    localStorage.setItem(key, newValue);
  }

  return [value, setAndStoreValue];
}
