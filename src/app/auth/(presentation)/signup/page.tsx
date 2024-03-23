import React from 'react';
import {UserIcon,LockClosedIcon,InformationCircleIcon} from "@heroicons/react/24/solid"
import {Email} from '../components/icons'
const SignupPage = () => {
    return (
        
        <div className="relative"  style={{ background: 'linear-gradient(to bottom right, #a834eb, #fc03db, #606091,#a834eb, #9d03fc, #9d03fc)'}}>
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-blue-gray-700 to-white">
            <div className="relative w-96 h-auto bg-gray-50 bg-opacity-30 border border-pink-300 rounded-xl p-8">
                <div className="flex justify-center items-center mb-8">
                    <div className="w-20 h-20 bg-white bg-opacity-50 rounded-full flex justify-center items-center">
                        {/* Add your account icon here */}
                        <UserIcon className="w-12 h-12 bg-transparent text-white" />

                    </div>
                </div>
                <h2 className="text-white text-3xl font-medium mb-8 text-center">Sign Up!</h2>
                <div className="mb-4">
                    <div className="relative">
                        <span className="absolute left-4 top-1/2 transnpm install @heroicons/react@v2form -translate-y-1/2">
                            <Email/>
                        </span>
                        <input
  type="email"
  placeholder="Email ID"
  className="w-full h-12 pl-12 text-white placeholder-white font-normal text-lg border border-white rounded bg-transparent outline-none"
/>

                    </div>
                </div>
                <div className="mb-4">
                    <div className="relative">
                        <span className="absolute left-4 top-1/2 transform -translate-y-1/2">
                            <LockClosedIcon className="w-8 h-8 text-white" />
                        </span>
                        <input
  type="password"
  placeholder="Password"
  className="w-full h-12 pl-12 text-white placeholder-white font-normal text-lg border border-white rounded bg-transparent outline-none"
/>

                    </div>
                </div>
                <div className="flex items-center justify-between mb-6">
                    <label className="flex items-center text-white text-sm">
                        <input type="checkbox" className="mr-2" />
                        Remember me
                    </label>
                    <a href="#" className="text-white text-sm underline">Forgot Password?</a>
                </div>
                <button className="w-full h-12 bg-purple-700 rounded-md text-white font-medium text-lg flex justify-center items-center mb-6">
                    Sign Up
                </button>
                <div className="flex items-center justify-center mb-6">
                    <hr className="w-1/3 border-t border-white" />
                    <span className="mx-4 text-white text-sm">OR</span>
                    <hr className="w-1/3 border-t border-white" />
                </div>
                
                <button className="w-full h-12 bg-purple-700 rounded-md text-white font-medium text-lg flex justify-center items-center mb-6">
                Sign In Using Google
                </button>
                <div className="flex items-center justify-center">
                    <span className="text-white text-sm">Don’t have an account? </span>
                    <a href="#" className="text-purple-700 text-sm underline">Sign Up</a>
                </div>
            </div>
        </div>
    </div>
    );
};



export default SignupPage;




