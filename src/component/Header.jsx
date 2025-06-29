
import React, { useState } from 'react';
import { Search, MapPin, ChevronDown, User, Heart, ChevronLeft, ChevronRight, Menu, X } from 'lucide-react';

// Mock Data for Car Cards
const carCategories = {
  SUV: [
    { name: 'Mahindra Thar', image: 'https://placehold.co/400x300/333/fff?text=Mahindra+Thar' },
    { name: 'Tata Nexon', image: 'https://placehold.co/400x300/444/fff?text=Tata+Nexon' },
    { name: 'Hyundai Creta', image: 'https://placehold.co/400x300/555/fff?text=Hyundai+Creta' },
    { name: 'Kia Seltos', image: 'https://placehold.co/400x300/666/fff?text=Kia+Seltos' },
  ],
  Hatchback: [
    { name: 'Maruti Swift', image: 'https://placehold.co/400x300/334/fff?text=Maruti+Swift' },
    { name: 'Tata Altroz', image: 'https://placehold.co/400x300/445/fff?text=Tata+Altroz' },
    { name: 'Hyundai i20', image: 'https://placehold.co/400x300/556/fff?text=Hyundai+i20' },
    { name: 'Maruti Baleno', image: 'https://placehold.co/400x300/667/fff?text=Maruti+Baleno' },
  ],
  Sedan: [
    { name: 'Honda City', image: 'https://placehold.co/400x300/3a3/fff?text=Honda+City' },
    { name: 'Hyundai Verna', image: 'https://placehold.co/400x300/4b4/fff?text=Hyundai+Verna' },
    { name: 'Skoda Slavia', image: 'https://placehold.co/400x300/5c5/fff?text=Skoda+Slavia' },
    { name: 'VW Virtus', image: 'https://placehold.co/400x300/6d6/fff?text=VW+Virtus' },
  ],
  MUV: [
    { name: 'Toyota Innova', image: 'https://placehold.co/400x300/a3a/fff?text=Toyota+Innova' },
    { name: 'Kia Carens', image: 'https://placehold.co/400x300/b4b/fff?text=Kia+Carens' },
    { name: 'Maruti Ertiga', image: 'https://placehold.co/400x300/c5c/fff?text=Maruti+Ertiga' },
    { name: 'Renault Triber', image: 'https://placehold.co/400x300/d6d/fff?text=Renault+Triber' },
  ],
  Luxury: [
      { name: 'Mercedes-Benz', image: 'https://placehold.co/400x300/aa3/fff?text=Mercedes' },
      { name: 'BMW 3 Series', image: 'https://placehold.co/400x300/bb4/fff?text=BMW' },
      { name: 'Audi A4', image: 'https://placehold.co/400x300/cc5/fff?text=Audi+A4' },
      { name: 'Volvo XC40', image: 'https://placehold.co/400x300/dd6/fff?text=Volvo+XC40' },
  ],
};
const CarDekhoLogo = () => (
    <svg width="124" height="24" viewBox="0 0 124 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M115.323 11.7411V0H123.36V23.4822H115.323V12.9848C115.323 10.5947 114.286 9.87309 112.793 9.87309C111.3 9.87309 110.177 10.5947 110.177 12.9848V23.4822H102.14V0H110.177V11.7411C111.472 4.49829 117.828 4.38072 115.323 11.7411Z" fill="#24272C"/>
        <path d="M84.5118 0H97.7709C102.055 0 104.918 2.65482 104.918 7.37563C104.918 11.4924 102.793 13.9137 99.4582 14.665L105.728 23.4822H97.2173L91.6859 15.3046H90.045V23.4822H82.0083V0H90.045V10.1421H91.6859L96.2227 2.77157H84.5118V0ZM90.045 12.5322V2.70051H96.9118C99.8115 2.70051 101.559 4.34518 101.559 7.3198C101.559 10.2944 99.8115 12.5322 96.9118 12.5322H90.045Z" fill="#24272C"/>
        <path d="M78.6976 23.4822H70.6608V0H78.6976V23.4822Z" fill="#24272C"/>
        <path d="M57.6972 0H68.1923L62.9298 12.599L68.6013 23.4822H57.9661L54.6612 17.0711L51.3563 23.4822H40.7211L46.3926 12.599L41.1301 0H51.6252L54.6612 6.88325L57.6972 0Z" fill="#F85724"/>
        <path d="M22.9535 0H35.8036C40.206 0 42.8649 2.71066 42.8649 7.49239C42.8649 12.2741 40.206 14.9848 35.8036 14.9848H28.4871V23.4822H20.4504V0H22.9535ZM28.4871 12.2843H35.429C38.3585 12.2843 39.9583 10.6396 39.9583 7.49239C39.9583 4.34518 38.3585 2.70051 35.429 2.70051H28.4871V12.2843Z" fill="#24272C"/>
        <path d="M0 7.25888C0 3.02538 3.05574 0 7.92819 0H14.1378V23.4822H7.92819C3.05574 23.4822 0 20.4569 0 16.2234V7.25888ZM5.5334 16.2234C5.5334 18.6751 6.51015 19.5533 7.92819 19.5533V3.92893C6.51015 3.92893 5.5334 4.80711 5.5334 7.25888V16.2234Z" fill="#24272C"/>
    </svg>
);


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = ["NEW CARS", "USED CARS", "NEWS & REVIEWS", "VIDEOS"];

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            {/* Top Bar */}
            <div className="bg-gray-100/50 py-2">
                <div className="container mx-auto px-4 flex justify-between items-center text-xs text-gray-600">
                    <div>{/* Can add other links here if needed */}</div>
                    <div className="flex items-center space-x-4">
                        <a href="#" className="hover:text-orange-600">Offers</a>
                        <a href="#" className="hover:text-orange-600">Help</a>
                        <div className="flex items-center">
                            <MapPin size={14} className="mr-1" />
                            <span>Select City</span>
                            <ChevronDown size={14} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-3">
                    <div className="flex items-center space-x-8">
                        <CarDekhoLogo />
                        <nav className="hidden lg:flex items-center space-x-6">
                            {navLinks.map(link => (
                                <a key={link} href="#" className="text-sm font-medium text-gray-700 hover:text-orange-600 flex items-center">
                                    {link} <ChevronDown size={16} className="ml-1" />
                                </a>
                            ))}
                        </nav>
                    </div>

                    <div className="hidden lg:flex items-center space-x-4">
                        <div className="relative w-64">
                            <input
                                type="text"
                                placeholder="Search or Ask a Question"
                                className="w-full border rounded-md py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        </div>
                        <div className="flex items-center space-x-4 text-sm font-medium text-gray-700">
                           <a href="#" className="flex items-center hover:text-orange-600"><Heart size={20} className="mr-1"/></a>
                           <a href="#" className="flex items-center hover:text-orange-600"><User size={20} className="mr-1"/> Login / Register</a>
                        </div>
                    </div>
                    
                    {/* Mobile Menu Button */}
                    <div className="lg:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

             {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden bg-white pb-4 px-4 border-t">
                    <nav className="flex flex-col space-y-4 pt-4">
                        {navLinks.map(link => (
                             <a key={link} href="#" className="text-sm font-medium text-gray-700 hover:text-orange-600 flex justify-between items-center">
                                {link} <ChevronDown size={16} />
                            </a>
                        ))}
                    </nav>
                     <div className="mt-4 pt-4 border-t flex flex-col space-y-4">
                        <div className="relative w-full">
                            <input
                                type="text"
                                placeholder="Search or Ask a Question"
                                className="w-full border rounded-md py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        </div>
                        <a href="#" className="flex items-center hover:text-orange-600"><Heart size={20} className="mr-2"/> Wishlist</a>
                        <a href="#" className="flex items-center hover:text-orange-600"><User size={20} className="mr-2"/> Login / Register</a>
                    </div>
                </div>
            )}
        </header>
    );
};

export default  Header;