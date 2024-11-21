import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface BearState {
  bears: number;
  increase: (by: number) => void;
  remove: () => void;
  update: (newBears: number) => void;
}

export const useBearStore = create<BearState>()(
  persist(
    (set) => ({
      bears: 0,
      increase: (by) => set((state) => ({ bears: state.bears + by })),
      remove: () => set({ bears: 0 }),
      update: (newBears) => set({ bears: newBears }),
    }),
    {
      name: "bear",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

// export const useBearStore = create<BearState>()((set) => ({
//   bears: 9999,
//   increase: (by) => set((state) => ({ bears: state.bears + by })),
//   remove: () => set({ bears: 0 }),
//   update: (newBears) => set({ bears: newBears }),
// }));
