import { getMessages } from "../data/provider.js"

const applicationElement = document.querySelector(".giffygram")

//build message html
export const ReceivedMessages = () => {
   
   const currentUser = parseInt(localStorage.getItem("gg_user"))
   const messages = getMessages()
   
   let messageHTML = `<div id="messageList" class="messageList">`

   messageHTML += `${messages.map((message) => {
      
      if(currentUser === message.recipientId && message.read === false) {

         return `
               <div class="message" id="message--${message.id}">
                  <div class="message__author">From ${message.senderId}</div>
                  <div class="message__text">${message.text}</div>
               </div>
         `
      }
   })
   .join('')}`

   messageHTML += `</div>`

   return messageHTML
}

applicationElement.addEventListener("click", (event) => {
   if (event.target.id === "inbox") {
      showMessages()
   }
})

applicationElement.addEventListener("click", (event) => {
   if (event.target.id === "logo") {
      showPosts()
   }
})

const showMessages = () => {
   document.getElementById("addPost").style.display = "none"
   document.getElementById("postList").style.display = "none"
   document.getElementById("messageList").style.display = "block"
}

const showPosts = () => {
   document.getElementById("addPost").style.display = "block"
   document.getElementById("postList").style.display = "block"
   document.getElementById("messageList").style.display = "none"
}
