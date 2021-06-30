import { getPosts } from "../data/provider.js"

export const Posts = () => {
    const posts = getPosts()

    let postHTML = `
    <ul> ${posts.map(
        (post) => 
        `
    <li>
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
                ${post.userId}
                </a>
                on ${post.timestamp}
            </div>
            <div class="post__actions">
            <div>
            <img id="favoritePost--4" class="actionIcon" src="/images/favorite-star-blank.svg">
            </div>
            <div>    
            </div>
            </div>
        </section>
        </li>`
        ).join("")}</ul>`
    return postHTML
}


// TODO: 
// 1. get posts from the database
// 2. build the HTML of a post
// 3. Call the HTML in Gifftgram.js

