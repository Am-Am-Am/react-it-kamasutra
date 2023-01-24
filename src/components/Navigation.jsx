import s from './Navigation.module.css';

const Navigation = () => {
    return(
        <nav className={s.nav}>
            <div><a href="#">pro</a></div>
            <div><a href="#">mes</a></div>
            <div><a href="#">news</a></div>
            <div><a href="#">music</a></div>
        </nav>
    )
}

export default Navigation;