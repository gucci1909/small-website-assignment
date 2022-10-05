import React from 'react'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AppContext } from '../AppContext'

function Home() {
  const {isAuth} = useContext(AppContext);
  if(isAuth){
    return <Navigate to="/Products"/>
  }
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}

export default Home
