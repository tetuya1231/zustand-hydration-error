import { useState, useEffect } from "react";

export const usePersistedStore = <T, F>(
  store: (callback: (state: T) => unknown) => unknown,
  callback: (state: T) => F
) => {
  const result = store(callback) as F;
  const [data, setData] = useState<F>();

  if (callback.toString().includes("bears")) {
    console.info(`result=${result} data=${data}`);
    // console.info(
    //   `orderProducts.length orderストア内の元データ=${result?.length} 描画データ=${data?.length}`
    // );
  }

  useEffect(() => {
    setData(result);
  }, [result]);

  return data;
};
