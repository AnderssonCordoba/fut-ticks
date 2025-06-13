import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useAppStore = create(
  persist(
    (set, get) => ({
      user: null,
      setUser: (user) => set({ user }),
      cargando: false,
      searchData: null,
      resentsSearchData: [],
      setCargando: (value) => {
        set({ cargando: value });
      },

      setSearchData: (data) => {
        const prev = get().resentsSearchData;
        const exists = prev.some(item => item.matchId === data.matchId);

        const updated = exists ? prev : [data, ...prev].slice(0, 7);

        set({
          searchData: data,
          resentsSearchData: updated
        });
      }

    }),
    {
      name: 'Fut-Ticks',
    }
  )
);

export default useAppStore;
