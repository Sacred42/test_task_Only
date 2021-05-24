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
                <label className ="auth__page_label_date">Пароль</label>
                <input className ="auth__page_date" type="text"></input>
            </div>
            <div>
            <div className ="auth__page_checkbox_container">
               <input className ="auth__page_checkbox" type="checkbox" id="checkbox_1"/>
               <label className ="auth__page_label" for="checkbox_1">Запомнить пароль</label>
               </div>
            </div>
             <button type="submit">Войти</button>

          </form>
        </div>
    )
}

export default Auth;