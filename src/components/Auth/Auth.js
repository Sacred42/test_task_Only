import React , {useState, useEffect} from 'react';
import './Auth.css';
import { useForm } from "react-hook-form";
import FailureAuth from "../FailureAuth/FailureAuth";

const Auth = (props) =>{
    const { register, watch, setValue, handleSubmit, formState: { errors }} = useForm();
    const [badAuth, setBadAuth] = useState(null);
    const [getAuth, setGetAuth] = useState(null);
    const [disabledBtn, setDisabledBtn] = useState("");
    const watchPassword = watch("password");
    const wathcCheckBox = watch("checkbox");
    

    console.log(watchPassword);
    console.log(wathcCheckBox);

    useEffect(()=>{
     if(getAuth === 'expect'){
      setDisabledBtn('disabled_btn')
     }
     return ()=>{}
    },[getAuth])

    const getDate = ({firstName, password}) => {
        setGetAuth('expect');
        setTimeout(()=>{
            setGetAuth('success');
            setDisabledBtn(null);
            if(firstName === "steve.jobs@example.com" && password === "password"){
                localStorage.setItem( 'auth_user', `${firstName}`);
                return props.history.push("/profile");
             }
             setBadAuth(true);
        },2000)   
    }

    const setRemindPassword = (password) =>{
       if(wathcCheckBox){
        return localStorage.setItem('password' , password);
       }
       localStorage.removeItem('password');   
    }

    return(
        <div className="auth__page">
          <form onSubmit={handleSubmit(getDate)}>
            <div>{badAuth && <FailureAuth/>}</div>
            <div>
                <label className ="auth__page_label_date">Логин</label>
                <input className ="auth__page_date" type="text" {...register("firstName" , {required: true})} ></input>
                {errors.firstName && <p>Обязательное поле</p>}
            </div>
            <div>
                <label className ="auth__page_label_date">Пароль</label>
                <input className ="auth__page_date" type="text" {...register("password" , {required: true})}></input>
                {errors.password && <p>Обязательное поле</p>}
            </div>
            <div>
            <div className ="auth__page_checkbox_container">
               <input className ="auth__page_checkbox" type="checkbox" id="checkbox_1" {...register("checkbox")}/>
               <label className ="auth__page_label_checkbox" htmlFor="checkbox_1">Запомнить пароль</label>
               </div>
            </div>
             <button className={disabledBtn} onClick={()=>setRemindPassword()} type="submit">Войти</button>
          </form>
        </div>
    )
}

export default Auth;