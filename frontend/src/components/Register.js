import React, { useState } from 'react';
import { registerUser } from '../services/api';
import { Button, TextField } from '@mui/material';
import './login.css'

const Login = () => {
const [registerForm,setRegisterForm] = useState({
  firstname:"",
  lastname:"",
  username:"",
  password:"",
})
let [isPasswordMatch,setIsPasswordMatch] = useState(true)
let retypePassword

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //const response = await loginUser(registerForm);
      if(registerForm.password!==retypePassword){
        console.log("password does not match",retypePassword)
      }
      else {
        const response =  await registerUser({
          username:registerForm.username,
          firstname:registerForm.lastname,
          lastname:registerForm.lastname,
          password:registerForm.password
        })
        console.log(response)
      }
      // Stocker le token JWT localement
      
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e)=>{
     setRegisterForm({
      ...registerForm,
      [e.target.name] : e.target.value
     })
  }

  return (
  <div style={{minHeight:"100vh"}}> 
    <div className=' py-5  shadow'  style={{width:"500px",marginInline:"auto",marginTop:"70px",backgroundColor:"transparent",border:"1px solid #c4c4c4"}}>
    <form onSubmit={handleSubmit}>

<div className=''>
  <TextField 
  label="firstname" 
  name='firstname'
  variant="standard" 
  style={{width:"300px"}}
  className='custom-textfield'
  onChange={(e) => handleChange(e)}   />
</div>
<div className='mt-5'>
  <TextField 
  label="lastname" 
  name='lastname'
  variant="standard" 
  style={{width:"300px"}}
  className='custom-textfield'
  onChange={(e) => handleChange(e)}   />
</div>
<div className='mt-5'>
<TextField 
label="email" 
name="username"
type='email'
variant="standard" 
style={{width:"300px"}}
className='custom-textfield'
onChange={(e) => handleChange(e)}  />
</div>

<div className='mt-5 '>
<TextField
  label="password"
  variant="standard" 
  name="password"
  type="password"
  style={{width:"300px"}}
  className='custom-textfield'
  onChange={(e) => handleChange(e)}
/>
</div>
<div className='mt-5 '>
{ isPasswordMatch===false && (<h6 className='text-danger'> password is not the same </h6>)} 
<TextField
  label="retype password"
  variant="standard" 
  name="retypePassword"
  type="password"
  style={{width:"300px"}}
  className='custom-textfield'
  onChange={(e) => retypePassword = e.target.value}
/>
</div>
<Button  variant="contained" className='text-white mt-5' style={{width:"300px"}} type='submit' > Sign in</Button> 
</form>
</div>
</div>   
  );
};

export default Login;
