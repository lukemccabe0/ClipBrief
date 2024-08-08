import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="navBar"> {/* Darker GitHub grey24292e */}
        <div className="flex space-x-9">
          <Link href="https://github.com/lukemccabe0/ClipBrief" legacyBehavior>
            <a className="px-3 py-2 text-white font-bold hover:bg-[#16161D] hover:text-white rounded">GitHub</a>
          </Link>
          <Link href="/" legacyBehavior>
            <a className="px-3 py-2 text-white font-bold hover:bg-[#16161D] hover:text-white rounded">Start Generating!</a>
          </Link>
          <Link href="/releaselog" legacyBehavior>
            <a className="px-3 py-2 text-white font-bold hover:bg-[#16161D] hover:text-white rounded">Release Log</a>
          </Link>
        </div>
    </nav>
  );
};

export default Navbar;
