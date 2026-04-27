import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function Signin() {
    const navigate = useNavigate()

    const [user, setUser] = useState("")
    const [pass, setPass] = useState("")
    const [error, setError] = useState("")

    const BACKEND_URL = "http://localhost:5000"

    function check() {
        if (!user || !pass) {
            setError("All fields are required")
            return
        }
        setError("")

        axios.post(`${BACKEND_URL}/login`, {
            username: user,
            password: pass
        })
        .then(function (data) {
            if (data.data === true) {
                navigate("/success")
            } else {
                navigate("/fail")
            }
        })
        .catch(function () {
            setError("Server error. Try again later.")
        })
    }

    return (
        <div className="flex flex-col items-center gap-4 mt-10">
            <h1 className="text-red-600 font-bold text-2xl">Sign In</h1>

            <div className="flex flex-col gap-2">
                <label>Username</label>
                <input
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                    type="text"
                    placeholder="Enter your Username"
                    className="border rounded-md p-2 w-[40vh] focus:outline-none"
                />
            </div>

            <div className="flex flex-col gap-2">
                <label>Password</label>
                <input
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    type="password"
                    placeholder="Enter your password"
                    className="border rounded-md p-2 w-[40vh] focus:outline-none"
                />
            </div>

            {error && <p className="text-red-500">{error}</p>}

            <button
                onClick={check}
                className="border rounded-md p-2 bg-red-600 w-[40vh] text-black font-bold cursor-pointer"
            >
                Sign In
            </button>

            <div className="flex gap-2 items-center">
                <input type="checkbox" />
                <span>Remember me?</span>
            </div>

            <p className="text-sm text-gray-500 cursor-pointer">Need Help?</p>
        </div>
    )
}

export default Signin