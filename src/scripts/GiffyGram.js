import { Logout, logoutButtonHTML } from './auth/Logout.js'
import { Posts } from './feed/PostList.js'

export const GiffyGram = () => {
    // Show main main UI
    return `<h1>Giffygram</h1> ${logoutButtonHTML()}
    
    <div class="giffygram__feed">
    ${Posts()} 
    </div>
    `
}


