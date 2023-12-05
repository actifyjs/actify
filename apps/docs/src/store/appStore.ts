import { create } from 'zustand'

interface AppState {
  top: number
  drawer: boolean
  drawerWidth: number
  setTop: (_: number) => void
  setDrawer: (_: boolean) => void
  setDrawerWidth: (_: number) => void
}

export const useAppStore = create<AppState>((set) => ({
  top: 64,
  drawer: false,
  drawerWidth: 240,
  setTop: (payload) => set({ top: payload }),
  setDrawer: (payload) => set({ drawer: payload }),
  setDrawerWidth: (payload) => set({ drawerWidth: payload })
}))
