import { deletePosts, getPosts, getUsers,  } from "../data/provider.js"

const applicationState = document.querySelector("#container");

document.addEventListener("click", click => {
    if (click.target.id.startsWith("post--")) {
        const [,postId] = click.target.id.split("--")
        deletePosts(parseInt(postId))
    }
})

export const Posts = () => {
    const posts = getPosts()
    const users = getUsers()
    
    let foundUser = ""

    let postHTML = `${posts.map(
        (post) => {
            foundUser = users.find(
                (user) => user.id === post.userId
                )
                return `
            <section class="post">
                <header>
                    <h2 class="post__title">${post.title}</h2>
                </header>
            <img class="post__image" src="${post.url}">
            <div class="post__description">
                ${post.description}
            </div>
            <div class="post__tagline">
                Posted by
                <a href="#" class="profileLink" id="userId">
                ${foundUser.name}
                </a>
                on ${post.timestamp}
            </div>
            <div class="post__actions">
                <div>
                    <img id="favoritePost--4" class="actionIcon" src="/images/favorite-star-blank.svg">   
                    <button class="actionIcon" id="post--${post.id}">Delete </button>
                </div>
            </div>
            </section>
            `
            }
        ).join("")}`
    return postHTML
}


// TODO: 
// 1. get posts from the database
// 2. build the HTML of a post
// 3. Call the HTML in Gifftgram.js

