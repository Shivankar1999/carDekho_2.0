
import React from 'react';
const NewsCard = ({ image, title, snippet, author, date, large = false }) => (
    <div className={`flex flex-col bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer ${large ? 'col-span-full lg:flex-row' : ''}`}>
      {/* Article image, dynamically sized based on 'large' prop */}
      <img
        src={image}
        alt={title}
        className={`rounded-t-lg ${large ? 'lg:w-2/5 lg:rounded-l-lg lg:rounded-t-none h-48 lg:h-auto object-cover' : 'w-full h-40 object-cover rounded-t-lg'}`}
        onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/${large ? '400x250' : '300x160'}/e0e0e0/555555?text=Image`; }} // Placeholder on error
      />
      <div className={`p-4 ${large ? 'lg:w-3/5' : ''} flex flex-col justify-between`}>
        <div>
          {/* Article title */}
          <h3 className={`font-semibold text-gray-900 ${large ? 'text-lg mb-2' : 'text-md mb-1'}`}>
            {title}
          </h3>
          {/* Article snippet/description */}
          <p className={`text-gray-600 ${large ? 'text-sm' : 'text-xs'} mb-3`}>
            {snippet}
          </p>
        </div>
        {/* Author and date information */}
        <div className="flex items-center text-gray-500 text-xs mt-2">
          <span className="font-medium mr-2">{author}</span> &bull; <span>{date}</span>
        </div>
      </div>
    </div>
  );
  
  export default NewsCard;