import React from 'react';
import { Car, MapPin, Search } from 'lucide-react'; // Using lucide-react for icons

// CityCard Component: Represents a single city in the "Used Cars Nearby" section
const CityCard = ({ city }) => (
  <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer">
    {/* Car icon representing a used car, styled with Tailwind classes */}
    <div className="p-3 bg-blue-100 rounded-full mb-2">
      <Car className="w-6 h-6 text-blue-600" />
    </div>
    {/* City name, styled for readability */}
    <span className="text-sm font-medium text-gray-700 text-center">{city}</span>
  </div>
);
const UsedCarsNearby = () => {
    // Dummy data for cities, mimicking the screenshot
    const cities = [
      'Ahmedabad', 'Bangalore', 'Chennai', 'Delhi NCR', 'Gurgaon',
      'Hyderabad', 'Jaipur', 'Kolkata', 'Mumbai', 'New Delhi',
      'Noida', 'Pune'
    ];
  
    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
        {/* Section title */}
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Get trusted used cars nearby</h2>
  
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left section: Grid of cities */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {cities.map((city, index) => (
              <CityCard key={index} city={city} />
            ))}
          </div>
  
          {/* Right section: Second-hand car search input */}
          <div className="lg:w-1/3 p-4 bg-white rounded-lg shadow-sm border border-gray-200 flex flex-col items-start justify-center">
            {/* Title for the search input */}
            <p className="text-gray-700 font-medium mb-3">I am looking to buy a second hand car in</p>
            <div className="relative w-full">
              {/* MapPin icon for the input field */}
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              {/* Input field for city, with padding to accommodate the icon */}
              <input
                type="text"
                placeholder="Enter your city"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
              />
            </div>
          </div>
        </div>
      </div>
      </section>
    );
  };

  export default UsedCarsNearby;