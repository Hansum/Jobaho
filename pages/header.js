import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div>
          <Link href="/">
            <a id="navbar1">Jobaho</a>
          </Link>
        </div>
        <div>
          <Link href="/jobSection">
            <a id="navbar2">Find a Job</a>
          </Link>
        </div>
        <div>
          <Link href="/testing">
            <a id="navbar3">About Us</a>
          </Link>
        </div>
        <div>
          <Link href="/">
            <a id="navbar4">Home</a>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
