import React from 'react';

const SignupPage = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
            <div className="relative w-96 h-96 bg-opacity-10 border border-pink-300 backdrop-blur-md rounded-2xl">
                <div className="absolute w-36 h-36 left-1/2 top-8 transform -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-full">
                    {/* Add your profile icon or image here */}
                </div>
                <h2 className="absolute w-full text-white font-medium text-3xl top-20 text-center">Welcome!</h2>
                <div className="absolute w-96 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-12">
                    <input type="email" placeholder="Email ID" className="w-full h-12 pl-12 text-white font-normal text-lg border border-white rounded bg-transparent outline-none" />
                </div>
                <div className="absolute w-96 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-12">
                    <input type="password" placeholder="Password" className="w-full h-12 pl-12 text-white font-normal text-lg border border-white rounded bg-transparent outline-none" />
                </div>
                <button className="absolute w-96 h-12 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-12 bg-gradient-to-r from-purple-700 to-purple-500 rounded-full text-white font-medium text-lg flex justify-center items-center">
                    Sign Up
                </button>
                <a href="#" className="absolute w-full text-white font-normal text-sm text-center bottom-4 underline">
                    Forgot Password?
                </a>
                <div className="absolute w-full flex justify-center items-center bottom-8">
                    <hr className="w-1/3 border border-white" />
                    <span className="text-white font-normal text-sm mx-4">OR</span>
                    <hr className="w-1/3 border border-white" />
                </div>
                <a href="#" className="absolute w-full text-white font-normal text-sm text-center bottom-12 underline">
                    Don’t have an account? Sign Up
                </a>
            </div>
        </div>
    );
};

export default SignupPage;

// style={{ background: 'linear-gradient(to bottom right, #a834eb, #606091, #606091,#a834eb, #9d03fc, #a834eb, #9d03fc)'