"use client";
import { useEffect, useState } from "react";

export default function CodingStats() {
    const [ repos, setRepos ] = useState( 0 );
    const [ followers, setFollowers ] = useState( 0 );

    useEffect( () => {
        async function fetchData() {
            const res = await fetch( "https://api.github.com/users/arham43-ops" );
            const data = await res.json();
            setRepos( data.public_repos );
            setFollowers( data.followers );
        }

        fetchData();
    }, [] );

    return (
        <section className="py-20 bg-black text-white">
            <h2 className="text-5xl font-black mb-10">GitHub Stats</h2>

            <div className="flex gap-10">
                <div>Repos: { repos }</div>
                <div>Followers: { followers }</div>
            </div>
        </section>
    );
}