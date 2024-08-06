import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logoContainer}>
        <img src="/logo.png" alt="Logo" style={styles.logo} />
      </div>
      <ul style={styles.navLinks}>
        <li>
          <Link href="/" legacyBehavior>
            <a style={styles.navLink}>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/contact" legacyBehavior>
            <a style={styles.navLink}>Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#333',
    color: 'white',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    height: '40px',
  },
  navLinks: {
    listStyle: 'none',
    display: 'flex',
    margin: 0,
    padding: 0,
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    margin: '0 15px',
    padding: '8px 15px',
    borderRadius: '5px',
    transition: 'background-color 0.3s',
  },
};

export default Navbar;
