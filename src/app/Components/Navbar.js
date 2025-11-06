'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const pathname = usePathname(); // get current path

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/servicePage', label: 'Services' },
  { href: '/contact', label: 'Contact' },
];


  return (
    <nav className="bg-transparent border-gray-200 dark:bg-gray-900 fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="flex self-center text-2xl font-semibold whitespace-nowrap text-white dark:text-white">
             <Image
      src="/Logo.png"
      alt="Berkshire PMS Logo"
      width={50}
      height={50}
      className="object-contain"
      priority
    />
           <sub className='text-sm'>pms</sub>
          </span>
        </Link>

        <button
          type="button"
          onClick={toggleMenu}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`}>
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block py-2 px-3 rounded-sm md:p-0 ${
                    pathname === link.href
                      ? 'text-blue-200 dark:text-blue-500'
                      : 'text-gray-200 hover:bg-gray-100 md:hover:bg-transparent dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
