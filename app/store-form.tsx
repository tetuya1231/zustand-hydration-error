"use client";

import { useBearStore } from "@/stores/bear-store";
// import { usePersistedStore } from "@/stores/use-persisted-store";
import { useEffect } from "react";

export default function StoreForm() {
  // const bears = usePersistedStore(useBearStore, (state) => state.bears);
  const hasHydrated = useBearStore((state) => state._hasHydrated);
  const bears = useBearStore((state) => state.bears);
  const increase = useBearStore((state) => state.increase);

  useEffect(() => {
    console.log(`page bears=${bears}`);
    console.log(`page hasHydrated=${hasHydrated}`);
  }, [bears, hasHydrated]);

  // if (typeof window === "undefined") {
  //   console.log("server");
  //   console.log(`page bears=${bears}`);
  // } else {
  //   console.log("client");
  //   console.log(`page bears=${bears}`);
  // }

  return (
    <div>
      <div>{bears}</div>
      <button onClick={() => increase(1)}>one up</button>
    </div>
  );
}
