import Link from "next/link";
import menuIcon from "../assets/images/icons8-menu.svg";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/core";

const Navbar = () => {
  return (
    // <div>
    //   <nav>
    //     <div>
    //       <Link href="/">
    //         <a id="navbar1">Jobaho</a>
    //       </Link>
    //     </div>
    //     <div>
    //       <Link href="/jobSection">
    //         <a id="navbar2">Find a Job</a>
    //       </Link>
    //     </div>
    //     <div>
    //       <Link href="/about">
    //         <a id="navbar3">About Us</a>
    //       </Link>
    //     </div>
    //     <div>
    //       <Link href="/">
    //         <a id="navbar4">Home</a>
    //       </Link>
    //     </div>
    //     <div>
    //       <a id="icon" onClick="iconFunction()">
    //         <img className="menu" src={menuIcon}></img>
    //       </a>
    //     </div>
    //   </nav>
    // </div>

    <div className="topnav" id="myTopnav">
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
      {/* <Link href="#">
        <a class="icon">
          <img src={menuIcon}></img>
        </a>
      </Link> */}
      {/* <div className="chakra-menu">
        <Menu>
          <MenuButton as={Button} rightIcon="chevron-down">
            Menu
          </MenuButton>
          <MenuList>
            <MenuItem>Home</MenuItem>
            <MenuItem>About</MenuItem>
            <MenuItem as={Link} href="/jobSection">
              <a>Find a Job</a>
            </MenuItem>
          </MenuList>
        </Menu>
      </div> */}
    </div>
  );
};

export default Navbar;
