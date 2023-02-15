import './App.css';
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Profile from "./components/Profile/Profile";
import Messages from "./components/Messages/Messages";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {updateNewPostText} from "./redux/state";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navigation/>


                <div className="content">
                    <Routes>
                        <Route path='/messages' element={<Messages data = {props.state.messagesPage}/>}/>
                        <Route path='/profile' element={<Profile profilePage = {props.state.profilePage} dispatch = {props.dispatch} />}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                    </Routes>


                </div>

            </div>
        </BrowserRouter>
    );
}


export default App;
