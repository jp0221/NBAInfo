"use client"
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

export default function TeamsPxage() {
    const [teams, setTeams] = useState([]);

    const getTeams = () => {
        axios.get("https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams").then((res) => {
            setTeams(res.data.sports[0].leagues[0].teams)
            console.log(res.data.sports[0].leagues[0].teams)
        })
    }

    useEffect(() => {
        getTeams()
    }, [])

    return (
        <main>
            <div className="py-12 p-4">
                <div className="max-w-6xl mx-auto relative overflow-x-auto">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="p-2 md:px-6 md:py-3">

                                </th>
                                <th scope="col" className="p-2 md:px-6 md:py-3">
                                    Abbr
                                </th>
                                <th scope="col" className="p-2 md:px-6 md:py-3 min-w-[180px]">
                                    Name
                                </th>
                                <th scope="col" className="p-2 md:px-6 md:py-3">
                                    Active
                                </th>
                                <th scope="col" className="p-2 md:px-6 md:py-3">
                                    Color
                                </th>
                                <th scope="col" className="p-2 md:px-6 md:py-3">
                                    Location
                                </th>
                                <th scope="col" className="p-2 md:px-6 md:py-3">

                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                teams.map((v, i) => {
                                    return <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <td className="p-2 md:px-6 md:py-3">
                                            <img src={v?.team.logos[0].href} style={{minWidth: '30px', width: '40px'}} />
                                        </td>
                                        <th scope="row" className="p-2 md:px-6 md:py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {v?.team.abbreviation}
                                        </th>
                                        <td className="p-2 md:px-6 md:py-3">
                                            {v?.team.displayName}

                                        </td>
                                        <td className="p-2 md:px-6 md:py-3">
                                            {v.team?.isActive ? "Yes" : "No"}
                                        </td>
                                        <td className="p-2 md:px-6 md:py-3">

                                            <div className="w-4 h-4" style={{ background: `#${v.team?.color}` }}>
                                            </div>
                                        </td>

                                        <td className="p-2 md:px-6 md:py-3">
                                            {v.team?.location}

                                        </td>
                                        <td className="p-2 md:px-6 md:py-3">
                                            <Link href={`/view-team/${v.team?.id}`}>
                                                View
                                            </Link>
                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        </main>
    )
}