
export const Logout = () => {
  window.localStorage.clear();
  document.dispatchEvent(new CustomEvent("stateChanged"))
}
//build logout button hmtl
const applicationElement = document.querySelector(".giffygram")


