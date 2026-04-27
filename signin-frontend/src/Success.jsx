function Success() {
    return (
        <div className="h-screen flex items-center justify-center bg-black">
            <div className="bg-white p-10 rounded-2xl shadow-lg text-center">
                <h1 className="text-3xl font-bold text-red-600 mb-4">
                    Login Successful 🎉
                </h1>
                <p className="text-gray-600">
                    Welcome! You have successfully logged in.
                </p>
            </div>
        </div>
    );
}

export default Success;