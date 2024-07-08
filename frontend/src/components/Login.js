import React, { useState } from 'react';
import { loginUser } from '../services/api';
import { Button, TextField } from '@mui/material';
import './login.css'
import { useNavigate } from 'react-router-dom';
import { useRefresh } from '../global/refreshContext';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [errorMessage,setErrorMessage] = useState(false)
  const navigate = useNavigate()
  const { handleRefresh } = useRefresh();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await loginUser({ username, password });
      console.log(response.data);
      localStorage.setItem('movie-rental-cred', JSON.stringify({token:response.data.token,name:response.data.name}));
      localStorage.setItem('movie-rental-user-id', response.data.id);
      setErrorMessage(false)
      handleRefresh()
      navigate('/')
    } catch (error) {
      setErrorMessage(true)
      console.error(error);
    }
  };

  return (
  <div style={{minHeight:"100vh"}}> 
  <div className=' py-5  shadow' style={{width:"500px",height:"300px",marginInline:"auto",marginTop:"150px",backgroundColor:"transparent",border:"1px solid #c4c4c4"}}>
      <form onSubmit={handleSubmit}>
{errorMessage===true&&(<h6 className='text-danger'> incorect username and/or password</h6>)}
<div className='mx-5 px-5'>
<TextField 
  label="Username" 
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
<Button  variant="contained" className='text-white mt-5' style={{width:"300px"}} onClick={handleSubmit} > Sign in</Button> 
</form>
  </div>
  </div> 
  );
};

export default Login;
