import { NavLink, Outlet } from "react-router-dom";

export default function ContactLayout() {
  return (
    <>
      <h1>Contact</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla porro
        eius exercitationem consectetur eum optio dolores at, alias eos dolorem
        laboriosam culpa?
      </p>

      <nav>
        <NavLink to="faq">Faq</NavLink>
        <NavLink to="forma">Forma</NavLink>
      </nav>
      <Outlet />
    </>
  );
}
