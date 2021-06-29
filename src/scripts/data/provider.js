const apiURL = "http://localhost:8088"
const applicationElement = document.querySelector(".giffygram")



const applicationState = {
    currentUser: {},
    feed: {
        chosenUser: null,
        displayFavorites: false,
        displayMessages: false
    },
    users: [],
    posts: [],
    likes: [],
    messages: []
}


// Fetch Users set in applicationState 
// getUsers use the data in other modules

export const fetchUsers = () => {
    return fetch(`${apiURL}/users`)
    .then(response => response.json())
    .then(
        (users) => {
            applicationState.users = users
        }
    )
}
export const getUsers = () => {
    return applicationState.users.map(user => ({...user}))
}

export const fetchPosts = () => {
    return fetch(`${apiURL}/posts`)
        .then(response => response.json())
        .then( 
            (posts) => {
                applicationState.posts = posts
                console.log("posts", posts)
            }
        )
}
export const getPosts = () => {
    return applicationState.posts.map(post => ({...post}))
}