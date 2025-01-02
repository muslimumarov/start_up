import { NavLink, Outlet } from "react-router-dom";

export default function RootlayoutRout() {
  return (
    <>
      <header>
        <nav>
          <NavLink className={`bg-transparent`} to="/">home</NavLink>
          <NavLink className={`bg-transparent`} to="/course">Kurslar</NavLink>
          <NavLink className={`bg-transparent mr-[323px]`} to="/help">Yordam</NavLink>
          <NavLink className={`bg-transparent`} to="/kirish">Kirish</NavLink>
          <NavLink className={`bg-transparent`} to="/ro'yhat">Royhatdan otish</NavLink>
        </nav>
      </header>
      <main>
        <Outlet/>
      </main>
      <footer></footer>
    </>
  );
}
