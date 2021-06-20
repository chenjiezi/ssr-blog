export default function ({ store, route }) {
  store.commit('class/SetMenuName', route.name)
}