
const UpcomingEvents = () => {
    const upcomingEvents = [
        {
            title: 'Annual Sports Tournament',
            date: 'June 25, 2023',
            location: 'Sports Complex',
            imageUrl: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3BvcnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
        },
        {
            title: 'Football Training Camp',
            date: 'July 10, 2023',
            location: 'Football Field',
            imageUrl: 'https://images.unsplash.com/photo-1527950285759-4d9f1b69c461?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vdGJhbGwlMjB0cmFpbmluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
        },
        {
            title: 'Basketball Tryouts',
            date: 'July 15, 2023',
            location: 'Basketball Court',
            imageUrl: 'https://example.com/event-image3.jpg'
        }
    ];

    return (
        <div className="bg-gray-100">
            {/* Other homepage content */}

            {/* Upcoming Events Section */}
            <section className="py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {upcomingEvents.map((event, index) => (
                            <div key={index} className="bg-white p-4 rounded-md">
                                <img className="w-full h-48 object-cover rounded-md mb-4" src={event.imageUrl} alt={event.title} />
                                <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                                <p className="text-gray-600 mb-2">{event.date}</p>
                                <p className="text-gray-800 mb-2">{event.location}</p>
                                {/* Add a button or link to redirect to the event's detailed page */}
                                <button className="bg-blue-500 text-white rounded-md px-4 py-2">Learn More</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default UpcomingEvents;