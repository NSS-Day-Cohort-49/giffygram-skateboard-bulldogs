import { deletePosts, getPosts, getUsers, addLikes } from "../data/provider.js";

const currentUser = parseInt(localStorage.getItem("gg_user"));
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
    


document.addEventListener("click", (click) => {
  if (click.target.id.startsWith("post--")) {
    const [, postId] = click.target.id.split("--");
    deletePosts(parseInt(postId));
  }
});

export const Posts = () => {
  const posts = getPosts();
  const users = getUsers();

  let foundUser = "";

  let postHTML = `${posts
    .map((post) => {
      foundUser = users.find((user) => user.id === post.userId);
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
                    <img id="favoritePost--${post.id}" class="actionIcon" src="/images/favorite-star-blank.svg">   
                    ${
                      currentUser !== post.userId
                        ? `<br>`
                        : `<button id="post--${post.id}" class="actionIcon">Delete</button>`
                    }
                </div>
            </div>
            </section>
            `;
    })
    .join("")}`;
  return postHTML;
};
