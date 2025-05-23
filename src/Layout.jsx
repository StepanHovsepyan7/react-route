import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <footer>
        <div className="container">
          <div className="footerParent mt-[100px] bg-orange-500 text-white h-full pt-[50px] pb-[10px]">
            <nav className="flex  justify-around flex-wrap gap-[20px]">
              <ul className="flex  flex-col">
                <li className="text-[25px] font-bold">About us</li>
                <span className="aboutConent mt-5">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Suscipit eligendi incidunt, error vitae nostrum ab assumenda
                  voluptates sed neque voluptatum quia nihil? Quasi esse,
                  dignissimos asperiores doloribus culpa et beatae.
                </span>
              </ul>
              <ul className="flex  flex-col">
                <li className="text-[25px] font-bold">Contact</li>
                <span className="aboutConent mt-5">
                  Email : contact@jhontracktor.co
                </span>
                <span className="mt-3">Phone : (+62) 877-2469-7246</span>
              </ul>
              <ul className="flex  flex-col">
                <li className="text-[25px] font-bold">Link</li>
                <span className="aboutConent mt-5">Home</span>
                <span className="mt-3">About Us</span>
                <span className="mt-3">Serivce</span>
                <span className="mt-3">Project</span>
              </ul>
            </nav>
            <p className="text-center mt-[30px]">Copyright © 2023 CandyAP. All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
