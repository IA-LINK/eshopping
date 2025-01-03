import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-blue-500 text-white px-4 py-3">
            <div className="flex justify-between items-center">
                <h1 className="text-xl font-bold">E-Commerce</h1>
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    ☰
                </button>
                <ul
                    className={`${
                        isOpen ? "block" : "hidden"
                    } md:flex space-x-4 md:space-x-0 md:space-y-0 md:items-center md:static absolute bg-blue-500 md:bg-transparent left-0 w-full md:w-auto top-full md:top-auto z-10`}
                >
                    <li className="p-2 md:p-0">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? "text-yellow-300 font-bold" : "hover:text-gray-300"
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="p-2 md:p-0">
                        <NavLink
                            to="/products"
                            className={({ isActive }) =>
                                isActive ? "text-yellow-300 font-bold" : "hover:text-gray-300"
                            }
                        >
                            Products
                        </NavLink>
                    </li>
                    <li className="p-2 md:p-0">
                        <NavLink
                            to="/cart"
                            className={({ isActive }) =>
                                isActive ? "text-yellow-300 font-bold" : "hover:text-gray-300"
                            }
                        >
                            Cart
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
