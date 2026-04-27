import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function Signup() {
  const navigate = useNavigate()
  const [user, setUser] = useState("")
  const [pass, setPass] = useState("")
  const [confirmPass, setConfirmPass] = useState("")
  const [error, setError] = useState("")

//   const BACKEND_URL = "http://localhost:5000"
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000"

  function register(e) {
    e.preventDefault()
    if (pass !== confirmPass) {
      setError("Passwords do not match")
      return
    }
    setError("")
    axios.post(`${BACKEND_URL}/signup`, { username: user, password: pass })
      .then((res) => {
        if (res.data === true) navigate("/")
        else setError("Signup failed. Username may already exist.")
      })
      .catch(() => setError("Server error"))
  }

  return (
    <form onSubmit={register} className="flex flex-col items-center mt-10">
      <h1 className="text-red-600 font-bold text-2xl mb-5">Sign Up</h1>

      <input required type="text" placeholder="Username"
        onChange={(e) => setUser(e.target.value)}
        className="border p-2 mb-3 w-64 rounded-md" />

      <input required type="password" placeholder="Password"
        onChange={(e) => setPass(e.target.value)}
        className="border p-2 mb-3 w-64 rounded-md" />

      <input required type="password" placeholder="Confirm Password"
        onChange={(e) => setConfirmPass(e.target.value)}
        className="border p-2 mb-3 w-64 rounded-md" />

      {error && <p className="text-red-500 mb-2">{error}</p>}

      <button className="border rounded-md p-2 bg-red-600 w-[40vh] text-black font-bold cursor-pointer">
        Sign Up
      </button>

      <p className="text-sm text-gray-500 mt-3">
        Already have an account?{" "}
        <span onClick={() => navigate("/")} className="text-red-600 cursor-pointer font-semibold">
          Sign in
        </span>
      </p>
    </form>
  )
}

export default Signup