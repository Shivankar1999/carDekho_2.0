import React from 'react';
import NewsCard from './NewsCard';
const NewsSection = () => {
    // Dummy data for news articles, mimicking the screenshot content
    const newsArticles = [
      {
        image: 'https://placehold.co/600x375/a0e0a0/333333?text=Tata+Harrier+EV', // Placeholder image
        title: 'Tata Harrier EV',
        snippet: 'Take A Look At The Mid-spec Fearless Plus Variant Of The Tat...',
        author: 'Cardekho',
        date: 'Jun 28, 2025',
        large: true, // This article will be larger
      },
      {
        image: 'https://placehold.co/300x180/e0a0a0/333333?text=Weekly+Wrapup', // Placeholder image
        title: 'Top India Car News That Mattered From This Past Week: Mahindra',
        snippet: 'Diesel and petrol car owners staying in Delhi should be cautious as they will be deisted fuel after July 1, 2025.',
        author: 'Bikewale',
        date: 'Jun 28, 2025',
      },
      {
        image: 'https://placehold.co/300x180/a0a0e0/333333?text=Skoda+vs+Honda', // Placeholder image
        title: 'Honda City Sport vs Skoda Slavia Sportline: A Detailed Design,',
        snippet: 'The Slavia Sportline is available with two turbo-petrol engine options, while the Honda City Sport comes solely with a...',
        author: 'Youhan',
        date: 'Jun 27, 2025',
      },
      {
        image: 'https://placehold.co/300x180/f0e0a0/333333?text=XUV+Variant', // Placeholder image
        title: '2025 Tata Harrier EV AWD Variant Launched At Rs 29.99 Lakh',
        snippet: 'The all-wheel drive Harrier EV can be had only with the 75 kWh battery pack and commands a premium of Rs 3.5 lakh over t...',
        author: 'Anirudh',
        date: 'Jan 27, 2025',
      },
    ];
  
    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
        {/* Section title */}
        <h2 className="text-xl font-semibold text-gray-800 mb-6">News to help choose your car</h2>
  
        {/* Grid layout for news articles. The first article is 'large', others are normal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsArticles.map((article, index) => (
            <React.Fragment key={index}>
              {/* Render the first article as large and spanning multiple columns if needed */}
              {index === 0 && (
                <div className="col-span-full lg:col-span-2"> {/* Spans 2 columns on large screens */}
                  <NewsCard {...article} />
                </div>
              )}
              {/* Render other articles normally */}
              {index > 0 && <NewsCard {...article} />}
            </React.Fragment>
          ))}
        </div>
  
        {/* "View All Latest News" link */}
        <div className="mt-6 text-right">
          <a href="#" className="text-blue-600 hover:underline text-sm font-medium">
            View All Latest News →
          </a>
        </div>
      </div>
      </section>
    );
  };
  
  export default NewsSection;