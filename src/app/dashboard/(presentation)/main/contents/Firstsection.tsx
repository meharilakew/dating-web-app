import { IoIosSearch } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { MdCurrencyRupee } from "react-icons/md";
import LineChart from "./Charts";
import GradientLineChart from "./Gradient";
import RecentSale from "./RecentSale";
import DoughnutChart from "./Doughnut";
const Firstsection = () => {
  return (
    <div>
      <div className="flex flex-row justify-around items-center py-2">
        <div className="relative -ml-10 flex text-[#9A4380] justify-evenly border border-[#9A4380] w-80 rounded-3xl">
          <input
            type="search"
            className="relative m-0 flex-auto rounded bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none "
            placeholder="Search"
          />
          <IoIosSearch size={24} className="mt-2 mr-2" />
        </div>
        <div className="relative h-10 border-[#9A4380]">
          <select className="border border-[#9A4380] text-[#9A4380] text-sm rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-44 p-2 ">
            <option selected>Choose a Time</option>
            <option value="US">Daily</option>
            <option value="CA">Weekly</option>
            <option value="FR">Monthly</option>
            <option value="DE">Yearly</option>
          </select>
        </div>
        <div className="flex flex-row justify-around text-[#9A4380] text-xl font-semibold">
          <h2>Welcome Raya!</h2>
          <CgProfile size={28} />
        </div>
      </div>
      <hr className="w-[1060px] h-[2px] mx-5 bg-[#9A4380] my-1" />
      <div className="flex flex-row justify-around">
        <div className="flex flex-col justify-evenly items-center -space-y-2 ">
          <h2 className="text text-[#9A4380] font-semibold">Total Users</h2>
          <h1 className="text-2xl text-[#9A4380]">2500</h1>
          <p className="bg-green-200 rounded-md p-[3px] w-fit text-xs">
            +20.29%
          </p>
        </div>
        <div className="inline-block h-[80px] min-h-[1em] w-[0.5px] self-stretch bg-[#9A4380] "></div>
        <div className="flex flex-col justify-evenly items-center -space-y-2 ">
          <h2 className="text text-[#9A4380] font-semibold">New Users</h2>
          <h1 className="text-2xl text-[#9A4380]">350</h1>
          <p className="bg-red-200 rounded-md p-[3px] w-fit text-xs">-1.29%</p>
        </div>
        <div className="inline-block h-[80px] min-h-[1em] w-[0.5px] self-stretch bg-[#9A4380] "></div>

        <div className="flex flex-col justify-evenly items-center -space-y-2 ">
          <h2 className="text text-[#9A4380] font-semibold">Active Users</h2>
          <h1 className="text-2xl text-[#9A4380]">1900</h1>
          <p className="bg-green-200 rounded-md p-[3px] w-fit text-xs">
            +35.29%
          </p>
        </div>
        <div className="inline-block h-[80px] min-h-[1em] w-[0.5px] self-stretch bg-[#9A4380] "></div>

        <div className="flex flex-col justify-evenly items-center -space-y-2 ">
          <h2 className="text text-[#9A4380] font-semibold">Paid Users</h2>
          <h1 className="text-2xl text-[#9A4380]">807</h1>
          <p className="bg-green-200 rounded-md p-[3px] w-fit text-xs">
            +35.29%
          </p>
        </div>
        <div className="inline-block h-[80px] min-h-[1em] w-[0.5px] self-stretch bg-[#9A4380] "></div>

        <div className="flex flex-col justify-evenly items-center -space-y-2 ">
          <h2 className="text text-[#9A4380] font-semibold">Total Revenue</h2>
          <h1 className="flex flex-row text-2xl text-[#9A4380]">
            <MdCurrencyRupee className="mt-1" />
            7,900
          </h1>
          <p className="bg-green-200 rounded-md p-[3px] w-fit text-xs">
            +40.75%
          </p>
        </div>
      </div>
      <hr className="w-[1060px] mx-5 h-[2px] bg-[#9A4380] my-1" />
      <div>
        <div className="flex flex-row justify-around">
          <LineChart />
          <RecentSale />
        </div>
        <div className="flex flex-row justify-around ">
          <GradientLineChart />
          <DoughnutChart />
        </div>
      </div>
    </div>
  );
};

export default Firstsection;
