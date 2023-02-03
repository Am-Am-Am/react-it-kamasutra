import './App.css';
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Profile from "./components/Profile/Profile";
import Messages from "./components/Messages/Messages";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";


const App = () => {
    let postsData = [{message: 'где нас нет?', id: '0',likesCount: 0}, {message: 'я мечтаю!', id: '1',likesCount: 0}]
    let dataDialogs = [{name: 'Oxxxymiron', id: '0'}, {name: 'KPss', id: '1'}]
    let messagesData = [{message: 'где нас нет', id: '0'}, {message: 'я мечтаю', id: '1'}]
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navigation/>
                75

                <div className="content">
                    <Routes>
                        <Route path='/messages' element={<Messages dataDialogs = {dataDialogs} messagesData = {messagesData}/>}/>
                        <Route path='/profile' element={<Profile postsData = {postsData}/>}/>
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
