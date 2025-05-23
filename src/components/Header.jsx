import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
      <header className="bg-orange-500 text-white flex justify-around items-center w-full fixed p-[10px]">
        <div className="">
          <Link to="/">Logo</Link>
        </div>
        <nav>
          <ul className="flex justify-center items-center gap-[20px]">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
