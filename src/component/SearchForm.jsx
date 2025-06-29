import React, { useState } from 'react';
import { Search, MapPin, ChevronDown, User, Heart, ChevronLeft, ChevronRight, Menu, X } from 'lucide-react';

const SearchForm = () => {
    const [activeTab, setActiveTab] = useState('New Car');
    
    return (
        <div className="w-full max-w-sm bg-white rounded-lg shadow-2xl p-6 relative z-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Find your right car</h2>
            <div className="flex border-b mb-4">
                <button 
                    className={`py-2 px-4 font-semibold ${activeTab === 'New Car' ? 'text-orange-600 border-b-2 border-orange-600' : 'text-gray-500'}`}
                    onClick={() => setActiveTab('New Car')}
                >
                    New Car
                </button>
                <button 
                    className={`py-2 px-4 font-semibold ${activeTab === 'Used Car' ? 'text-orange-600 border-b-2 border-orange-600' : 'text-gray-500'}`}
                    onClick={() => setActiveTab('Used Car')}
                >
                    Used Car
                </button>
            </div>
            
            <div className="flex space-x-2 text-sm mb-6">
                <button className="text-orange-600 font-semibold border-b-2 border-orange-600 pb-1">By Budget</button>
                <button className="text-gray-500 font-semibold pb-1">By Brand</button>
            </div>
            
            <form className="space-y-4">
                <div className="relative">
                    <select className="w-full border border-gray-300 rounded-md p-3 appearance-none text-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500">
                        <option>Select Budget</option>
                        <option>Under 5 Lakh</option>
                        <option>5 - 10 Lakh</option>
                        <option>10 - 20 Lakh</option>
                        <option>Above 20 Lakh</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
                 <div className="relative">
                    <select className="w-full border border-gray-300 rounded-md p-3 appearance-none text-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500">
                        <option>All Vehicle Types</option>
                        <option>SUV</option>
                        <option>Hatchback</option>
                        <option>Sedan</option>
                        <option>MUV</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
                <button type="submit" className="w-full bg-orange-600 text-white font-bold py-3 rounded-md hover:bg-orange-700 transition-colors">
                    Search
                </button>
            </form>
            
            <div className="text-center mt-4">
                <a href="#" className="text-sm font-semibold text-gray-600 hover:text-orange-600">Advanced Search</a>
            </div>
        </div>
    );
};

export default SearchForm;
