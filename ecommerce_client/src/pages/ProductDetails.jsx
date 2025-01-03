import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetails = () => {
    const { id } = useParams(); // Get product ID from URL
    const [product, setProduct] = useState(null);

    useEffect(() => {
        // Fetch product details based on the ID
        axios.get(`http://localhost:5000/api/products/${id}`)
            .then(response => {
                setProduct(response.data);
            })
            .catch(error => {
                console.error("Error fetching product details:", error);
            });
    }, [id]); // Dependency array ensures it re-fetches when the ID changes

    if (!product) {
        return <div>Loading...</div>; // Show loading while fetching data
    }

    return (
        <div className="max-w-4xl mx-auto p-4">
            <div className="flex flex-col md:flex-row">
                <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full md:w-1/2 h-auto object-cover mb-4 md:mb-0"
                />
                <div className="md:ml-6">
                    <h2 className="text-3xl font-bold text-gray-900">{product.name}</h2>
                    <p className="text-lg text-gray-700 mt-2">{product.description}</p>
                    <div className="mt-4">
                        <span className="text-2xl font-semibold text-gray-900">${product.price}</span>
                    </div>
                    <div className="mt-4">
                        <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
