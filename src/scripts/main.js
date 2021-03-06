import { GiffyGram } from "./GiffyGram.js"
import { LoginForm } from "./auth/Login.js"
import { fetchUsers, fetchPosts, fetchMessages } from "./data/provider.js"


const applicationElement = document.querySelector(".giffygram")
/*
applicationElement.addEventListener("stateChanged", () => {
    return fetchUsers()
    .then( () => fetchPosts())
    .then( () => fetchMessages())
    .then( () => renderApp())
})
*/

document.addEventListener("stateChanged", () => {
    return fetchUsers()
    .then( () => fetchPosts())
    .then( () => fetchMessages())
    .then( () => renderApp() )
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
.then( () => fetchPosts())
.then( () => fetchMessages())
.then( () => renderApp())