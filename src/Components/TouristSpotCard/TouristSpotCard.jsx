import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const TouristSpotCard = () => {
    const [touristSpots, setTouristSpots] = useState([]);

    useEffect(() => {
        const fetchTouristSpots = async () => {
            try {
                const response = await axios.get(`https://tourest-server-site.vercel.app/country`);
                setTouristSpots(response.data);
            } catch (error) {
                console.error('Error fetching tourist spots:', error);
            }
        };

        fetchTouristSpots();
    }, []);

    return (
        <div className="country-tourist-spots-page container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl font-bold my-8 text-center text text-cyan-800">Tourist Spots</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 my-10 lg:grid-cols-3 gap-8">
                {touristSpots.map((spot) => (
                    <div key={spot._id} className="tourist-spot-card bg-white shadow-md rounded-lg p-6">
                        <h2 className="text-xl font-semibold mb-4">{spot.tourists_spot_name}</h2>
                        <p className="mb-2"><strong>Country:</strong> {spot.country_Name}</p>
                        <p className="mb-2"><strong>Location:</strong> {spot.location}</p>
                        <p className="mb-2"><strong>Description:</strong> {spot.short_description}</p>
                        <p className="mb-2"><strong>Average Cost:</strong> ${spot.average_cost}</p>
                        <p className="mb-2"><strong>Seasonality:</strong> {spot.seasonality}</p>
                        <Link to={`/view-details/${spot._id}`} className="btn btn-primary">View Details</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TouristSpotCard;
