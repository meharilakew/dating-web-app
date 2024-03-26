"use client"
import  { useState } from "react";
import Vector from "../../../../../public/Vector.svg";
import Logo from "../../../../../public/companyLogo.svg";
import Image from "next/image";
import { MdDashboard } from "react-icons/md";
import { HiMiniUsers } from "react-icons/hi2";
import { HiOutlineCurrencyRupee } from "react-icons/hi2";
import { IoNewspaperOutline } from "react-icons/io5";
import { MdAnalytics } from "react-icons/md";
import { CiLogin } from "react-icons/ci";
import { IoMdSettings } from "react-icons/io";
import { IoMdHelpCircle } from "react-icons/io";
import { RiFeedbackFill } from "react-icons/ri";
import { IoLogOutOutline } from "react-icons/io5";

interface MenuItemProps {
  icon: JSX.Element;
  label: string;
  isPreviousClicked: boolean;
  handleClick: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({
  icon,
  label,
  isPreviousClicked,
  handleClick,
}) => {
  return (
    <li className="relative w-full my-6">
      {isPreviousClicked && (
        <div className="flex justify-end -mt-[29px] -mb-[33px]">
          <Image priority src={Vector} height={32} width={32} alt="vector" />
        </div>
      )}
      <button
        className={`${
          isPreviousClicked
            ? "bg-white text-[#9A4380]"
            : "bg-transparent text-white"
        } hover:bg-white hover:text-[#9A4380] w-full rounded-3xl py-3 flex justify-start `}
        onClick={handleClick}
      >
        {icon}
        {label}
      </button>
      <div className="flex justify-end -mt-[33px] -mb-[85px]">
        {isPreviousClicked && (
          <Image priority src={Vector} height={32} width={32} alt="vector" />
        )}
      </div>
    </li>
  );
};

const Sidebar: React.FC = () => {
  const [previousClicked, setPreviousClicked] = useState<number | null>(null); // Track the index of the previously clicked button

  const handlePreviousClicked = (index: number) => {
    setPreviousClicked(index);
  };

  return (
    <div
      id="logo-sidebar"
      className="sticky bg-transparent top-0 left-0 z-40 w-64  transition-transform"
      aria-label="Sidebar"
    >
      <nav className="flex flex-col bg-transparent">
        {/* Sidebar Header */}
        <div className="flex items-center justify-between h-16 px-4 mt-14 -mb-16 pl-20">
          <Image priority src={Logo} height={500} width={100} alt="vector" />
        </div>

        {/* Sidebar Content */}
        <div className="flex-1 overflow-y-auto mt-16 pl-4 pb-14 w-64 h-screen">
          <ul className="flex flex-col justify-evenly">
            <MenuItem
              icon={<MdDashboard size={24} className="ml-3 mr-10" />}
              label="Dashboard"
              isPreviousClicked={previousClicked === 0}
              handleClick={() => handlePreviousClicked(0)}
            />
            <MenuItem
              icon={<HiMiniUsers className="ml-3 mr-10" size={24} />}
              label="Users"
              isPreviousClicked={previousClicked === 1}
              handleClick={() => handlePreviousClicked(1)}
            />
            <MenuItem
              icon={<HiOutlineCurrencyRupee className="ml-3 mr-10" size={24} />}
              label="Subscriptions"
              isPreviousClicked={previousClicked === 2}
              handleClick={() => handlePreviousClicked(2)}
            />
            <MenuItem
              icon={<IoNewspaperOutline className="ml-3 mr-10" size={24} />}
              label="Custom Plans"
              isPreviousClicked={previousClicked === 3}
              handleClick={() => handlePreviousClicked(3)}
            />
            <MenuItem
              icon={<MdAnalytics className="ml-3 mr-10" size={24} />}
              label="Analytics"
              isPreviousClicked={previousClicked === 4}
              handleClick={() => handlePreviousClicked(4)}
            />
            <MenuItem
              icon={<CiLogin className="ml-3 mr-10" size={24} />}
              label="Registration Flow"
              isPreviousClicked={previousClicked === 5}
              handleClick={() => handlePreviousClicked(5)}
            />
            <MenuItem
              icon={<IoMdSettings className="ml-3 mr-10" size={24} />}
              label="Settings"
              isPreviousClicked={previousClicked === 6}
              handleClick={() => handlePreviousClicked(6)}
            />
            <MenuItem
              icon={<IoMdHelpCircle className="ml-3 mr-10" size={24} />}
              label="Help"
              isPreviousClicked={previousClicked === 7}
              handleClick={() => handlePreviousClicked(7)}
            />
            <MenuItem
              icon={<RiFeedbackFill className="ml-3 mr-10" size={24} />}
              label="Feedback"
              isPreviousClicked={previousClicked === 8}
              handleClick={() => handlePreviousClicked(8)}
            />
          </ul>
        </div>
        <div className="mt-3 ml-10 bg-white bg-opacity-10 text-[#73305F] border-2 border-[#9A4380] p-3 rounded-xl w-32">
          <button className="flex justify-evenly">
            <IoLogOutOutline className=" mr-3" size={24} />
            Logout
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
