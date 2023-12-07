import React from 'react';
import Link from 'next/link';

const SeasonLeaders = () => {
    const leaders = {
        pointpergame: [
            { id: 1, name: "Joel Embiid", location: 'PHI', pergame: '32.0' },
            { id: 2, name: "Luka Doncic", location: 'DAL', pergame: '31.4' },
            { id: 3, name: "Kevin Durant", location: 'PHX', pergame: '31.0' },
            { id: 4, name: "De'Aaron Fox", location: 'SAC', pergame: '30.3' },
            { id: 5, name: "Joel Embiid", location: 'PHI', pergame: '30.2' },
        ],
        reboundspergame: [
            { id: 1, name: "Joel Embiid", location: 'PHI', pergame: '32.0' },
            { id: 2, name: "Luka Doncic", location: 'DAL', pergame: '31.4' },
            { id: 3, name: "Kevin Durant", location: 'PHX', pergame: '31.0' },
            { id: 4, name: "De'Aaron Fox", location: 'SAC', pergame: '30.3' },
            { id: 5, name: "Joel Embiid", location: 'PHI', pergame: '30.2' },
        ],
        assistspergame: [
            { id: 1, name: "Joel Embiid", location: 'PHI', pergame: '32.0' },
            { id: 2, name: "Luka Doncic", location: 'DAL', pergame: '31.4' },
            { id: 3, name: "Kevin Durant", location: 'PHX', pergame: '31.0' },
            { id: 4, name: "De'Aaron Fox", location: 'SAC', pergame: '30.3' },
            { id: 5, name: "Joel Embiid", location: 'PHI', pergame: '30.2' },
        ],
    };

    return (
        <div className="bg-gradient-to-b from-blue-800 to-blue-600 text-white py-8 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto">
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center mb-6 text-yellow-300">SEASON LEADERS</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14" >
                    {Object.keys(leaders).map((category, index) => (
                        <div
                            key={index}
                            className={`p-4 sm:p-6 bg-gradient-to-r from-white to-gray-200 rounded-lg shadow-md hover:shadow-lg transition duration-300 border border-blue-300`}
                        >
                            <h1 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 text-blue-700">
                                {category.replace(/pergame/g, ' Per Game').toUpperCase()}
                            </h1>
                            {leaders[category].map((leader) => (
                                <div
                                    key={leader.id}
                                    className='bg-white p-4 sm:p-6 mb-4 rounded-md shadow-sm'
                                >
                                    <Link href='#'> <h2 className={`text-xl sm:text-2xl mb-2 text-black ${leader.id === 1 ? 'font-bold' : ''}`}>{leader.name}</h2></Link>
                                    <p className="text-gray-500 text-sm mb-2">{leader.location}</p>
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <p className={ `text-base sm:text-lg lg:text-xl text-gray-500   ${leader.id === 1 ? 'font-bold' : ''} `}>{leader.pergame}</p>
                                        </div>
                                        <button  className={`bg-gradient-to-r from-blue-700 to-blue-500 text-white px-3 sm:px-4 py-2 rounded-full hover:from-blue-600 hover:to-blue-400 transition duration-300`}>
                                            <Link href="/singlePlayer" className="text-xs sm:text-sm lg:text-base">View Profile</Link>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SeasonLeaders;
