import React, { useState } from 'react';
import { loginUser } from '../services/api';
import { Button, TextField } from '@mui/material';
import './login.css'

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [retypepassword, setRetypePassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser({ username, password });
      console.log(response.data);
      // Stocker le token JWT localement
      localStorage.setItem('token', response.data.token);
    } catch (error) {
      console.error(error);
    }
  };

  return (
  <div style={{minHeight:"100vh"}}> 
    <div className=' py-5  shadow'  style={{width:"500px",marginInline:"auto",marginTop:"70px",backgroundColor:"transparent",border:"1px solid #c4c4c4"}}>
    <form onSubmit={handleSubmit}>

<div className=''>
  <TextField 
  label="firstname" 
  variant="standard" 
  style={{width:"300px"}}
  className='custom-textfield'
  onChange={(e) => setFirstname(e.target.value)}  
  value={firstname} />
</div>
<div className='mt-5'>
  <TextField 
  label="lastname" 
  variant="standard" 
  style={{width:"300px"}}
  className='custom-textfield'
  onChange={(e) => setLastname(e.target.value)}  
  value={lastname} />
</div>
<div className='mt-5'>
<TextField 
label="email" 
type='email'
variant="standard" 
style={{width:"300px"}}
className='custom-textfield'
onChange={(e) => setUsername(e.target.value)}  
value={username} />
</div>

<div className='mt-5 '>
<TextField
  label="password"
  variant="standard" 
  type="password"
  style={{width:"300px"}}
  value={password}
    className='custom-textfield'
  onChange={(e) => setPassword(e.target.value)}
/>
</div>
<div className='mt-5 '>
<TextField
  label="retype password"
  variant="standard" 
  type="password"
  style={{width:"300px"}}
  value={retypepassword}
    className='custom-textfield'
  onChange={(e) => setRetypePassword(e.target.value)}
/>
</div>
<Button  variant="contained" className='text-white mt-5' style={{width:"300px"}}  > Sign in</Button> 
</form>
</div>
</div>   
  );
};

export default Login;
