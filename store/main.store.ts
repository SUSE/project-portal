import { ProjectT } from '@/db/projects'
import create from 'zustand'

type State = {
  projects: ProjectT[]
  navPage: boolean
  setProjects: (newValue: ProjectT[]) => void
  setNavPages: () => void
}

export const useStore = create<State>((set, get) => ({
  projects: [],
  navPage: false,
  setProjects: (newValue) => set(() => ({ projects: newValue })),
  setNavPages: () => set(() => ({ navPage: !get().navPage })),
}))

export default useStore
