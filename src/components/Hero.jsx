import { FaCalendarAlt } from "react-icons/fa";
import { CiFlag1 } from "react-icons/ci";

const Hero = () => {
  return (
    <div
      className={`
      h-[100%]
    sm:h-[100vh]
    w-[${
      screen.width >= 768 ? "100" : "100"
    }vw]  flex flex-col sm:flex-row justify-center items-center md:justify-start md:items-start
     gap-[14px] text-white bg-gradient-to-br from-[#08024A] via-black to-black
  `}
    >
      <div>
        <div className="bg-[#191633] pl-[32px] pt-5 w-[90vw] sm:w-[29vw] h-[138.7px] rounded-xl ml-2 sm:ml-[18px] mt-[16px]">
          <h1 className="text-[24px]">Greetings !</h1>
          <h2 className="text-[24px] font-bold">John Doe</h2>
          <h5 className="text-[14px]">
            Welcome back to <span className="text-[#F02D4F]">GapCure</span>
          </h5>
        </div>
        <div className="flex flex-row justify-between items-center px-10 bg-[#191633] w-[90vw] sm:w-[29vw] h-[63px] rounded-t-xl ml-2 sm:ml-[18px] mt-[16px]">
          <h1 className="font-bold text-[20px]">Alert</h1>
          <h5 className="text-[12px]">View all</h5>
        </div>
        <div className="flex flex-row justify-between items-center px-10 bg-[#191633] w-[90vw] sm:w-[29vw] h-[63px] rounded-t-xl ml-2 sm:ml-[18px] mt-[16px]">
          <h1 className="font-bold text-[20px]">My Patients</h1>
          <h5 className="text-[12px]">View all</h5>
        </div>
        <div className="flex flex-row justify-between items-center px-10 bg-[#191633] w-[90vw] sm:w-[29vw] h-[63px] rounded-t-xl ml-2 sm:ml-[18px] mt-[16px]">
          <h1 className="font-bold text-[20px]">Reminder</h1>
          <h5 className="text-[12px]">View all</h5>
        </div>
        <div className="flex flex-row justify-between items-center px-10 bg-[#191633] w-[90vw] sm:w-[29vw] h-[63px] rounded-t-xl ml-2 sm:ml-[18px] mt-[16px]">
          <h1 className="font-bold text-[20px]">Waitlist</h1>
          <h5 className="text-[12px]">View all</h5>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-[90vw] sm:w-[45vw]">
        <div className="flex flex-col justify-center sm:justify-start items-center bg-[#191633] mt-[16px] rounded-xl h-[400px] w-[90vw] sm:w-[45vw]">
          <textarea
            className="bg-[#191633] mt-1 border-none text-[32px] p-10 w-[95%] sm:w-[42vw] overflow-hidden"
            name=""
            id=""
            rows="10"
            placeholder="Task Name"
          ></textarea>
          <div className="flex flex-row justify-center flex-wrap gap-[26px] border-b border-b-gray-400 pb-[33px] text-white mt-5">
            <div className="relative">
              <input
                type="text"
                className="text-end pr-1 placeholder-white w-[75px] sm:w-[132px] text-[11px] h-[48px] rounded-xl bg-[#191633] border border-solid border-white"
                placeholder="Due Date"
              />
              <FaCalendarAlt className="text-white absolute top-5 sm:top-4 left-1 text-[10px] sm:text-[20px]" />
            </div>
            <button className="flex flex-row justify-center items-center gap-3 text-center w-[75px] sm:w-[132px] text-[11px] h-[48px] rounded-xl bg-[#191633] border border-solid border-white">
              <CiFlag1 />
              Priority
            </button>
            <button className="flex flex-row justify-center items-center gap-3 text-center w-[75px] sm:w-[132px] text-[11px] h-[48px] rounded-xl bg-[#191633] border border-solid border-white">
              Patient
            </button>
            <button className="flex flex-row justify-center items-center gap-3 text-center w-[75px] sm:w-[132px] text-[11px] h-[48px] rounded-xl bg-[#191633] border border-solid border-white">
              Myself
            </button>
          </div>
          <div className="flex flex-row justify-end items-center pr-6 w-[100%] h-[100%]">
            <button className="rounded-full bg-[#3A49D6] w-[142px] h-[44px]">
              Add
            </button>
          </div>
        </div>
        <div className="mb-10 flex flex-row justify-between items-center px-10 bg-[#191633] w-[100%] h-[61px] rounded-xl mt-[16px]">
          <h1 className="font-bold text-[20px]">Today To-do List</h1>
          <h5 className="text-[12px]">View all</h5>
        </div>
      </div>
    </div>
  );
};

export default Hero;
