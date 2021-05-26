import './App.css';
import Auth from './components/Auth/Auth';
import SuccessAuth from './components/SuccessAuth/SuccessAuth';
import Header from './components/Header/Header';
import { BrowserRouter, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
       <div className="container">
         <Route exact path ="/" component={Auth}/>
         <Route path ="/profile" component={SuccessAuth}/>
      </div>  
    </div>
    </BrowserRouter>
  );
}

export default App;
