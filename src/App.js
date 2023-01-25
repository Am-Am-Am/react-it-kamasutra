
import './App.css';
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Main from "./components/Main/Main";
import Dialogs from "./components/Dialogs/Dialogs";


const App = () => {
  return (
      <div className='app-wrapper'>
          <Header/>
             <Navigation/>
          {/*<Main/>*/}
          <div className="content">
              <Dialogs/>
          </div>

      </div>
  );
}




export default App;
