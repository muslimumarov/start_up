import { Outlet } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { useState } from "react";
export default function RootlayoutRout() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <>
      <header className="pt-[24px]">
        <div className="grid grid-cols-3 ">
        <button
          className="flex flex-col justify-center items-center w-10 h-10  rounded-md focus:outline-none md:hidden"
          onClick={toggleMenu}
        >
          <span
            className={`block w-6 h-1 bg-black rounded-sm transition-transform duration-300 ${
              isOpen ? "rotate-45 translate-y-3.5" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-1 bg-black rounded-sm mt-1.5 transition-opacity duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-1 bg-black rounded-sm mt-1.5 transition-transform duration-300 ${
              isOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>
        <div
        className={`absolute top-12 right-0 bg-white shadow-lg rounded-lg w-48 py-4 transition-all duration-300 ${
          isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col space-y-4 px-4">
          <li>
            <a href="/" className="text-gray-700 hover:text-blue-500">
              Asosiy
            </a>
          </li>
          <li>
            <a href="/course" className="text-gray-700 hover:text-blue-500">
              Kurslar
            </a>
          </li>
          <li>
            <a href="/help" className="text-gray-700 hover:text-blue-500">
              Yordam
            </a>
          </li>

        </ul>
      </div>
      <div className="flex">
            <a href="/kirish" className="bg-transparent">
              <button className="bg-[#19A6F5] min-w-[84px] font-inter py-[8px] text-[14px] font-normal text-white mr-[24px]  rounded-[12px] hover:bg-blue-600">
                <CiUser className="inline mr-[8px]" />
                Kirish
              </button>
            </a>
            <a
              href="/ro'yhat"
              className=" min-w-[137px] py-[px]  rounded-[5px]  "
            >
              <button className="font-normal min-w-[137px] py-[6px] px-[1px] text-[14px]  rounded-[12px] border-[1px]  hover:bg-[#19A6F5] hover:text-white border-[#19A6F5]  rounded-[6px]">
                Ro&#39;yhatdan o&#39;tish
              </button>
            </a>
          </div>
    </div>
        {/* <nav className="grid">
          <div>
            <a
              className={`text-[23px] font-normal mr-[52px] font-helvetica`}
              href="/"
            >
              Asosiy
            </a>
            <a className={`text-[23px] font-normal mr-[52px]`} href="/course">
              Kurslar
            </a>
            <a className={`text-[23px] font-normal`} href="/help">
              Yordam
            </a>
          </div>
          <div>
            <a href="/kirish" className="bg-transparent">
              <button className="bg-[#19A6F5] min-w-[153px] font-inter py-[18px] text-[20px] font-normal text-white mr-[24px]  rounded-[12px] hover:bg-blue-600">
                <CiUser className="inline mr-[8px]" />
                Kirish
              </button>
            </a>
            <a
              href="/ro'yhat"
              className="border min-w-[225px] border-[#19A6F5] rounded-[5px] py-[24.5px] "
            >
              <button className="font-normal min-w-[225px] py-[18px] px-[32px] text-[20px]  rounded-[12px] border-[2px] border-transparent hover:border-[#19A6F5]  hover:border-[2px] rounded-[5px]">
                Ro&#39;yhatdan o&#39;tish
              </button>
            </a>
          </div>
        </nav> */}
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
}
