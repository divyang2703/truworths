import React from "react";
import Logo from "./nav components/Logo";
import UserAction from "./nav components/UserAction";
import ColorDisplay from "./nav components/ColorDisplay";
import SearchBar from "./nav components/SearchBar";
import NavLinks from './nav components/NavLinks'

const Header = () => {
  return (
    <div>
      <ColorDisplay />
      <div className="flex justify-between mx-24 h-20 mt-5">
        <Logo />
        <SearchBar/>
        <UserAction />
      </div>

      <NavLinks/>
    </div>
  );
};

export default Header;
