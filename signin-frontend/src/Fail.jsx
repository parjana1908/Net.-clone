import { useNavigate } from "react-router-dom";

function Fail() {
    const navigate = useNavigate();

    return (
        <div className="h-screen flex items-center justify-center bg-black">
            <div className="bg-white p-10 rounded-2xl shadow-lg text-center">
                <h1 className="text-3xl font-bold text-red-600 mb-4">
                    Login Failed ❌
                </h1>
                <p className="text-gray-600 mb-4">
                    Invalid username or password.
                </p>

                <button
                    onClick={() => navigate("/")}
                    className="bg-red-600 text-white px-4 py-2 rounded-md cursor-pointer"
                >
                    Try Again
                </button>
            </div>
        </div>
    );
}

export default Fail