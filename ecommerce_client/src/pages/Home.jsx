import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import Button from '../components/Button';

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/products')
            .then(response => setProducts(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className="p-4 md:p-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-center text-brand">Our Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
                {products.map(product => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
            <div className="mt-8 flex justify-center">
                <Button label="View More Products" onClick={() => alert('Load more products')} />
            </div>
        </div>
    );
};

export default Home;
