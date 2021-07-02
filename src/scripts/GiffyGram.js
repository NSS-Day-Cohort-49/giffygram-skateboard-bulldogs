import { Navigation } from './nav/Navigation.js'
import { addPostForm } from './feed/AddPost.js'
import { Posts } from './feed/PostList.js'
import { Footer } from './nav/Footer.js'
import { ReceivedMessages } from './message/ReceivedMessages.js'

export const GiffyGram = () => {
    // Show main main UI
    
    
    let html =  `

        ${Navigation()} 
        <br><br><br>
        ${addPostForm()}

        ${Posts()} 
        <br><br><br>
        ${ReceivedMessages()}
        <br><br><br>
        ${Footer()}
    `
    return html
}
