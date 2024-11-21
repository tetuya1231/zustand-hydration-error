"use client";

import { useBearStore } from "@/stores/bear-store";
import { usePersistedStore } from "@/stores/use-persisted-store";
import { useEffect } from "react";

export default function StoreForm() {
  //   const bears = usePersistedStore(useBearStore, (state) => state.bears);
  const bears = useBearStore((state) => state.bears);
  const increase = useBearStore((state) => state.increase);

  useEffect(() => {
    console.log(`page bears=${bears}`);
  }, [bears]);

  return (
    <div>
      <div>{bears}</div>
      <button onClick={() => increase(1)}>one up</button>
    </div>
  );
}
