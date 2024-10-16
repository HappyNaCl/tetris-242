import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="h-20 flex items-center">
        <ul className="flex w-screen justify-around text-white font-EditUndo text-5xl">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/game">Game</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
