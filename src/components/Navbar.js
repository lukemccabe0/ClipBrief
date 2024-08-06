import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="navBar">
      <div className="projectName">ClipBrief</div>
      <ul className="navLinks">
        <li>
          <Link href="/" legacyBehavior>
            <a className="navLink">Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about" legacyBehavior>
            <a className="navLink">About</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
