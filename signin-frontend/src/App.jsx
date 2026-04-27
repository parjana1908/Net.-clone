import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Signin from "./Signin"
import './index.css'

function App() {
  const navigate = useNavigate()

  return (
    <>
      <h1 className='text-red-600 font-extrabold text-5xl m-4 shadow-md'>
        NETFLIX
      </h1>

      <div className='flex flex-col gap-3 p-5 mt-12 items-center'>

        <Signin />

        <p className="text-sm text-gray-500 mt-3">
          New to Netflix?
          <span
            onClick={() => navigate("/signup")}
            className="text-red-600 cursor-pointer ml-1 font-semibold"
          >
            Sign up now
          </span>
        </p>

      </div>

      <p className='text-center text-gray-400 mt-6'>Demo Credentials:</p>
      <p className='text-center text-gray-400'>Username: demo</p>
      <p className='text-center text-gray-400'>Password: 1234</p>
    </>
  )
}

export default App