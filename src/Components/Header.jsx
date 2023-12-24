import React, { useState } from "react";
import logo from "./../assets/Images/disney-logo.png";

//importing react icons
import { HiHome } from "react-icons/hi2";
import { HiPlus } from "react-icons/hi2";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { HiStar } from "react-icons/hi2";
import { HiPlayCircle } from "react-icons/hi2";
import { HiTv } from "react-icons/hi2";
import { HiDotsVertical } from "react-icons/hi";

import HeaderItem from "./Headeritem";

function Header() {
  const [toggle, setToggle] = useState(false);
  const menu = [
    {
      name: "HOME",
      icons: HiHome,
    },
    {
      name: "SEARCH",
      icons: HiMagnifyingGlass,
    },
    {
      name: "WATCH LIST",
      icons: HiPlus,
    },

    {
      name: "ORIGINALS",
      icons: HiStar,
    },
    {
      name: "MOVIES",
      icons: HiPlayCircle,
    },
    {
      name: "SERIES",
      icons: HiTv,
    },
  ];
  return (
    <div className="flex items-center justify-between p-4">
      <div
        className="flex 
     items-center gap-8 "
      >
        <img
          src={logo}
          alt=""
          className="w-[70px] md:w-[115px] object-cover rounded-full"
        />
        <div className="hidden md:flex gap-8">
          {menu.map((items) => (
            <HeaderItem name={items.name} Icon={items.icons} />
          ))}
        </div>
        <div className="flex md:hidden gap-5">
          {menu.map(
            (items, index) =>
              index < 3 && <HeaderItem name={""} Icon={items.icons} />
          )}
          <div className="md:hidden" onClick={() => setToggle(!toggle)}>
            <HeaderItem name={" "} Icon={HiDotsVertical} />
            {toggle ? (
              <div className="absolute mt-4 bg-[#121212] border-[1px] border-gray-700 p-3 px-5 py-4">
                {menu.map(
                  (items, index) =>
                    index > 2 && (
                      <HeaderItem name={items.name} Icon={items.icons} />
                    )
                )}
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <img
        src="https://png.pngtree.com/png-vector/20190629/ourlarge/pngtree-business-people-avatar-icon-user-profile-free-vector-png-image_1527664.jpg"
        alt=""
        className="w-[40px] rounded-full"
      />
    </div>
  );
}

export default Header;
