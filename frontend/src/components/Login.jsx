// ___________________________________________________________________________ //
// *----------------------------- Configuration -----------------------------* //

import React, { useState } from "react";
import axios from 'axios';

// _______________________________________________________________________ //
// *----------------------------- Component -----------------------------* //

function Login(props) {

  const { setCurrentUser } = props;

  // ____________________________________________________________________ //
  // *----------------------------- States -----------------------------* //

  const [loginValues, setLoginValues] = useState({email: '', password: ''});
  const [errorMessage, setErrorMessage] = useState('');

  function handleSubmit(e) {

    const email = loginValues.email;
    const password = loginValues.password;

    e.preventDefault();
    
    // User input error handling
    if (!email) {
      setErrorMessage(`Email can't be blank!`)
      return
    } else if (!password) {
      setErrorMessage(`Password can't be blank!`)
      return
    } else {
      setErrorMessage('')
    }
    
    axios.post('http://localhost:3030/api/login', {email, password}, {withCredentials: true})
      .then(res => {
        setCurrentUser(res.data); // Sets currentUser to their E-mail.
      })
      .catch(err => {
        setErrorMessage(err.response.data)
      })
  };

  return (
    <div className="bg-slate-900 h-screen w-full flex flex-col justify-center items-center" data-testid="login-component">
      {errorMessage && <p className="text-red-600 font-main">{errorMessage}</p>}
      <form className="flex flex-col items-center" onSubmit={e => handleSubmit(e)}>
        <span className="flex flex-row justify-end pb-4 w-full">
          <label className="text-white font-main pr-2">E-mail</label>
          <div className="border-l-4 w-2 bg-white border-violet-700"></div>
          <input className="rounded-r-md focus:outline-none" 
            type="text" 
            name="email"  
            onChange={e => setLoginValues(prev => ({...prev, email: e.target.value}))} 
            value={loginValues.email} />
        </span>
        <span className="flex flex-row justify-end pb-4">
          <label className="text-white font-main pr-2">Password</label>
          <div className="border-l-4 w-2 bg-white border-violet-700"></div>
          <input className="rounded-r-md focus:outline-none" 
            type="password" 
            name="password"  
            onChange={e => setLoginValues(prev => ({...prev, password: e.target.value}))} 
            value={loginValues.password} />
        </span>
        <button type="submit" className="w-24 h-6 bg-violet-700 rounded md text-white font-main hover:bg-violet-300 focus:outline-none focus:bg-violet-300">LOGIN</button>
      </form>
    </div>
  )
}

export default Login;