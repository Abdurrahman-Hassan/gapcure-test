import { CgProfile } from "react-icons/cg";
import { MdOutlineDashboard } from "react-icons/md";
import { CiBellOn } from "react-icons/ci";
import { FaCirclePlus } from "react-icons/fa6";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { FaFileLines } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";

const Sidebar = ({ sidebarvalue }) => {
  if (window.screen.width >= 768) {
    return (
      <div className="bg-[#191633] w-[20vw] h-[100vh]">
        <div>
          <h3 className=" ml-2 text-[#8C8C8C] rounded-xl w-[17vw] h-[52px] pl-[10px] gap-[10px] flex flex-row justify-start items-center">
            <CgProfile />
            Profile
          </h3>
          <h3 className="bg-[#3A49D6] ml-2 text-white rounded-xl md:pr-1 md:w-[16vw] lg:w-[16vw] h-[52px] pl-[10px] gap-[10px] flex flex-row justify-start items-center">
            <MdOutlineDashboard />
            Dashboard
          </h3>
          <h3 className=" ml-2 text-[#8C8C8C] rounded-xl w-[17vw] h-[52px] pl-[10px] gap-[10px] flex flex-row justify-start items-center">
            <CiBellOn />
            Reminder
          </h3>
          <h3 className=" ml-2 text-[#8C8C8C] rounded-xl w-[17vw] h-[52px] pl-[10px] gap-[10px] flex flex-row justify-start items-center">
            <HiOutlineBellAlert />
            Alerts
          </h3>
          <h3 className=" ml-2 text-[#8C8C8C] rounded-xl w-[17vw] h-[52px] pl-[10px] gap-[10px] flex flex-row justify-start items-center">
            <FaCirclePlus />
            Patient
          </h3>
          <h3 className=" ml-2 text-[#8C8C8C] rounded-xl w-[17vw] h-[52px] pl-[10px] gap-[10px] flex flex-row justify-start items-center">
            <FaFileLines />
            To do/Wait List
          </h3>
          <h3 className=" ml-2 text-[#8C8C8C] rounded-xl w-[17vw] h-[52px] pl-[10px] gap-[10px] flex flex-row justify-start items-center">
            <FaCalendarAlt />
            My Calendar
          </h3>
        </div>
      </div>
    );
  }
  if (sidebarvalue) {
    return (
      <div className="bg-[#191633] w-[100vw] h-[100vh] absolute z-10">
        <div className="flex flex-col justify-center items-center">
          <h3 className=" ml-2 text-[#8C8C8C] rounded-xl w-[50vw] h-[52px] pl-[10px] gap-[10px] flex flex-row justify-start items-center">
            <CgProfile />
            Profile
          </h3>
          <h3 className="bg-[#3A49D6] ml-2 text-white rounded-xl w-[50vw] h-[52px] pl-[10px] gap-[10px] flex flex-row justify-start items-center">
            <MdOutlineDashboard />
            Dashboard
          </h3>
          <h3 className=" ml-2 text-[#8C8C8C] rounded-xl w-[50vw] h-[52px] pl-[10px] gap-[10px] flex flex-row justify-start items-center">
            <CiBellOn />
            Reminder
          </h3>
          <h3 className=" ml-2 text-[#8C8C8C] rounded-xl w-[50vw] h-[52px] pl-[10px] gap-[10px] flex flex-row justify-start items-center">
            <HiOutlineBellAlert />
            Alerts
          </h3>
          <h3 className=" ml-2 text-[#8C8C8C] rounded-xl w-[50vw] h-[52px] pl-[10px] gap-[10px] flex flex-row justify-start items-center">
            <FaCirclePlus />
            Patient
          </h3>
          <h3 className=" ml-2 text-[#8C8C8C] rounded-xl w-[50vw] h-[52px] pl-[10px] gap-[10px] flex flex-row justify-start items-center">
            <FaFileLines />
            To do/Wait List
          </h3>
          <h3 className=" ml-2 text-[#8C8C8C] rounded-xl w-[50vw] h-[52px] pl-[10px] gap-[10px] flex flex-row justify-start items-center">
            <FaCalendarAlt />
            My Calendar
          </h3>
        </div>
      </div>
    );
  }
};

export default Sidebar;
