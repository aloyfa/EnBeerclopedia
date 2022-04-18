import React, { useState } from 'react'
import Title from './components/Title/Title'
import Label from './components/Label/Label'
import Input from './components/Input/Input.jsx'
import './Login.css'

const Login = () => {

  const [usuario, setUsuario] = useState('');
  const [password,setPassword] = useState ('');
  const [passwordError,setPasswordError] = useState(false)

  function handleChange(name,value){
    if(name === 'user') {
      setUsuario (value)
    } else {
      if(value.length < 6) {
        setPasswordError (true);
      } else{
      setPassword (value)
      setPasswordError (false)
      }
    }
  }
  function handleSubmit () {
    let account = {usuario,password}
    if(account){
      console.log("account:",account )
    }
  }
  console.log("usuario:", usuario)
  console.log("password:",password)
  return (
    <div className= "login-container">
    <form>
      <Title text= 'Welcome!'/>
      <Label text= "User"/>
      <Input
      attribute={{
        id:'user',
        name:'user',
        type:'text',
        placeholder: 'user@gmail.com',
        onChange: ''
      }}
      handleChange= {handleChange}
      /> 
      <Label text="Password"/> 
      <Input attribute={{
        id:'password',
        name:'password',
        type:'password',
        placeholder: '••••••'
      
      }}
      handleChange= {handleChange}
      param= {passwordError}
      />

      { passwordError && 
         <label className='label-error'>
           Password is invalid
         </label>
      }
      <button onClick= {handleSubmit}>Login</button>
      </form>
    </div>     
         
  )
}
 
export default Login
