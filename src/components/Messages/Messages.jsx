import s from './Messages.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

// let dataDialogs = [{name: 'Oxxxymiron', id: '0'}, {name: 'KPss', id: '1'}]
// let messagesData = [{message: 'где нас нет', id: '0'}, {message: 'я мечтаю', id: '1'}]

const Messages = (props) => {
    let dataDialogsItems = props.data.dialogs.map(item => <DialogItem name={item.name} id={item.id}/>)
    let messageItems = props.data.messages.map(message =><Message message={message.message}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dataDialogsItems}
            </div>
            <div className={s.messages}>
                {messageItems}
            </div>
        </div>
    )

}

export default Messages;