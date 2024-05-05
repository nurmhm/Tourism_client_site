import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Authprovider/Authprovider';

const MyListPage = () => {
    const { user } = useContext(AuthContext);
    const [userSpots, setUserSpots] = useState([]);
    console.log(userSpots)
    useEffect(() => {
        const fetchUserSpots = async () => {
            try {
                const response = await axios.get(`https://tourest-server-site.vercel.app/addspot`);
                // ?email=${user.email}
                setUserSpots(response.data);
            } catch (error) {
                console.error('Error fetching user spots:', error);
            }
        };

        fetchUserSpots();
    }, [user.email]);

    const handleDeleteSpot = async (id) => {
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this spot!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!',
        });

        if (result.isConfirmed) {
            try {
                await axios.delete(`https://tourest-server-site.vercel.app/addspot/${id}`);
                setUserSpots(userSpots.filter(spot => spot._id !== id));
                Swal.fire('Deleted!', 'Your spot has been deleted.', 'success');
            } catch (error) {
                console.error('Error deleting spot:', error);
                Swal.fire('Error!', 'Failed to delete the spot.', 'error');
            }
        }
    };

    return (
        <div className="overflow-x-auto lg:mx-40 my-10">
            <h1 className="text-center lg:text-4xl md:text-2xl text-xl text-green-500 my-7 font-bold py-5">My Spot List</h1>
            <table className="table table-zebra">
                <thead>
                    <tr>
                        <th>Tourists Spot Name</th>
                        <th>Average Cost</th>
                        <th>Total Visitors Per Year</th>
                        <th>Total Travel Time</th>
                        <th>Seasonality</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {userSpots.map((spot) => (
                        <tr key={spot._id}>
                            <td>{spot.tourists_spot_name}</td>
                            <td>${spot.average_cost}</td>
                            <td>{spot.total_visitors_per_year}</td>
                            <td>{spot.travel_time}</td>
                            <td>{spot.seasonality}</td>
                            <td>
                                <Link to={`/update/${spot._id}`}>
                                    <button className="btn btn-primary mr-2">Update</button>
                                </Link>
                                <button className="btn btn-error" onClick={() => handleDeleteSpot(spot._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MyListPage;
