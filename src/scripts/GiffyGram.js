import { Navigation } from './nav/Navigation.js'
import { addPostForm } from './feed/AddPost.js'
import { Posts } from './feed/PostList.js'
import { Footer } from './nav/Footer.js'

export const GiffyGram = () => {
    // Show main main UI
    
    
    let html =  `

        ${Navigation()} 
        <br><br><br>
        ${addPostForm()}
        ${Posts()} 
        ${Footer()}
    `
    return html
}
