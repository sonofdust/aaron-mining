import React from 'react';

const Shipping: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-6">Shipping</h1>
            <p className="text-xl mb-8">
                Aaron Mining LLC&apos;s claim sites are located within 75 miles of multiple seaports, 25 miles from existing rail lines and are accessible by existing roadways. We can coordinate shipping to your facility for on time delivery.
            </p>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Our Shipping Advantages</h2>
                <ul className="list-disc list-inside space-y-2">
                    <li>Close proximity to multiple seaports</li>
                    <li>Near existing rail lines for efficient transportation</li>
                    <li>Accessible by existing roadways</li>
                    <li>Coordinated shipping for on-time delivery</li>
                </ul>
            </section>



            <section>
                <h2 className="text-2xl font-semibold mb-4">Contact Us for Shipping Information</h2>
                <p>
                    For more information about our shipping options and to discuss your specific needs, please contact our logistics team.
                </p>
                <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                    Contact Logistics Team
                </button>
            </section>
        </div>
    );
};

export default Shipping;
