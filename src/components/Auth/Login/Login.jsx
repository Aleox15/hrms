import React,{useContext, useState,useEffect} from 'react'
import './Login.css'
import UserContext from '../../../UserContext'
import { useNavigate } from 'react-router-dom'
import Users from '..//../../datas/users'
export default function Login() {
  const [form,setForm] = useState({username:'',password:''})
  const [formErrors,setFormErrors] = useState("")
  const {username,setUsername} = useContext(UserContext)
  const navigate = useNavigate();
  function handleForm(e){
    setForm(prev=>({
      ...prev,[e.target.name]:e.target.value
    }))
  }
  // console.log( )
  function login(e){
    e.preventDefault();
      if(form.username==="" || form.password ===''){
        setFormErrors("one of your fields is empty")
      }else if(form.password.length<6){
        setFormErrors("password should be greater than 6 chraracters")
      }
      else{
        const result = Users.filter((item) => item.nom === form.username);
          setUsername(result[0].nom)
          navigate('/profile')
        // if(result){
        //   setUsername(result[0].nom)
        //   navigate('/profile')
    
        // }else{
        //   setFormErrors("your info are wrong")
        // }
      }

  }
  return (
    <div className="login">
      <div className="wrapper">
        <div className="title"><span>Login Form</span></div>
        <form onSubmit={(e)=>login(e)}>
          <div className="row">
            <i className="fas fa-user"></i>
            <input type="text" placeholder="Username" name='username' value={form.username} onChange={(e)=>{handleForm(e)}}  required />
          </div>
          <div className="row">
            <i className="fas fa-lock"></i>
            <input type="password" placeholder="Password" name='password' value={form.password} onChange={(e)=>{handleForm(e)}} required />
          </div>
          <div className="row">
            <p className='errorUser'>{formErrors}</p>
          </div>
          {/* <div className="pass"><a href="#">Forgot password?</a></div> */}
          <div className="row button">
            <input type='submit' value="Login" />
            {/* <button>Login</button> */}
          </div>
        </form>
      </div>
    </div>
  )
}
