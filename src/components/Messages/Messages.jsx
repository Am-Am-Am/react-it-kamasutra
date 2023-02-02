import s from './Messages.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

let dataDialogs = [{name: 'Oxxxymiron', id: '0'}, {name: 'KPss', id: '1'}]
let messagesData = [{message: 'где нас нет', id: '0'}, {message: 'я мечтаю', id: '1'}]

const Messages = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dataDialogs[0].name} id={dataDialogs[0].id}/>
                <DialogItem name={dataDialogs[1].name} id={dataDialogs[1].id}/>
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
            </div>
        </div>
    )

}

export default Messages;