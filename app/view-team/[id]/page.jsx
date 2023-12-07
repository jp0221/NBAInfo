"use client"
import React, { useState, useEffect } from 'react'
import axios from "axios";
import { useParams } from 'next/navigation'


const ViewPlayer = () => {
  const { id } = useParams()
  const [team, setTeam] = useState(null);

  const getTeam = () => {
    axios.get(`https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/${id}`).then((res) => {
      setTeam(res.data.team)
      console.log(res.data.team)
    })
  }

  useEffect(() => {
    getTeam()
  }, [id])

  if (!team) {
    return <p className="p-5 text-center">Loading....</p>
  }
  return (
    <div className="bg-[#3b6efa]">
      <div className='container mx-auto py-12'>
        <div className="container mx-auto my-10 p-8 text-white shadow-md rounded-lg bg-gradient-to-b from-blue-900 to-blue-600">
          <h1 className="text-4xl font-bold mb-6">Team Profile</h1>
          <div className="flex flex-col lg:flex-row items-center">
            <div className="relative w-full lg:w-1/2 mb-10 lg:mb-0 flex items-center justify-center">
              <img
                src={team?.logos[0]?.href}
                width={500}
                height={1000}
                alt="player"
                className="rounded-lg"
              />
              <div className="absolute inset-0 rounded-lg"></div>
            </div>
            <div className="w-full lg:w-1/2 lg:ml-8">
              <p className="text-4xl font-extrabold text-white mb-4">{team?.displayName}</p>
              <p className="text-gray-300 mb-4">Location: {team?.location}</p>
              <p className="text-gray-300 mt-4 font-bold">Records:</p>

              <div className="flex flex-wrap gap-6">
                {team?.record?.items.map((v, i) => {
                  return <div className="p-4">
                    <p className='capitalize'>{v.type}</p>
                    <p>{v.description}</p>
                    <p>{v.summary}</p>
                  </div>
                })}
              </div>
              <p className="text-gray-300 mt-4 font-bold">Next Event:</p>

              <div className="flex flex-wrap gap-6">
                {team?.nextEvent?.map((v, i) => {
                  return <div className="p-4">
                    <p className='capitalize'>{v?.date}</p>
                    <p>{v?.name}</p>
                    <p>{v?.season.displayName}</p>
                  </div>
                })}
              </div>

              <p className="text-gray-300 mb-6">
                {team?.standingSummary}
              </p>


              <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
                <button className="bg-gradient-to-r from-blue-500 to-blue-400 text-white px-6 py-2 rounded-md hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-500 transition duration-300 focus:outline-none focus:ring focus:border-blue-300">
                  Share
                </button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewPlayer