import React from 'react';

const Navbar = () => (
    <nav className="bg-brand text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">E-Commerce</h1>
            <ul className="flex space-x-4">
                <li><a href="/" className="hover:text-accent">Home</a></li>
                <li><a href="/products" className="hover:text-accent">Products</a></li>
                <li><a href="/cart" className="hover:text-accent">Cart</a></li>
            </ul>
        </div>
    </nav>
);

export default Navbar;
