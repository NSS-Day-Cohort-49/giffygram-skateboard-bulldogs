import { Logout } from "/scripts/auth/Logout.js"
import { getMessages } from "../data/provider.js"

const applicationElement = document.querySelector(".giffygram")

applicationElement.addEventListener("click", (event) => {
    if(event.target.id === "logoutButton")
    Logout()
}
)



export const Navigation = () => {
    const currentUser = parseInt(localStorage.getItem("gg_user"))
    let messages = getMessages()
    
    let unreadMessages = messages.filter((message) => {
        return message.recipientId === currentUser && message.read === false
    })

    let navHTML = ` 
        <nav class="navigation">
            <div class="navigation__item navigation__icon">
                <img src="/images/pb.png" alt="Giffygram icon" id="logo">
            </div>
            <div class="navigation__item navigation__name">
                Giffygram
            </div>
            <div class="navigation__item navigation__search">

            </div>
            <div class="navigation__item navigation__message">
                <img id="directMessageIcon" src="/images/fountain-pen.svg" alt="Direct message">
                <div id="inbox" class="notification__count">
                    ${unreadMessages.length}
                </div>
            </div>
            <div class="navigation__item navigation__logout">
                <button id="logoutButton" class="fakeLink">Logout</button>
            </div>
        </nav>
    `
return navHTML
}
 