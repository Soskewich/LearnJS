import { renderEntireTree } from "../render";

let state = {
    profilesPage:{
        postsData: [
    
            {id: 1, message: 'its my first post', likescount: 12},
            {id: 2, message: 'its my second post', likescount: 18},
            {id: 3, message: 'its my thirty post', likescount: 24},
          
          ],
        
        newPostText:"write text" 

        
                
    },
    messagesPage: {
        messageData: [
            {id: 1, message:"hi"},
            {id: 2, message:"HI"},
            {id: 3, message:"Hello"},
            {id: 4, message:"Hello!"},
          ],
          dialogsData: [
            {id: 1, name:"Tema"},
            {id: 2, name:"Valera"},
            {id: 3, name:"Serega"},
            {id: 4, name:"Danik"},
          ],  
    }
      
  }

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilesPage.newPostText,
        likescount: 100
    }
    state.profilesPage.postsData.push(newPost);
    state.profilesPage.newPostText = ''
    renderEntireTree(state);
}

export let updatePostText = (newText) => {
    state.profilesPage.newPostText = newText
    renderEntireTree(state);
}

  export default state;