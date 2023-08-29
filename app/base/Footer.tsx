import React from "react";
import NavLink from "../reusables/NavLink";

const Footer = () => {
  return (
    <footer className="max-w-screen-xl px-8 mx-auto">
      <div className="w-full border-y border-[#DDDDDD]">
        <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
          <div className="md:w-full lg:w-full w-full sm:w-1/2 xl:w-fit flex flex-col sm:flex-row sm:px-6 py-6 sm:py-12 sm:space-x-10 sm:border-r-0 border-[#DDDDDD]">
            <div className="sm:hidden xl:block mb-6 sm:mb-0">
              <a href="#" className="font-bold">
                MyBetFund
              </a>
            </div>
            <ul className="space-y-4">
              <NavLink name="Cryptocurrency" url="#" />
              <NavLink name="Exchanges" url="#" />
              <NavLink name="Watchlist" url="#" />
              <NavLink name="Portfolio" url="#" />
              <NavLink name="NFT" url="#" />
            </ul>
          </div>
          <div className="md:w-full lg:w-full lg:border-r w-full sm:w-1/2 xl:w-fit sm:px-16 py-6 sm:py-12 border-t sm:border-t xl:border-r border-[#DDDDDD]">
            <ul className="space-y-4">
              <NavLink name="Products" url="#" />
              <NavLink name="About Us" url="#" />
              <NavLink name="Careers" url="#" />
              <NavLink name="Blog" url="#" />
              <NavLink name="Security" url="#" />
            </ul>
          </div>
          <div className="md:w-full md:border-t lg:w-full w-full sm:w-1/2 xl:w-fit sm:px-16 py-6 sm:py-12 border-t sm:border-t-0 sm:border-r-0 border-[#DDDDDD]">
            <ul className="space-y-4">
              <NavLink name="Help Center" url="#" />
              <NavLink name="Contact Us" url="#" />
              <NavLink name="System Status" url="#" />
              <NavLink name="Area of Avaibility" url="#" />
              <NavLink name="Privacy Policy" url="#" />
            </ul>
          </div>
        </div>
      </div>
      <div className="py-8 sm:py-4 text-center text-sm text-[#666666] hover:text-gray-900">
        &copy; Copyright 2023 Mybetfund. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;