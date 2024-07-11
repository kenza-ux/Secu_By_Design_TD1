import React, { useEffect, useState } from 'react'
import {adminPage} from '../services/api'
const AdminPanel = () => {
  const [message,setMessage] = useState('')
  const [color,setColor] = useState('')
    useEffect(()=>{
      setMessage('')
       let response
       const checkAdmin =async()=>{
        try{
        response= await adminPage()
        setMessage(response.data.message)
        console.log(response)
       }
       catch(e){
        if(e.response.status===403){
          setColor('text-danger')
          setMessage(e.response.data.message)
        }
        console.log(e)
       }
       
 }
 checkAdmin()
 },[])
  return (
    <div className='container mt-5'>
      <h2 className='text-info text-center'> Admin panel</h2>
        { message.length>0 && (<>

          <h4 className={`mt-5 ${color}`}>{message} </h4>
          </>)
        }
    </div>
  )
}

export default AdminPanel