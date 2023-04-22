import React, { useState } from "react";

function Login() {

  const [loginValues, setLoginValues] = useState({email: '', password: ''});

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Login')
  };

  return (
    <div className="bg-slate-900 h-screen w-full flex justify-center items-center">
      <form className="flex flex-col items-center" onSubmit={e => handleSubmit(e)}>
        <span className="flex flex-row justify-end pb-4 w-full">
          <label className="text-white font-main pr-2">E-mail</label>
          <div className="border-l-4 w-2 bg-white border-violet-700"></div>
          <input className="rounded-r-md focus:outline-none" 
            type="text" 
            name="email"  
            onChange={e => setLoginValues({...loginValues, email: e.target.value})} 
            value={loginValues.email} />
        </span>
        <span className="flex flex-row justify-end pb-4">
          <label className="text-white font-main pr-2">Password</label>
          <div className="border-l-4 w-2 bg-white border-violet-700"></div>
          <input className="rounded-r-md focus:outline-none" 
            type="password" 
            name="password"  
            onChange={e => setLoginValues({...loginValues, password: e.target.value})} 
            value={loginValues.password} />
        </span>
        <button type="submit" className="w-24 h-6 bg-violet-700 rounded md text-white font-main hover:bg-violet-300">LOGIN</button>
      </form>
    </div>
  )
}

export default Login;