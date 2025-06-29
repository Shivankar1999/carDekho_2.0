import React, { useEffect, useRef, useState } from 'react';
import { Search, MapPin, ChevronDown, User, Heart, ChevronLeft, ChevronRight, Menu, X } from 'lucide-react';
const carCategories = {
    SUV: [
      { name: 'Mahindra Thar', image: 'https://placehold.co/400x300/333/fff?text=Mahindra+Thar' },
      { name: 'Tata Nexon', image: 'https://placehold.co/400x300/444/fff?text=Tata+Nexon' },
      { name: 'Hyundai Creta', image: 'https://placehold.co/400x300/555/fff?text=Hyundai+Creta' },
      { name: 'Kia Seltos', image: 'https://placehold.co/400x300/666/fff?text=Kia+Seltos' },
      { name: 'Dummy Car', image: 'https://placehold.co/400x300/666/fff?text=Kia+Seltos' },
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
  const MostSearched = () => {
    const [activeCategory, setActiveCategory] = useState('SUV');
    const scrollContainerRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    // Function to scroll the container
    const handleScroll = (scrollOffset) => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: scrollOffset, behavior: 'smooth' });
        }
    };
    
    // Function to check if scrolling is possible
    const checkScrollability = () => {
        const el = scrollContainerRef.current;
        if (el) {
            const hasOverflow = el.scrollWidth > el.clientWidth;
            setCanScrollLeft(el.scrollLeft > 0);
            setCanScrollRight(hasOverflow && el.scrollLeft < (el.scrollWidth - el.clientWidth - 1)); // -1 for precision issues
        }
    };
    
    // Reset scroll and check buttons when category changes
    useEffect(() => {
        const el = scrollContainerRef.current;
        if (el) {
            el.scrollLeft = 0;
            // A short delay is needed for the DOM to update with new items before checking scrollability
            setTimeout(checkScrollability, 100); 
        }
        
        // Add event listeners for resize to re-check scrollability
        window.addEventListener('resize', checkScrollability);
        
        return () => {
             window.removeEventListener('resize', checkScrollability);
        }
    }, [activeCategory, carCategories]);


    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">The most searched cars</h2>
                
                <div className="border-b mb-8">
                    <nav className="-mb-px flex space-x-6 overflow-x-auto scrollbar-hide">
                        {Object.keys(carCategories).map(category => (
                             <button 
                                key={category}
                                className={`py-2 px-1 font-semibold whitespace-nowrap ${activeCategory === category ? 'text-orange-600 border-b-2 border-orange-600' : 'text-gray-500 hover:text-gray-700'}`}
                                onClick={() => setActiveCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </nav>
                </div>

                <div className="relative">
                     {/* Carousell Container */}
                    <div 
                        ref={scrollContainerRef} 
                        className="flex overflow-x-auto scroll-smooth scrollbar-hide snap-x snap-mandatory -mx-3"
                        onScroll={checkScrollability}
                    >
                       {carCategories[activeCategory].map((car, index) => (
                           <div key={index} className="w-full sm:w-1/2 lg:w-1/4 flex-shrink-0 snap-start px-3">
                               <div className="border rounded-lg overflow-hidden group shadow-sm hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                                   <img src={car.image} alt={car.name} className="w-full h-48 object-cover" />
                                   <div className="p-4 flex flex-col flex-grow">
                                       <h3 className="font-bold text-gray-800">{car.name}</h3>
                                       <p className="text-sm text-gray-600 mt-1">₹ 11.82 Lakh onwards</p>
                                       <p className="text-xs text-gray-500">Avg. Ex-Showroom price</p>
                                       <div className="mt-auto pt-3">
                                            <button className="w-full border border-orange-600 text-orange-600 font-semibold py-2 rounded-md hover:bg-orange-600 hover:text-white transition-colors">
                                               Check On-Road Price
                                           </button>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       ))}
                    </div>
                     {/* Navigation Buttons */}
                     <button 
                        onClick={() => handleScroll(-300)}
                        className={`absolute -left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10 hover:bg-gray-100 md:flex items-center justify-center ${canScrollLeft ? 'flex' : 'hidden'}`}
                        aria-label="Previous car"
                    >
                        <ChevronLeft />
                    </button>
                    <button 
                        onClick={() => handleScroll(300)}
                        className={`absolute -right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10 hover:bg-gray-100 md:flex items-center justify-center ${canScrollRight ? 'flex' : 'hidden'}`}
                        aria-label="Next car"
                    >
                        <ChevronRight />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default MostSearched;