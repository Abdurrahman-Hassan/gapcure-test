import { CiSearch } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";
import { AiOutlineMessage } from "react-icons/ai";
import logo from "../../public/logo.png";
import { CiMenuBurger } from "react-icons/ci";

const Header = ({ setsidebar, sidebarvalue }) => {
  return (
    <div className="bg-[#191633] pb-3 sm:pb-0 sm:pl-7 flex flex-row flex-wrap sm:justify-start justify-center sm:gap-[30px] gap-[1vw] w-[100vw]">
      <div className="flex flex-row justify-center items-center gap-[2vw] text-[24px] text-white">
        {window.screen.width < 768 ? (
          <button onClick={() => setsidebar(!sidebarvalue)}>
            <CiMenuBurger />
          </button>
        ) : null}

        <img src={logo} alt="logo" className="w-[116px] h-[55px] lg:mr-[100px]" />
      </div>
      <div className="relative">
        <input
          type="search"
          className={`w-[80vw] sm:w-[60vw] h-[43px] mt-[14px] text-white mb-[14px] border border-solid border-white rounded-full pl-12 bg-transparent`}
          placeholder="Search"
        />
        <CiSearch className="absolute top-1/2 left-4 transform -translate-y-3 text-white text-[25px]" />
      </div>
      <div
        className={`text-white text-[35px] sm:ml-0 flex flex-row justify-center gap-[10px] sm:gap-[30px] items-center`}
      >
        <CiBellOn />
        <AiOutlineMessage />
      </div>
    </div>
  );
};

export default Header;
