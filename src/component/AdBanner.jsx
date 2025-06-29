const AdBanner = () => {
    return (
        <div className="bg-gray-100 py-4">
            <div className="container mx-auto px-4">
                <div className="border rounded-lg p-4 flex justify-between items-center bg-white">
                    <div className="flex items-center">
                        <img src="https://placehold.co/100x40/f0f0f0/333?text=Qantas" alt="Qantas Logo" className="mr-4 h-10"/>
                        <div>
                            <h3 className="font-bold text-gray-800">Discover the Qantas difference</h3>
                            <a href="#" className="text-sm text-blue-600 hover:underline">Search deals</a>
                        </div>
                    </div>
                     <span className="text-xs text-gray-500 border px-2 py-1 rounded">3rd party ad content</span>
                </div>
            </div>
        </div>
    );
};


export default AdBanner;    