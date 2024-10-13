import React from 'react';

const OreQuality: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-6">Magnetite Ore Quality</h1>
            <p className="text-xl mb-8">The magnetite ore on Aaron Mining LLC&apos;s claims is high quality. Extraction and processing methods to be implemented at the site will allow Fe concentration of up to 73%</p>

            <p className="mb-4">
                Our claims can be verified through the Bureau of Land Management&apos;s Mineral and Land Records System.
                Select &quot;OR&quot; as the &quot;Admin State&quot; and enter &quot;Aaron Mining LLC&quot; in the &quot;Claimant Name&quot; field.
            </p>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Quality of Magnetite Ore by XRF Mining testing % results</h2>

                <h3 className="text-xl font-semibold mb-2">Processed Ore, 0 to 5mm: (ALL PROCESSED ORE CAN BE MADE INTO PELLETS UPON REQUEST)</h3>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-300">
                        <thead>
                            <tr className="bg-gray-600 text-white">
                                <th className="border px-4 py-2 font-bold">Fe</th>
                                <th className="border px-4 py-2 font-bold">SiO2</th>
                                <th className="border px-4 py-2 font-bold">Al2O3</th>
                                <th className="border px-4 py-2 font-bold">CO</th>
                                <th className="border px-4 py-2 font-bold">Ni</th>
                                <th className="border px-4 py-2 font-bold">Cu</th>
                                <th className="border px-4 py-2 font-bold">P</th>
                                <th className="border px-4 py-2 font-bold">Zn</th>
                                <th className="border px-4 py-2 font-bold">BaO</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-700">
                            <tr className="bg-gray-100">
                                <td className="border px-4 py-2 font-medium">62.83%</td>
                                <td className="border px-4 py-2">1.15%</td>
                                <td className="border px-4 py-2">0.015%</td>
                                <td className="border px-4 py-2">0.0310%</td>
                                <td className="border px-4 py-2">0.0339%</td>
                                <td className="border px-4 py-2">0.002%</td>
                                <td className="border px-4 py-2">0.010%</td>
                                <td className="border px-4 py-2">0.0031%</td>
                                <td className="border px-4 py-2">0.06%</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 font-medium">65.51%</td>
                                <td className="border px-4 py-2">1.08%</td>
                                <td className="border px-4 py-2">0.011%</td>
                                <td className="border px-4 py-2">0.0299%</td>
                                <td className="border px-4 py-2">0.0333%</td>
                                <td className="border px-4 py-2">0.001%</td>
                                <td className="border px-4 py-2">0.009%</td>
                                <td className="border px-4 py-2">0.0030%</td>
                                <td className="border px-4 py-2">0.03%</td>
                            </tr>
                            <tr className="bg-gray-100">
                                <td className="border px-4 py-2 font-medium">70.16%</td>
                                <td className="border px-4 py-2">0.95%</td>
                                <td className="border px-4 py-2">0.010%</td>
                                <td className="border px-4 py-2">0.0271%</td>
                                <td className="border px-4 py-2">0.0314%</td>
                                <td className="border px-4 py-2">0.001%</td>
                                <td className="border px-4 py-2">0.008%</td>
                                <td className="border px-4 py-2">0.0027%</td>
                                <td className="border px-4 py-2">0.02%</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 font-medium">73.01%</td>
                                <td className="border px-4 py-2">0.73%</td>
                                <td className="border px-4 py-2">0.009%</td>
                                <td className="border px-4 py-2">0.0256%</td>
                                <td className="border px-4 py-2">0.0299%</td>
                                <td className="border px-4 py-2">0.001%</td>
                                <td className="border px-4 py-2">0.007%</td>
                                <td className="border px-4 py-2">0.0026%</td>
                                <td className="border px-4 py-2">0.02%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 className="text-xl font-semibold mb-2 mt-8">Natural Ore 50mm to 100mm: (Put through Jaw Crusher only)</h3>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-300">
                        <thead>
                            <tr className="bg-gray-500 text-white">
                                <th className="border px-4 py-2">Fe</th>
                                <th className="border px-4 py-2">SiO2</th>
                                <th className="border px-4 py-2">Al2O3</th>
                                <th className="border px-4 py-2">CO</th>
                                <th className="border px-4 py-2">Ni</th>
                                <th className="border px-4 py-2">Cu</th>
                                <th className="border px-4 py-2">P</th>
                                <th className="border px-4 py-2">Zn</th>
                                <th className="border px-4 py-2">BaO</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-700">
                            <tr className="bg-gray-100">
                                <td className="border px-4 py-2 font-medium">36.21%</td>
                                <td className="border px-4 py-2">2.96%</td>
                                <td className="border px-4 py-2">0.027%</td>
                                <td className="border px-4 py-2">0.0390%</td>
                                <td className="border px-4 py-2">0.0365%</td>
                                <td className="border px-4 py-2">0.003%</td>
                                <td className="border px-4 py-2">0.013%</td>
                                <td className="border px-4 py-2">0.0037%</td>
                                <td className="border px-4 py-2">6.62%</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 font-medium">47.53%</td>
                                <td className="border px-4 py-2">2.46%</td>
                                <td className="border px-4 py-2">0.017%</td>
                                <td className="border px-4 py-2">0.0230%</td>
                                <td className="border px-4 py-2">0.0342%</td>
                                <td className="border px-4 py-2">0.003%</td>
                                <td className="border px-4 py-2">0.010%</td>
                                <td className="border px-4 py-2">0.0040%</td>
                                <td className="border px-4 py-2">4.26%</td>
                            </tr>
                            <tr className="bg-gray-100">
                                <td className="border px-4 py-2 font-medium">59.62%</td>
                                <td className="border px-4 py-2">0.96%</td>
                                <td className="border px-4 py-2">0.003%</td>
                                <td className="border px-4 py-2">0.0170%</td>
                                <td className="border px-4 py-2">0.0125%</td>
                                <td className="border px-4 py-2">0.001%</td>
                                <td className="border px-4 py-2">0.002%</td>
                                <td className="border px-4 py-2">0.0016%</td>
                                <td className="border px-4 py-2">0.61%</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 font-medium">61.93%</td>
                                <td className="border px-4 py-2">1.19%</td>
                                <td className="border px-4 py-2">0.001%</td>
                                <td className="border px-4 py-2">0.0100%</td>
                                <td className="border px-4 py-2">0.0101%</td>
                                <td className="border px-4 py-2">0.002%</td>
                                <td className="border px-4 py-2">0.001%</td>
                                <td className="border px-4 py-2">0.0026%</td>
                                <td className="border px-4 py-2">0.57%</td>
                            </tr>
                            <tr className="bg-gray-100">
                                <td className="border px-4 py-2 font-medium">73.21%</td>
                                <td className="border px-4 py-2">2.31%</td>
                                <td className="border px-4 py-2">0.015%</td>
                                <td className="border px-4 py-2">0.0311%</td>
                                <td className="border px-4 py-2">0.0341%</td>
                                <td className="border px-4 py-2">0.002%</td>
                                <td className="border px-4 py-2">0.011%</td>
                                <td className="border px-4 py-2">0.0032%</td>
                                <td className="border px-4 py-2">5.8%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
};

export default OreQuality;
