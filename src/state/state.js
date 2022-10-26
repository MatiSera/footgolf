import create from 'zustand'

const useStore = create((set) => ({
  bears: 0,
  hole: 0,
  game: [],
  increaseScore: () => set((state) => ({hole: state.hole + 1})),
  doubleIncreaseScore: () => set((state) => ({hole: state.hole + 2})),
  newHole: () => set((state) => ({ game: [...state.game, state.hole],hole: 0 })),
}))

export default useStore;