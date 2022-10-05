import React from 'react'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AppContext } from '../AppContext'

function PrivateRouter({children}) {
    const {token} = useContext(AppContext);
    console.log(token);
    if(!token.token){
        return <Navigate to="/Login"/>
    }
    return children;
}

export default PrivateRouter
