import { getPosts, addLikes } from "../data/provider.js"

 const applicationElement = document.querySelector(".giffygram")
// applicationElement.addEventListener("click", click => {
//     
//     }
// })
    

applicationElement.addEventListener(
    "click", (event) => {
               
        if (event.target.id.startsWith("likePost")) {
            const [,likePostId] = event.target.id.split("--")
            const likeUserId = localStorage.getItem('gg_user')

            const likeObj = {
               userId: parseInt(likeUserId),
               postId: parseInt(likePostId)
               

            }
            
            addLikes(likeObj)
            console.log(`New post sent to api: ${likeObj}`)
        }
    }
    )
    
   export const Posts = () => {
    const posts = getPosts()

    
    let postHTML = `
    <ul> ${posts.map(
        (post) => { 
     return`

    <li>
        <section class="post">
            <header>
                <h2 id= "postId" class="post__title">${post.title}</h2>
                </header>
                <img id= "postURL" class="post__image" src="${post.url}">
            <div class="post__description">
                ${post.description}
            </div>
            <div class="post__tagline">
                Posted by
                <a href="#" class="profileLink" id="userId">
                ${post.userId}
                </a>
                on ${post.timestamp}
            </div>
            <div class="post__actions">
            <div>
            <img id="likePost--${post.id}" class="actionIcon" src="/images/favorite-star-blank.svg">
            </div>
            <div class="post__actions">
            
            <div>
                <img id="blockPost--8" class="actionIcon" src="/images/block.svg">

            </div>
        </div>   
            </div>
            </div>
        </section>
        </li>`
    }).join("")}</ul>`
    
    return postHTML
}
    
// TODO: 
// 1. get posts from the database
// 2. build the HTML of a post
// 3. Call the HTML in Gifftgram.js
    