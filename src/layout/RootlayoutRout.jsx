import { Outlet } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { useEffect, useRef, useState } from "react";
// import BredCroump from "../BrendCumb/BrendCumb";
export default function RootlayoutRout() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const menuRef = useRef(null);
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <header className="pt-[24px]">
        <div className="flex items-center justify-between">
          <nav className="hidden sm:block">
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
          </nav>
          <button
            className="flex flex-col justify-center items-center w-10 h-10 mr-[20px]  rounded-md focus:outline-none sm:hidden"
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
            className={`absolute top-[65px] right-0 sm:hidden bg-white shadow-lg rounded-lg w-48 py-4 transition-all duration-300 ${
              isOpen
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95 pointer-events-none"
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
              <button className="bg-[#19A6F5] min-w-[84px] font-inter py-[8px] text-[14px] font-normal text-white mr-[14px]  rounded-[12px] hover:bg-blue-600">
                <CiUser className="inline mr-[8px]" />
                Kirish
              </button>
            </a>
            <a href="/ro'yhat" className=" min-w-[137px]  rounded-[5px]  ">
              <button className="font-normal min-w-[137px] py-[6px] px-[1px] text-[14px]  rounded-[12px] border-[1px]  hover:bg-[#19A6F5] hover:text-white border-[#19A6F5]  rounded-[6px]">
                Ro&#39;yhatdan o&#39;tish
              </button>
            </a>
          </div>
        </div>
      </header>
      <main>
      {/* <BredCroump/> */}
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
}
