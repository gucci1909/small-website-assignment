import React from 'react'
import {useContext,useState} from "react"
import { Navigate } from 'react-router-dom';
import {AppContext} from "../AppContext"

function Login() {
    const {toggleAuth,token} = useContext(AppContext);
  const InitialData = {
    email : "",
    password : ""
  }
  const [data , setData] = useState(InitialData);
  const {email,password} = data;
  const handleChange = (e)=>{
      const { value, name } = e.target;
      setData({ ...data, [name]: value });
      
  };
  const handleSubmit = ()=>{
    toggleAuth(data.email,data.password);
  }
  if(token.token){
    return <Navigate to="/Products"/>
  }

  return (
    <div>
         <h1>Login with correct credentials</h1>
        <h3>(email : "eve.holt@reqres.in" , password : "cityslicka" )</h3>
        <label>
          Email :
          <input
            name="email"
            type="text"
            value={email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Password :
          <input
            name="password"
            type="text"
            value={password}
            onChange={handleChange}
          />
        </label>
        <button onClick={handleSubmit}>Login</button>

    </div>
  )
}

export default Login
