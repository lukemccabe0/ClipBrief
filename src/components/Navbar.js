import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-[#24292e] p-4"> {/* Darker GitHub grey */}
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4">
          <Link href="/" legacyBehavior>
            <a className="text-white font-bold hover:text-gray-400 text-sm">Start Generating!</a>
          </Link>
          <Link href="https://github.com/lukemccabe0/ClipBrief" legacyBehavior>
            <a className="text-white font-bold hover:text-gray-400 text-sm">GitHub</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
