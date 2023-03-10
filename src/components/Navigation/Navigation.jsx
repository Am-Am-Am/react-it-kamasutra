import s from './Navigation.module.css';
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return(
        <nav className={s.nav}>
            <div><NavLink to="/profile">Profile</NavLink></div>
            <div><NavLink to="/messages">Messages</NavLink></div>
            <div><NavLink to="/news">News</NavLink></div>
            <div><NavLink to="/music">Music</NavLink></div>
            <div><NavLink to="/settings">Settings</NavLink></div>
        </nav>
    )
}

export default Navigation;