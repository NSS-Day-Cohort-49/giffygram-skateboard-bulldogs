import { logoutButtonHTML } from './auth/Logout.js'
import { miniAddPost, addPostForm } from './feed/AddPost.js'


export const GiffyGram = () => {
    // Show main main UI
    let html =  `
        <h1>Giffygram</h1> ${logoutButtonHTML()} 
        <br><br>
        ${miniAddPost()}
        ${addPostForm()}

    `
    return html
}


