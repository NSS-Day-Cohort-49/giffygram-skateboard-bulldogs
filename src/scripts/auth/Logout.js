
export const Logout = () => {
  window.localStorage.clear();
  document.querySelector(".giffygram").dispatchEvent(new CustomEvent("stateChanged"))
}
//build logout button hmtl
export const logoutButtonHTML = () => {
   let html = `<button id="logoutButton">Logout</button>`
   return html
}

const applicationElement = document.querySelector(".giffygram")

applicationElement.addEventListener("click", (event) => {
   if(event.target.id === "logoutButton")
   Logout()
}
)