"use client"
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
export default function NewsPage() {
    const [news, setNews] = useState([]);

    const getNews = () => {
        axios.get("https://site.api.espn.com/apis/site/v2/sports/basketball/nba/news").then((res) => {
            setNews(res.data.articles)
            console.log(res.data.articles)
        })
    }

    useEffect(() => {
        getNews()
    }, [])

    return (
        <main>
            <div className="py-12 p-4">
                <div className="max-w-7xl mx-auto relative overflow-x-auto">
                    <h1 className="text-3xl lg:text-5xl font-extrabold mb-8  text-center ">
                        NBA News
                    </h1>

                    <div className="flex flex-wrap justify-center gap-2">
                        {news.map((v, i) => {
                            return <div class="bg-white overflow-hidden border-b-4 border-blue-500 md:w-1/3">
                                <img src={v?.images[0]?.url} alt="People" class="w-full object-cover h-64" />
                                <div class="p-2 py-6">
                                <div class="text-sm flex items-center pb-4">
                                       
                                       <p class="leading-none">{v.published}</p>
                                   </div>
                                    <p class="text-blue-500 font-semibold text-xs mb-1 leading-none">News</p>
                                    <h3 class="font-semibold mb-2 text-lg leading-tight sm:leading-normal">{v?.headline}</h3>
                                    <p className="pb-4">{v.description}</p>
                                   
                                </div>
                            </div>
                        })}
                    </div>

                </div>

            </div>
        </main>
    )
}