import { NavLink, Outlet } from "react-router-dom";

export default function RootlayoutRout() {
  return (
    <>
      <header>
        <nav>
          <h1>My Article</h1>
          <NavLink to="/">home</NavLink>
          <NavLink to="/course">Kurslar</NavLink>
          <NavLink to="/help">Yordam</NavLink>
        </nav>
      </header>
      <main>
        <Outlet/>
      </main>
      <footer></footer>
    </>
  );
}
