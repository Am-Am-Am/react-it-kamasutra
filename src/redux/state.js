let state = {
    profilePage:{
        posts:[{message: 'где нас нет?', id: 0,likesCount: 0}, {message: 'я мечтаю!', id: 0,likesCount: 0}],
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
    state.profilePage.posts.push(newPost)
}

export default state;
