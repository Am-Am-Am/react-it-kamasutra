
import './App.css';
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Main from "./components/Main/Main";


const App = () => {
  return (
      <div className='app-wrapper'>
          <Header/>
          <Navigation/>
          <Main/>
      </div>
  );
}




export default App;
