import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

const App = () => (
    <div className="bg-brand min-h-screen flex items-center justify-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent">
            Welcome to Dcipher E-Commerce App
        </h1>
        <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
            <Home />
        </main>
        <Footer />
    </div>
    </div>
    
);




export default App;
