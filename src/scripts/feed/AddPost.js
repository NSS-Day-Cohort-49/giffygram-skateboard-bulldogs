const applicationElement = document.querySelector(".giffygram")

applicationElement.addEventListener("click", (event) => {
   if (event.target.id === "miniMode") {
      showPostDiv()
   } 
})

applicationElement.addEventListener("click", (event) => {
   if (event.target.id === "newPost__cancel") {
      showMiniMode()
   }
})

const showMiniMode = () => {
   document.getElementById("miniMode").style.display = "block"
   document.getElementById("newPost").style.display = "none"
}

const showPostDiv = () => {
   document.getElementById("miniMode").style.display = "none"
   document.getElementById("newPost").style.display = "block"
}

export const miniAddPost = () => {
   
   let miniHTML = `
      <div class="miniMode" id="miniMode">Have a gif to post?</div>
   `
   return miniHTML
}


export const addPostForm = () => {

   let addPostHTML = `
      <div id="newPost" class="newPost">
         <div>
            <input value="" name="postTitle" class="newPost__input" type="text" placeholder="Title">
         </div>
         <div>
            <input value="" name="postURL" class="newPost__input" type="text" placeholder="URL of gif">
         </div>

         <textarea name="postDescription" class="newPost__input newPost__description" placeholder="Story behind your gif..."></textarea>

         <button id="newPost__submit">Save</button>
         <button id="newPost__cancel">Cancel</button>
      </div>
   `
   return addPostHTML
}


