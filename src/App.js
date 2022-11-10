import React, { useState } from "react";
import "./App.css"
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/sidebar";
import AddUser from "./components/AddUser"
import{BrowserRouter, Routes, Route} from "react-router-dom";
import EditUser from "./components/EditUser";

function App () {
  let data={
     monthluEarning:"40,000",
     anuallyEarning:"215,000",
     tasks:40,
     pendingRequest:18,
  }
  const [ user, setUser] = useState([
    {
      name : "xxx",
      age:22,
      email:"xx@gmail.com",
      pin:6666
    },
    {
      name : "yyy",
      age:21,
      email:"yy@gmail.com",
      pin:667788
    },
    {
      name : "zzz",
      age:20,
      email:"zz@gmail.com",
      pin:768767
    }
  ]);

  return <div id="wrapper">
  <BrowserRouter>

  <Sidebar/>

  <Routes>
    <Route path='/dashboard' element={<Dashboard data={{data,user, setUser}}/>}/>
    <Route path="/add-user" element={ <AddUser data={{user, setUser}}/>}/>
    <Route path="/edit-user/:i" element={ <EditUser user={user} setUser={setUser}/>}/>

  </Routes>

  </BrowserRouter>
  
  </div>
}
export default App;