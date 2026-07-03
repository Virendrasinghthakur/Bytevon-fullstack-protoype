import React from 'react'
function Propertycard({
    image,
    name,
    location,
    price,
    annual_yield
}) {
//    function Propertycard({
//     image,
//     name,
//     location,
//     price,
//     annual_yield
// }) {
    return (
        <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition">

            <img
                src={image}
                alt={name}
                className="w-full h-56 object-cover"
            />

            <div className="p-5">

                <p className="text-gray-500 mb-2">
                    📍 {location}
                </p>

                <h2 className="text-2xl font-bold mb-4">
                    {name}
                </h2>

                <div className="flex justify-between mb-5">

                    <div>
                        <p className="text-sm text-gray-400">
                            Price
                        </p>

                        <p className="text-blue-700 font-bold text-xl">
                            {price}
                        </p>
                    </div>

                    <div className="text-right">
                        <p className="text-sm text-gray-400">
                            Annual Yield
                        </p>

                        <p className="text-green-600 font-bold">
                            {annual_yield}
                        </p>
                    </div>

                </div>

                <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800">
                    Invest Now
                </button>

            </div>

        </div>
    );
}



export default Propertycard;

