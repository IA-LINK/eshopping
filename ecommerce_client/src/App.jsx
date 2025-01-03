import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

const App = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    </Router>

);

<div className="bg-gray-100 min-h-screen flex items-center justify-center">
<h1 className="text-3xl font-bold text-blue-600">Welcome to My E-Commerce App</h1>
</div>

export default App;
