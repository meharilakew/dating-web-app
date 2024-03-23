import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaGoogle } from "react-icons/fa";
import { AvatarIcon } from "@nextui-org/react";
import Link from "next/link";


const InputField: React.FC<{
  type: string;
  placeholder: string;
  icon: JSX.Element;
}> = ({ type, placeholder, icon }) => {
  return (
    <div className="mb-4">
      <div className="relative">
        <input
          type={type}
          placeholder={placeholder}
          className="bg-transparent hover:bg-opacity-20 transition duration-500 border-b-2 p-3 pl-10 w-full text-white placeholder-white"
        />
        {icon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
};

const RememberMeAndForgotPassword: React.FC = () => {
  return (
    <div className="flex items-center justify-between mt-4">
      <label htmlFor="remember" className="flex items-center text-white">
        <input type="checkbox" id="remember" className="mr-2" />
        Remember me
      </label>
      <a href="#" className="text-white">
        Forgot Password?
      </a>
    </div>
  );
};

const OrDivider: React.FC = () => {
  return (
    <div className="relative">
      <div className="flex items-center">
        <div className="flex-grow bg-white h-0.5"></div>
        <div className="mx-4 text-white">OR</div>
        <div className="flex-grow bg-white h-0.5"></div>
      </div>
    </div>
  );
};

const LoginPage: React.FC = () => {
  return (
    <div
      className="bg-main bg-cover"
      style={{ textShadow: "0px 1px 4px #77A" }}
    >
      <div className="w-96 font-Poppins shadow-2xl shadow-slate-900 mx-auto text-white bg-clip-padding backdrop-filter bg-white bg-opacity-10 backdrop-blur-md mt-20 py-10 px-8 rounded-xl">
        <div className="flex flex-col items-center justify-evenly">
          <div className="rounded-full w-32 h-32 flex justify-center items-center border border-cyan-50">
            <AvatarIcon />
          </div>
          <h2>Welcome !</h2>
        </div>

        <form className="mt-6">
          <InputField type="email" placeholder="Email ID" icon={<MdEmail />} />
          <InputField
            type="password"
            placeholder="Password"
            icon={<RiLockPasswordFill />}
          />
          <RememberMeAndForgotPassword />
          <button className="mt-1 bg-gradient-to-r from-[#3F034C] to-[#9A4380] hover:bg-opacity-40 transition duration-500 rounded-3xl p-3 w-full font-semibold">
            Sign In
          </button>
          <OrDivider />
          <button className="mt-1 bg-[#9A4380] hover:bg-opacity-40 transition duration-500 rounded-3xl p-3 w-full font-semibold flex justify-center items-center">
            <FaGoogle className="mr-3" />
            Sign In Using Google
          </button>
        </form>
        <div className="text-center pt-4 text-sm">
          Forgot a password?
          <Link href="/dashboard" className="text-[#43064F] underline">
          
          
            Signup
          
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;