import React from 'react';
import Image from 'next/image';

const Home: React.FC = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <header className="bg-blue-900 text-white py-16">
                <div className="container mx-auto text-center">
                    <h1 className="text-5xl font-bold mb-4">Welcome to MineCore Industries</h1>
                    <p className="text-xl">Unearthing the Future, Sustainably</p>
                </div>
            </header>

            <main className="container mx-auto py-12">
                <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                    <div>
                        <h2 className="text-3xl font-semibold mb-4">About Us</h2>
                        <p className="text-gray-700 mb-4">
                            MineCore Industries is a leading mining company committed to responsible resource extraction and sustainable practices. With over 50 years of experience, we&apos;re at the forefront of innovation in the mining sector.
                        </p>
                        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-300">
                            Learn More
                        </button>
                    </div>
                    <div className="relative h-64 md:h-auto">
                        <Image
                            src="/images/mining-site.jpg"
                            alt="Mining site"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                </section>

                <section className="mb-16">
                    <h2 className="text-3xl font-semibold mb-8 text-center">Our Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {['Mineral Exploration', 'Sustainable Mining', 'Ore Processing'].map((service, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold mb-2">{service}</h3>
                                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="text-3xl font-semibold mb-8 text-center">Why Choose Us</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {['Expertise', 'Innovation', 'Sustainability', 'Safety'].map((reason, index) => (
                            <div key={index} className="bg-blue-100 p-4 rounded-lg text-center">
                                <h3 className="text-lg font-semibold mb-2">{reason}</h3>
                                <p className="text-gray-700">We excel in {reason.toLowerCase()} to deliver the best results.</p>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Home;
