import { Navigation } from './nav/Navigation.js'
import { addPostForm } from './feed/AddPost.js'
import { Posts } from './feed/PostList.js'


export const GiffyGram = () => {
    // Show main main UI
    
    
    let html =  `
    <section class="navigation">
        ${Navigation()} 
        </section>
        <br><br>
        ${addPostForm()}
        ${Posts()} 
    `
    return html
}
