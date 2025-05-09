import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="main">
        <Link href="/">STRINOVA</Link>
      </div>
      <div className="sub">
        <div>
          <Link href="/agents">Agents</Link>
        </div>
        <div>
          <Link href="/maps">Maps</Link>
        </div>
        <div>
          <Link href="/mechanics">Mechanics</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
