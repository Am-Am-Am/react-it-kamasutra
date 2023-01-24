import s from './Main.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Main = () => {
    return(
        <main className={s.content}>
            <div className="profile">
                <div className="ava">
                    <img src="https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-260nw-2174926871.jpg" alt=""/>
                </div>
                <div className="description">описание</div>
            </div>
            <MyPosts/>
        </main>
    )
}

export default Main;