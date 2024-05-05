import toast, { Toaster } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const UpdateProduct = () => {
    const spot = useLoaderData();
    const { _id, tourists_spot_name, country_name, location, image,average_cost
         ,short_description,seasonality,travel_time ,total_visitors_per_year} = spot;
    console.log(spot);
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;

        const updatedSpot = {
            tourists_spot_name: form.tourists_spot_name.value,
            country_name: form.country_name.value,
            location: form.location.value,
            image: form.image.value,
            average_cost: form.average_cost.value,
            short_description: form.short_description.value,
            seasonality: form.seasonality.value,
            travel_time: form.travel_time.value,
            total_visitors_per_year: form.total_visitors_per_year.value,
        };

        console.log(updatedSpot);

        fetch(`https://tourest-server-site.vercel.app/addspot/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedSpot),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                toast.success(`Added ${updatedSpot.tourists_spot_name} to the Spot `, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
                form.reset();

            });
    };



    return (
        <div className="lg:mx-[290px] lg:my-[180px] md:mx-16">
            <Toaster position="top-right" reverseOrder={false} autoClose={300}
                hideProgressBar={false}
                closeOnClick={true}
                pauseOnHover={true}
                draggable={true} />
            <h1 className="text-center text-red-400 lg:text-5xl md:text-3xl text-2xl font-bold my-10">Update Product</h1>
            <div className= " bg-cyan-600">
                <div className="card w-full">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   
                            <div className="form-control">
                                <label className="label ">
                                    <span className="label-text text-xl">Tourist Spot Name</span>
                                </label>
                                <input
                                    name="tourists_spot_name"
                                    defaultValue={tourists_spot_name}
                                    className="input input-bordered"
                                    type="text"
                                    placeholder="Enter the Tourist Spot Name"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl">Country Name</span>
                                </label>
                                <input
                                    name="country_name"
                                    defaultValue={country_name}
                                    className="input input-bordered"
                                    type="text"
                                    placeholder="Enter the Country Name"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl">Image</span>
                                </label>
                                <input
                                    name="image"
                                    defaultValue={image}
                                    className="input input-bordered"
                                    type="text"
                                    placeholder="Enter the Image URL"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl">Location</span>
                                </label>
                                <input
                                    name="location"
                                    defaultValue={location}
                                    className="input input-bordered"
                                    type="text"
                                    placeholder="Enter the Location"
                                    required
                                />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl">Average Cost</span>
                                </label>
                                <input
                                    name="average_cost"
                                    defaultValue={average_cost}
                                    className="input input-bordered"
                                    type="text"
                                    placeholder="Enter the Average Cost"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl">Seasonality</span>
                                </label>
                                <input
                                    name="seasonality"
                                    defaultValue={seasonality}
                                    className="input input-bordered"
                                    type="text"
                                    placeholder="Enter Seasonality (e.g., summer, winter)"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl">Travel Time</span>
                                </label>
                                <input
                                    name="travel_time"
                                    defaultValue={travel_time}
                                    className="input input-bordered"
                                    type="text"
                                    placeholder="Enter the Travel Time (e.g., 7 days)"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl">Total Visitors Per Year</span>
                                </label>
                                <input
                                    name="total_visitors_per_year"
                                    defaultValue={total_visitors_per_year}
                                    className="input input-bordered"
                                    type="text"
                                    placeholder="Enter the Total Visitors Per Year"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl">Short Description</span>
                                </label>
                                <textarea
                                    name="short_description"
                                    defaultValue={short_description}
                                    className="textarea textarea-bordered"
                                    placeholder="Enter a Short Description"
                                    required
                                ></textarea>
                            </div>
                        </div>
                        <div className="form-control my-16">
                            <button className="btn btn-primary" type="submit">
                                Update Tourist Spot
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProduct;
