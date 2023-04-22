import React from "react";

function Login() {
  return (
    <div className="bg-slate-900 h-screen w-full flex justify-center items-center">
      <form className="flex flex-col items-center">
        <span className="flex flex-row justify-end pb-4 w-full">
          <label for="email" className="text-white font-main pr-2">E-mail</label>
          <div className="border-l-4 w-2 bg-white border-violet-700"></div>
          <input type="text" name="email" className="rounded-r-md focus:outline-none"></input>
        </span>
        <span className="flex flex-row justify-end pb-4">
          <label for="password" className="text-white font-main pr-2">Password</label>
          <div className="border-l-4 w-2 bg-white border-violet-700"></div>
          <input type="password" name="password" className="rounded-r-md focus:outline-none"></input>
        </span>
        <button type="submit" className="w-24 h-6 bg-violet-700 rounded md text-white font-main hover:bg-violet-300">LOGIN</button>
      </form>
    </div>
  )
}

export default Login;