import React from 'react';

const HomePage: React.FC = () => {
    return (
        <main>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold mb-6">Welcome to MiningCo</h1>
                <p className="text-xl mb-8">Leading the way in sustainable and innovative mining practices.</p>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-gray-100 p-4 rounded-lg">
                            <h3 className="text-xl font-semibold mb-2">Ore Extraction</h3>
                            <p>State-of-the-art techniques for efficient mineral extraction.</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded-lg">
                            <h3 className="text-xl font-semibold mb-2">Quality Control</h3>
                            <p>Rigorous testing to ensure the highest ore quality.</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded-lg">
                            <h3 className="text-xl font-semibold mb-2">Sustainable Mining</h3>
                            <p>Environmentally conscious mining practices for a better future.</p>
                        </div>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">Latest News</h2>
                    <ul className="list-disc list-inside">
                        <li className="mb-2">MiningCo expands operations to South America</li>
                        <li className="mb-2">New eco-friendly mining technology implemented</li>
                        <li className="mb-2">Record-breaking ore quality achieved in Q2</li>
                    </ul>
                </section>

            </div>
        </main>
    );
};

export default HomePage;
