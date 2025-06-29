import SearchForm from "./SearchForm";

const HeroSection = () => {
    return (
        <section className="relative w-full bg-gray-200">
            {/* Background Image */}
            <img 
                src="https://placehold.co/1600x500/003366/FFFFFF?text=Hero+Banner+Image" 
                alt="Car Promotion Banner" 
                className="w-full h-[500px] object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30"></div>
            
            {/* Content */}
            <div className="container mx-auto px-4 h-full">
                <div className="absolute top-1/2 -translate-y-1/2 flex items-center">
                    <SearchForm />
                </div>
            </div>
        </section>
    );
};


export default HeroSection;