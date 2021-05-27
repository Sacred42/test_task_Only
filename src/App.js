import './App.css';
import Auth from './components/Auth/Auth';
import SuccessAuth from './components/SuccessAuth/SuccessAuth';
import Header from './components/Header/Header';
import { Redirect } from "react-router-dom"
import { BrowserRouter, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
       <div className="container">
         <Route exact path ="/"  render={()=><Redirect to="/login"/>}/>
         <Route path ="/profile" component={SuccessAuth}/>
         <Route exact path ="/login" component={Auth} />
      </div>  
    </div>
    </BrowserRouter>
  );
}

export default App;
