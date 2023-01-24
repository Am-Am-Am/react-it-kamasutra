import s from './Navigation.module.css';

const Navigation = () => {
    return(
        <nav className={s.nav}>
            <div><a href="src/components/Navigation/Navigation#">pro</a></div>
            <div><a href="src/components/Navigation/Navigation#">mes</a></div>
            <div><a href="src/components/Navigation/Navigation#">news</a></div>
            <div><a href="src/components/Navigation/Navigation#">music</a></div>
        </nav>
    )
}

export default Navigation;