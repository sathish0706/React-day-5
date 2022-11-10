import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

function AddUser (props) {
  console.log(props);
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [age,setAge] = useState("");
  const [pin,setPin] = useState("");
   let navigate = useNavigate()

const handleChange = () => {
  const newData = {name,email,age,pin}
   props.data.setUser([...props.data.user,newData])
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
        onChange={(e)=>setName(e.target.value)}   
           /><br />
         <TextField id="standard-basic" label="Age" variant="outlined"
        onChange={(e)=>setAge(e.target.value)}   
           /><br />   
        <TextField id="filled-basic" label="Email" variant="outlined"
        onChange={(e)=>setEmail(e.target.value)}   
           /><br />
       
        <TextField id="standard-basic" label="Pin" variant="outlined"
        onChange={(e)=>setPin(e.target.value)}   
          /><br />

        <Button variant="contained" onClick={()=>handleChange()}>Submit</Button>
      </Box>
    </div>
}

export default AddUser;