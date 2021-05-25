import './App.css';
import Auth from './components/Auth/Auth';
import SuccessAuth from './components/SuccessAuth/SuccessAuth';
import { BrowserRouter, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
       <div className="container">
         <Route exact path ="/" component={Auth}/>
         <Route exact path ="/profile" component={SuccessAuth}/>
      </div>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
