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

export const fetchLikes = () => {
    return fetch(`${apiURL}/likes`)
        .then(response => response.json())
        .then(
            (likesData) => {
                applicationState.likes = likesData
            }
        );
}

export const getUsers = () => {
    return applicationState.users.map(user => ({...user}))
}

export const getLikes = () => {
    return applicationState.likes.map(like => ({...like}))
};
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
    
export const fetchMessages = () => {
    return fetch(`${apiURL}/messages`)
    .then(response => response.json())
    .then(
        (messages) => {
            applicationState.messages = messages
        }
    )
}
        
export const getMessages = () => {
    return applicationState.messages.map(message => ({...message}))
}

//send new gif data to api and rerender app
    
export const addNewPost = (postObj) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(postObj)
    }
    
    return fetch(`${apiURL}/posts`, fetchOptions)
        .then(response => response.json())
        .then(()=> {
            document.dispatchEvent(new CustomEvent ("stateChanged"))
        }
    )
}

export const addLikes = (likeObj) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(likeObj)
    }

    return fetch(`${apiURL}/likes`, fetchOptions)
    .then(response => response.json())
    .then(() => {
        applicationElement.dispatchEvent(new CustomEvent ("stateChanged"))
    })
}
export const deletePosts = (id) => {

    return fetch(`${apiURL}/posts/${id}`, {method: "DELETE" })
        .then(
            () => {
                document.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}