'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Nav: React.FC = () => {
    const pathname = usePathname();

    return (
        <nav className="bg-gray-800 text-white p-4">
            <ul className="flex space-x-4">
                <li>
                    <Link href="/" className="hover:underline">
                        <span className={`${pathname === '/' ? 'underline' : ''}`}>Home</span>
                    </Link>
                </li>
                <li>
                    <Link href="/about" className="hover:underline">
                        <span className={`${pathname === '/about' ? 'underline' : ''}`}>About</span>
                    </Link>
                </li>
                <li>
                    <Link href="/ore_quality" className="hover:underline">
                        <span className={`${pathname === '/ore_quality' ? 'underline' : ''}`}>Ore Quality</span>
                    </Link>
                </li>
                <li className="relative group">
                    <button
                        className="cursor-pointer focus:outline-none hover:underline"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        More
                    </button>
                    <ul
                        className="absolute left-0 mt-2 space-y-2 bg-gray-800 text-white p-2 opacity-0 group-hover:opacity-100 group-hover:block transition-opacity duration-300"
                        role="menu"
                    >
                        <li role="menuitem">
                            <Link href="/shipping" className="block px-4 py-2 hover:bg-gray-700 hover:underline">
                                <span className={`${pathname === '/shipping' ? 'underline' : ''}`}>Shipping</span>
                            </Link>
                        </li>
                        <li role="menuitem">
                            <Link href="/jobs" className="block px-4 py-2 hover:bg-gray-700 hover:underline">
                                <span className={`${pathname === '/jobs' ? 'underline' : ''}`}>Jobs</span>
                            </Link>
                        </li>
                        <li role="menuitem">
                            <Link href="/contact" className="block px-4 py-2 hover:bg-gray-700 hover:underline">
                                <span className={`${pathname === '/contact' ? 'underline' : ''}`}>Contact</span>
                            </Link>
                        </li>
                        <li role="menuitem">
                            <Link href="/leadership" className="block px-4 py-2 hover:bg-gray-700 hover:underline">
                                <span className={`${pathname === '/leadership' ? 'underline' : ''}`}>Leadership</span>
                            </Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
