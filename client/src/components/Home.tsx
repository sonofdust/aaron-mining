import React from 'react';
import Image from 'next/image';

const Home: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-6">Welcome to MiningCo</h1>
            <p className="text-xl mb-8">Leading the way in sustainable global mining operations</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                    <p className="mb-4">At Aaron Mining, we&apos;re committed to responsible resource extraction while minimizing environmental impact and maximizing community benefits.</p>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                        Learn More
                    </button>
                </div>
                <div>
                    <Image
                        src="/mining-operation.jpg"
                        alt="Mining Operation"
                        width={500}
                        height={300}
                        className="rounded-lg shadow-md"
                    />
                </div>
            </div>

            <div className="mt-12">
                <h2 className="text-2xl font-semibold mb-4">Latest News</h2>
                <ul className="list-disc list-inside">
                    <li>Aaron Mining Achieves Carbon Neutrality in Australian Operations</li>
                    <li>New Technology Boosts Efficiency at South American Mine</li>
                    <li>Community Partnership Program Launches in Africa</li>
                </ul>
            </div>
        </div>
    );
};



export default Home;
