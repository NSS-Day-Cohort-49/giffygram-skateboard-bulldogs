import { GiffyGram } from "./GiffyGram.js"
import { LoginForm } from "./auth/Login.js"
import { fetchUsers } from "./data/provider.js"

const applicationElement = document.querySelector(".giffygram")

applicationElement.addEventListener("stateChanged", () => {
   return renderApp()
})

export const renderApp = () => {
    const user = parseInt(localStorage.getItem("gg_user"))

    if (user) {
        applicationElement.innerHTML = GiffyGram()
    } else {
        applicationElement.innerHTML = LoginForm() 
    }
}

renderApp()

fetchUsers()