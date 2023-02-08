let store = {
    _state: {
        profilePage:{
            posts:[{message: 'где нас нет?', id: 0,likesCount: 0}, {message: 'я мечтаю!', id: 0,likesCount: 0}],
            newPostText : 'xxx'
        },
        messagesPage:{
            messages: [{message: 'где нас нет', id: 0}, {message: 'я мечтаю', id: 1}],
            dialogs: [{name: 'Oxxxymiron', id: 0}, {name: 'KPss', id: 1}]
        }
    },
    getState(){
        return this._state
    },
    _callSubscriber() {
        console.log("State changed")
    },
    addPost(postMessage){
        let newPost = {
            id: 5,
            message: postMessage,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._callSubscriber(this._state)
    },
    updateNewPostText(newText){
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state)
    },
    subscribe(observer){
        this._callSubscriber = observer;//наблюдатель
    }
}













export default store;
window.store = store;