import React, { useContext, useState } from "react";
import { SidebarContext } from "../context/SidebarContext";
import test from "../assets/phase.png";
import {
  Avatar,
  Badge,
  Dropdown,
  DropdownItem,
  WindmillContext,
} from "@windmill/react-ui";
import Image from "next/image";

function Header() {
  const { mode, toggleMode } = useContext(WindmillContext);
  const { toggleSidebar } = useContext(SidebarContext);

  const [isNotificationsMenuOpen, setIsNotificationsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  function handleNotificationsClick() {
    setIsNotificationsMenuOpen(!isNotificationsMenuOpen);
  }

  function handleProfileClick() {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  }

  return (
    <header className="z-40 p-4 bg-white shadow-bottom dark:bg-gray-800">
      <div className="container flex items-center justify-between h-full px-6 mx-auto text-primary dark:text-primary">
        {/* <!-- Mobile hamburger --> */}
        <button
          className="p-1 mr-5 -ml-1 rounded-md lg:hidden focus:outline-none focus:shadow-outline-purple"
          onClick={toggleSidebar}
          aria-label="Menu"
        >
          {/* <MenuIcon className="w-6 h-6" aria-hidden="true" /> */}
        </button>
        <ul className="flex items-center w-full justify-end flex-shrink-0 space-x-6">
          {/* <!-- Theme toggler --> */}
          <li className="flex">
            <button
              className="rounded-md focus:outline-none focus:shadow-outline-primary"
              onClick={toggleMode}
              aria-label="Toggle color mode"
            >
              {mode === "dark"
                ? // <SunIcon className="w-5 h-5" aria-hidden="true" />
                  "Sun"
                : // <MoonIcon className="w-5 h-5" aria-hidden="true" />
                  "Moon"}
            </button>
          </li>
          {/* <!-- Profile menu --> */}
          <li className="relative">
            <button
              className="rounded-full focus:shadow-outline-purple focus:outline-none"
              onClick={handleProfileClick}
              aria-label="Account"
              aria-haspopup="true"
            >
              <Avatar
                className="align-middle w-8 h-8"
                src="https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82"
                alt=""
                aria-hidden="true"
              />
            </button>
            <Dropdown
              align="right"
              isOpen={isProfileMenuOpen}
              onClose={() => setIsProfileMenuOpen(false)}
            >
              <DropdownItem tag="a" href="#">
                {/* <Image
                  className="w-5 h-5"
                  aria-hidden="true"
                  src={test}
                  alt="icon"
                /> */}
                <span>Profile</span>
              </DropdownItem>
              <DropdownItem tag="a" href="#">
                {/* <Image
                  className="w-5 h-5"
                  aria-hidden="true"
                  src={test}
                  alt="icon"
                /> */}
                <span>Settings</span>
              </DropdownItem>
              <DropdownItem onClick={() => alert("Log out!")}>
                {/* <Image
                  className="w-5 h-5"
                  aria-hidden="true"
                  src={test}
                  alt="icon"
                /> */}
                <span>Log out</span>
              </DropdownItem>
            </Dropdown>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
