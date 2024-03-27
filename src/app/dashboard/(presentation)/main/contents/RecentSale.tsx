import { CgProfile } from "react-icons/cg";
import { MdCurrencyRupee } from "react-icons/md";
const RecentSale = () => {
  return (
    <div className="text-[#9A4380]">
      <div className="w-full flex flex-row justify-between mb-1 items-center">
        <h1 className="text-xl font-semibold">Recent Sales</h1>
        <button className="w-fit bg-[#9A4380] bg-opacity-[0.3] px-0.5 py-[0.5px] text-sm rounded-xl">
          View All
        </button>
      </div>
      <div className=" w-96 rounded-2xl flex flex-col justify-start items-start border border-[#9A4380] space-y-3">
        <div className="flex justify-between mt-4">
          <CgProfile size={28} className="mx-3" />
          <div className="flex flex-col w-52 mx-5">
            <h2 className="font-semibold">Prakash Negi</h2>
            <p>New Delhi</p>
          </div>

          <p className="flex flex-row font-semibold text-lg">
            +<MdCurrencyRupee className="mt-1" />
            90
          </p>
        </div>
        <div className="flex justify-between">
          <CgProfile size={28} className="mx-3" />
          <div className="flex flex-col w-52 mx-5">
            <h2 className="font-semibold">Kritika Yadav</h2>
            <p>Mumbai</p>
          </div>

          <p className="flex flex-row font-semibold text-lg">
            +<MdCurrencyRupee className="mt-1" />
            45
          </p>
        </div>
        <div className="flex justify-between">
          <CgProfile size={28} className="mx-3" />
          <div className="flex flex-col w-52 mx-5">
            <h2 className="font-semibold">Diksha Sharma</h2>
            <p>Surat</p>
          </div>

          <p className="flex flex-row font-semibold text-lg">
            +<MdCurrencyRupee className="mt-1" />
            499
          </p>
        </div>
        <div className="flex justify-between">
          <CgProfile size={28} className="mx-3" />
          <div className="flex flex-col w-52 mx-5">
            <h2 className="font-semibold">Shristy Singh</h2>
            <p>Patna</p>
          </div>

          <p className="flex flex-row font-semibold text-lg">
            +<MdCurrencyRupee className="mt-1" />
            199
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecentSale;
