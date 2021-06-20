export const state = () => ({
  menuName: []
})

export const mutations = {
  SetMenuName (state, menuName) {
    state.menuName = [menuName]
  }
}