import {rerenderEntireTree} from "../render";

let state = {
    profilePage:{
        posts:[{message: 'где нас нет?', id: 0,likesCount: 0}, {message: 'я мечтаю!', id: 0,likesCount: 0}],
        newPostText : 'xxx'
    },
    messagesPage:{
        messages: [{message: 'где нас нет', id: 0}, {message: 'я мечтаю', id: 1}],
        dialogs: [{name: 'Oxxxymiron', id: 0}, {name: 'KPss', id: 1}]
    }
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state)
}

export let updateNewPostText = (newText) => {

    state.profilePage.newPostText = newText;
    rerenderEntireTree(state)
}

export default state;
