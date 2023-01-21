
import './App.css';
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Main from "./components/Main";


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
