import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface BearState {
  _hasHydrated: boolean;
  setHasHydrated: (state: boolean) => void;
  bears: number;
  increase: (by: number) => void;
  remove: () => void;
  update: (newBears: number) => void;
}

export const useBearStore = create<BearState>()(
  persist(
    (set) => ({
      _hasHydrated: false,
      setHasHydrated: (state) => {
        set({
          _hasHydrated: state,
        });
      },
      bears: 0,
      increase: (by) => set((state) => ({ bears: state.bears + by })),
      remove: () => set({ bears: 0 }),
      update: (newBears) => set({ bears: newBears }),
    }),
    {
      name: "bear",
      storage: createJSONStorage(() => sessionStorage),

      onRehydrateStorage: (state) => {
        return () => state.setHasHydrated(true);
      },
    }
  )
);
