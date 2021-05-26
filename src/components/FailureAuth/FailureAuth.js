import './FailureAuth.css'
const FailureAuth = ({user}) =>{
    const existUser = "steve.jobs@example.com";
    return(existUser === user ? 
          <div className="auth__failure">Неверный пароль</div> :
          <div className="auth__failure">Пользователь {user} не существует</div>);       
}

export default FailureAuth;