import { NavLink, Outlet } from "react-router-dom";
import { CiUser } from "react-icons/ci";
export default function RootlayoutRout() {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">home</NavLink>
          <NavLink to="/course">Kurslar</NavLink>
          <NavLink className={`mr-[323px]`} to="/help">
            Yordam
          </NavLink>
          <a href="/kirish" className="bg-transparent">
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              Kirish
            </button>
          </a>
          <a href="/ro'yhat" className="bg-transparent border border-[#19A6F5] border hover:border-[2px] rounded-[5px]">
            <CiUser />
            Ro&#39;yhatdan o&#39;tish
          </a>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
}
