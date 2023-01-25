import s from './Navigation.module.css';

const Navigation = () => {
    return(
        <nav className={s.nav}>
            <div><a href="/profile">profile</a></div>
            <div><a href="/dialogs">dialogs</a></div>
            <div><a href="/news">news</a></div>
            <div><a href="/music">music</a></div>
        </nav>
    )
}

export default Navigation;