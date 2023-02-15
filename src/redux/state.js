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

    subscribe(observer){
        this._callSubscriber = observer;//наблюдатель
    },
    dispatch(action){
        if(action.type === 'ADD-POST'){
            let newPost = {
                id: 5,
                message: postMessage,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._callSubscriber(this._state)
        } else if(action.type === 'UPDATE-NEW-POST-TEXT'){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state)
        }
    }
}













export default store;
window.store = store;