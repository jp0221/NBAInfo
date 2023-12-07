"use client"
import React, { useState, useEffect } from 'react'
import axios from "axios";
import { useParams } from 'next/navigation'

const ViewPlayer = () => {
  const { id } = useParams()
  const [player, setPlayer] = useState(null);

  const getPlayer = () => {
    axios.get(`https://www.balldontlie.io/api/v1/players/${id}`).then((res) => {
      setPlayer(res.data)
      console.log(res.data)
    })
  }

  useEffect(() => {
    getPlayer()
  }, [id])

  if (!player) {
    return <p className="p-5 text-center">Loading....</p>
  }
  return (
    <div className="bg-[#3b6efa]">
      <div className='container mx-auto py-12'>
        <div className="max-w-4xl mx-auto my-10 p-8 text-white shadow-md rounded-lg bg-gradient-to-b from-blue-900 to-blue-600">
          <div className="flex flex-col lg:flex-row items-center">

            <div className="w-full lg:w-1/2 lg:ml-8">
              <p className="text-2xl md:text-4xl font-extrabold text-white mb-4"> {player?.first_name + " " + player?.last_name}</p>
              <p className="font-extrabold text-white mb-4">Team: {player?.team.full_name}</p>
              <p className="text-white mb-4">Position:
                : {player?.position
                }</p>
              <p className="text-white mb-4">Weight:
                : {player?.weight_pounds || "Null"
                }</p>
              <p className="text-white mb-4">Height:
                : {player?.height_feet || "Null"
                }</p>



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