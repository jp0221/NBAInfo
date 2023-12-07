 import { FaCalendarAlt, FaMapMarkerAlt, FaInfoCircle } from 'react-icons/fa';

const UpcomingEvents = () => {
  const events = [
    {
      title: 'NBAConnect Skills Workshop',
      date: 'May 15, 2023',
      location: 'Sports Center',
      description: 'Enhance your NBAConnect skills with expert coaches in this interactive workshop.',
    },
    {
      title: 'NBA Finals 2023',
      date: 'June 10-20, 2023',
      location: 'Various Locations',
      description: 'Witness the most thrilling NBAConnect action as the top teams compete for the championship.',
    },
    {
      title: 'Street NBAConnect Tour ',
      date: 'July 5, 2023',
      location: 'City Park',
      description: 'Experience the excitement of street NBAConnect with teams from all over the city.',
    },
  ];

  return (
    <section className="bg-gradient-to-b from-blue-800 to-blue-600 text-white  py-10 md:py-32 md:px-10">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-4xl font-extrabold text-center mb-8"> NBA Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-2">
          {events.map((event, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl text-black font-bold">{event.title}</h3>
                <FaInfoCircle className="text-gray-500" />
              </div>
              <p className="text-gray-600 mb-2 flex items-center">
                <FaCalendarAlt className="mr-2" />
                {event.date}
              </p>
              <p className="text-gray-600 mb-2 flex items-center">
                <FaMapMarkerAlt className="mr-2" />
                {event.location}
              </p>
              <p className="text-gray-700 mb-4">{event.description}</p>
              {/* <button className="block w-full bg-blue-500 text-white py-2 rounded-full hover:bg-blue-600 transition duration-300">
              Learn More
              </button> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
