import './SuccesAuth.css';
import { Link } from 'react-router-dom';
const SuccessAuth = () =>{
    const authUser  = localStorage.getItem('auth_user');
    return (
     <div  className="success__main">
     <span className="success__gretting">Здраствуйте, </span>
     <span className="success__user">{authUser}</span>
     <Link to="/" className="success__btn"><button>Выйти</button></Link>
     </div>
    )
}

export default SuccessAuth;