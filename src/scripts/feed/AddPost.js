import { addNewPost } from "/scripts/data/provider.js"

const applicationElement = document.querySelector(".giffygram")


//click event and function for displaying initially hidden new post form

applicationElement.addEventListener("click", (event) => {
   if (event.target.id === "miniMode") {
      showPostDiv()
   } 
})

const showPostDiv = () => {
   document.getElementById("miniMode").style.display = "none"
   document.getElementById("newPost").style.display = "block"
}


//click event and function for hiding post form

applicationElement.addEventListener("click", (event) => {
   if (event.target.id === "newPost__cancel") {
      showMiniMode()
   }
})

const showMiniMode = () => {
   document.getElementById("miniMode").style.display = "block"
   document.getElementById("newPost").style.display = "none"
}


//click event for posting new post to api

applicationElement.addEventListener(
    "click", event => {
        if (event.target.id === "newPost__submit") {
            const postTitle = document.getElementById("postTitle").value
            const postURL = document.getElementById("postURL").value
            const postDescription = document.getElementById("postDescription").value
            const postUserId = localStorage.getItem('gg_user')

            const postObj = {
               userId: postUserId,
               title: postTitle,
               url: postURL,
               description: postDescription,
               timestamp: Date.now()
            }

            addNewPost(postObj)

            console.log(`New post sent to api: ${postObj}`)
        }
    }
)


//build the html for displaying the new post form

export const addPostForm = () => {

   let addPostHTML = `
      <div class="miniMode" id="miniMode">
         Have a gif to post?
      </div>

      <div id="newPost" class="newPost">
         <div>
            <input value="" id="postTitle" name="postTitle" class="newPost__input" type="text" placeholder="Title">
         </div>
         <div>
            <input value="" id="postURL" name="postURL" class="newPost__input" type="text" placeholder="URL of gif">
         </div>

         <textarea id="postDescription" name="postDescription" class="newPost__input newPost__description" placeholder="Story behind your gif..."></textarea>

         <button id="newPost__submit">Save</button>
         <button id="newPost__cancel">Cancel</button>
      </div>
   `
   return addPostHTML
}
