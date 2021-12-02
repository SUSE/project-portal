import { ProjectT } from '@/db/projects'
import create from 'zustand'

type State = {
  projects: ProjectT[]
  filtered: ProjectT[]
  setProjects: (newValue: ProjectT[]) => void
}

export const useStore = create<State>((set) => ({
  projects: [],
  filtered: [],
  setProjects: (newValue) => set(() => ({ projects: newValue })),
}))

export default useStore
