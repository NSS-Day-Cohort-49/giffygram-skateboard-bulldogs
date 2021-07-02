import { deletePosts, getPosts, getUsers } from "../data/provider.js";

const applicationElement = document.querySelector(".giffygram");


applicationElement.addEventListener("click", (click) => {
    if (click.target.id.startsWith("post--")) {
        const [, postId] = click.target.id.split("--");
        deletePosts(parseInt(postId));
    }
});

/*
document.addEventListener("click", (click) => {
    if (click.target.id.startsWith("post--")) {
        const [, postId] = click.target.id.split("--");
        deletePosts(parseInt(postId));
    }
});
*/

export const Posts = () => {
    const posts = getPosts();
    const users = getUsers();
    const currentUser = parseInt(localStorage.getItem("gg_user"));

    let foundUser

    let postHTML = `<div id="postList" class="postList">`

    postHTML += `${posts
        .map((post) => {
        foundUser = users.find((user) => user.id === post.userId)
            return `
                <section id="post" class="post">
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
                            ${currentUser !==  post.userId ? `<br>` : `<img id="post--${post.id}" class="actionIcon" src="/images/block.svg" alt>`}
                        </div>
                    </div>
                </section>
            `
    })
    .join("")}`

    postHTML += `</div>`

  return postHTML;
};
