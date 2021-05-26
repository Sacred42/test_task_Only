import React , {useState, useEffect} from 'react';
import './Auth.css';
import { useForm } from "react-hook-form";
import FailureAuth from "../FailureAuth/FailureAuth";

const Auth = (props) =>{
    const { register, setValue, handleSubmit, formState: { errors }} = useForm();
    const [badAuth, setBadAuth] = useState(null); // статус ошибки
    const [getAuth, setGetAuth] = useState(null); // статус авторизации
    const [disabledBtn, setDisabledBtn] = useState(""); // статус кнопки
    const [toggleCheck, setToggleCheck] = useState(false); // статус чекбокса
    const [password , setPassword] = useState(localStorage.getItem('password'));
    const [user, setUser] = useState(null);
    const dangerBoder = "danger__border";

    useEffect(()=>{
     if(password){
         setToggleCheck(true);
         setValue("password", password); 
         setPassword(null);
     }
     if(getAuth === 'expect'){
      setDisabledBtn('disabled_btn')
     }
     return ()=>{}
    },[getAuth, errors])

    const getDate = ({firstName, password}) => {

        setGetAuth('expect'); // имитация сервера 
        setTimeout(()=>{
            setUser(firstName);
            setRemindPassword(password);
            setGetAuth('success');
            setDisabledBtn(null);
            if(firstName === "steve.jobs@example.com" && password === "password"){
                localStorage.setItem( 'auth_user', `${firstName}`);
                return props.history.push("/profile");
             }
             setBadAuth(true);
        },2000)   
    }

    const changeCheckBox = () =>{ // переключатель cb
        setToggleCheck((prev)=>!prev)
    }

    const setRemindPassword = (password) =>{ // Запись пароля в LS (запись происходит при попытки произвести авторизацию)
       if(toggleCheck){
         localStorage.setItem('password' , password);
       }  
    }

    const unSetRemindPassword = () =>{  // удаление пороля из LS
        if(toggleCheck){
            localStorage.removeItem('password')
        }    
    }

    return(
        <div className="auth__page">
          <form onSubmit={handleSubmit(getDate)}>
            <div>{badAuth && <FailureAuth user={user}/>}</div>
            <div>
                <label className ="auth__page_label_date">Логин</label>
                <input className ={`auth__page_date ${errors.firstName ? dangerBoder : null}`} type="text" {...register("firstName" , {required: true})} ></input>
                {errors.firstName && <p className="danger__error">Обязательное поле</p>}
            </div>
            <div>
                <label className ="auth__page_label_date">Пароль</label>
                <input className ={`auth__page_date ${errors.password ? dangerBoder : null}`} type="text" autoComplete="off" type="password" {...register("password" , {required: true})}></input>
                {errors.password && <p className="danger__error">Обязательное поле</p>}
            </div>
            <div>
            <div className ="auth__page_checkbox_container">
               <input className ="auth__page_checkbox" type="checkbox" id="checkbox_1" onClick={()=>{unSetRemindPassword()}} onChange={()=>changeCheckBox()} checked={toggleCheck}/>
               <label className ="auth__page_label_checkbox" htmlFor="checkbox_1">Запомнить пароль</label>
               </div>
            </div>
             <button className={disabledBtn} type="submit">Войти</button>
          </form>
        </div>
    )
}

export default Auth;