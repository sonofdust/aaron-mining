import React from 'react';
import Link from 'next/link';

const Nav: React.FC = () => {
    return (
        <nav className="bg-gray-800 text-white p-4">
            <ul className="flex space-x-4">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/ore_quality">Ore Quality</Link>
                </li>
                <li className="relative group">
                    <button
                        className="cursor-pointer focus:outline-none"
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
                            <Link href="/shipping" className="block px-4 py-2 hover:bg-gray-700">
                                Shipping
                            </Link>
                        </li>
                        <li role="menuitem">
                            <Link href="/jobs" className="block px-4 py-2 hover:bg-gray-700">
                                Jobs
                            </Link>
                        </li>
                        <li role="menuitem">
                            <Link href="/contact" className="block px-4 py-2 hover:bg-gray-700">
                                Contact
                            </Link>
                        </li>
                        <li role="menuitem">
                            <Link href="/leadership" className="block px-4 py-2 hover:bg-gray-700">
                                Leadership
                            </Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
