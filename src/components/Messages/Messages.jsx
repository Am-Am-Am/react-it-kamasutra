import s from './Messages.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Messages = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="111" id="1"/>
                <DialogItem name="222" id="2"/>
                <DialogItem name="333" id="3"/>
            </div>
            <div className={s.messages}>
                <Message message="message 1"/>
                <Message message="message 2"/>
                <Message message="message 3"/>
            </div>
        </div>
    )

}

export default Messages;