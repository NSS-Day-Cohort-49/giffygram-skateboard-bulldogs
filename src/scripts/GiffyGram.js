import { logoutButtonHTML } from './auth/Logout.js'
import { addPostForm } from './feed/AddPost.js'


export const GiffyGram = () => {
    // Show main main UI
    let html =  `
        <h1>Giffygram</h1> 
        ${logoutButtonHTML()} 
        <br><br>
        ${addPostForm()}
    `
    return html
}


