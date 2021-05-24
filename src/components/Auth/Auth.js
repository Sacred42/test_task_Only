import React from 'react';
import './Auth.css';

const Auth = () =>{
    return(
        <div className="auth__page">
          <form>
            <div>
                <label className ="auth__page_label_date">Логин</label>
                <input className ="auth__page_date" type="text"></input>
            </div>
            <div>
                <label className ="auth__page_label_date" >Пароль</label>
                <input className ="auth__page_date" type="text"></input>
            </div>
            <div>
               <input className ="auth__page_checkbox" type="checkbox" />
               <label className ="auth__page_label_checkbox">Запомнить пароль</label>
            </div>
             <button type="submit">Войти</button>

          </form>
        </div>
    )
}

export default Auth;