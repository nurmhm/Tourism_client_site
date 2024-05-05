import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CountriesSection = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await axios.get('https://tourest-server-site.vercel.app/country');
                setCountries(response.data);
            } catch (error) {
                console.error('Error fetching countries:', error);
            }
        };

        fetchCountries();
    }, []);

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl text-teal-600 my-20 text-center font-bold ">Countries</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                {countries.map((country) => (
                    <Link key={country._id} to={`/country/${country.country_name}`} className="country-card bg-white shadow-md rounded-lg overflow-hidden">
                        <img src={country.image} alt={country.country_name} className="w-full h-48 object-cover object-center" />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold mb-2">{country.country_name}</h3>
                            <p className="text-sm text-gray-600">{country.short_description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default CountriesSection;
