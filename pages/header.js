import { useRef } from "react";
import Link from "next/link";
import menuIcon from "../assets/images/icons8-menu.svg";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/core";

const Navbar = () => {
  const navbarRef = useRef(null);

  const handleClick = (e) => {
    e.preventDefault();
    let x = navbarRef.current;

    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
    // console.log("classname", navbarRef.current.className);
  };
  return (
    <div className="topnav" id="myTopnav" ref={navbarRef}>
      <Link href="/">
        <a>Jobaho</a>
      </Link>
      <Link href="/jobSection">
        <a>Find a Job</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/">
        <a>Home</a>
      </Link>

      <a className="icon" href="#" onClick={handleClick}>
        <img src={menuIcon}></img>
      </a>
    </div>
  );
};

export default Navbar;
