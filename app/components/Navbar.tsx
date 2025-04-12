import Link from 'next/link';
import { FaLinkedinIn  } from 'react-icons/fa';
import { TfiFacebook } from "react-icons/tfi";
import { PhoneIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
  return (
    <nav className="w-full py-4 px-6 md:px-30 flex items-center justify-between bg-white">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/" className="text-2xl font-bold text-purple-900">
          <span className='text-yellow-400'>Assignment</span>Pros
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:ml-50 md:flex items-center space-x-8">
        <Link href="/" className="text-gray-700 font-extrabold hover:text-red-600">
          Home
        </Link>
        <Link href="/experts" className="text-gray-700 font-extrabold hover:text-red-600">
          Experts
        </Link>
        <Link href="/guarantees" className="text-gray-700 font-extrabold hover:text-red-600">
          Guarantees
        </Link>
        <Link href="/testimonials" className="text-gray-700 font-extrabold hover:text-red-600">
          Testimonials
        </Link>
        <Link href="/contact" className="text-gray-700 font-extrabold hover:text-red-600">
          Contact
        </Link>
      </div>

      {/* Social and Contact */}
      <div className="flex items-center space-x-4">
        <Link href="https://facebook.com" className="text-gray-400 hover:text-red-900">
          <TfiFacebook className="w-5 h-5" />
        </Link>
        <Link href="https://linkedin.com" className="md:mr-10 text-gray-400 hover:text-red-900">
          <FaLinkedinIn  className="w-5 h-5" />
        </Link>
        <Link 
          href="tel:+442032"
          className="hidden md:flex items-center space-x-2 border-2 border-red-700 bg-red-50 text-red-600 px-4 py-2 rounded-full"
        >
          <PhoneIcon className=" w-5 h-5" />
          <span>+442032 683956</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar; 