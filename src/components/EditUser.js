import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useNavigate,useParams } from "react-router-dom";

function EditUser ({ user,setUser }) {
  let {i} = useParams()
  const [name,setName] = useState(user[i].name);
  const [email,setEmail] = useState(user[i].email);
  const [age,setAge] = useState(user[i].age);
  const [pin,setPin] = useState(user[i].pin);
   let navigate = useNavigate()
const handleChange = () => {
  const newData = {name,email,age,pin}
   let data=[...user]
   data.splice(i,1,newData)
   setUser(data)
   navigate("/dashboard")
}
    return <div>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '100ch' },
        }}
      >
        <TextField id="outlined-basic" label="Name" variant="outlined"  
        onChange={(e)=>setName(e.target.value)} value={name}  
           /><br />
         <TextField id="standard-basic" label="Age" variant="outlined"
        onChange={(e)=>setAge(e.target.value)}   value={age}
           /><br />   
        <TextField id="filled-basic" label="Email" variant="outlined"
        onChange={(e)=>setEmail(e.target.value)}  value={email} 
           /><br />
       
        <TextField id="standard-basic" label="Pin" variant="outlined"
        onChange={(e)=>setPin(e.target.value)}   value={pin}
          /><br />

        <Button variant="contained" color="success" onClick={()=>handleChange()}>Add User</Button>
      </Box>
    </div>
}

export default EditUser;