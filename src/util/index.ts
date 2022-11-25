import { useEffect, useState } from "react";

export const isFalsy = (value: unknown) => (value === 0 ? false : !value);

// 在函数中，改变传入对象本身是不好的
export const cleanObject = (object: object) => {
  // Object.assign({}, object)
  const result = { ...object };

  Object.keys(result).forEach((key) => {
    // exclude 0, which is true
    //@ts-ignore
    const value = result[key];
    if (isFalsy(value)) {
      //@ts-ignore
      delete result[key];
    }
  });

  return result;
};

// hook 里面使用 hook
// 封装初始化 useEffect(), 去除结尾的 []
export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, []);
};

// Use Generic
export const useDebounce = <V>(value: V, delay?: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debouncedValue;
};
