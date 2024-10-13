import React from 'react';
import Image from 'next/image';

interface Leader {
    name: string;
    title: string;
    bio: string;
    imageSrc: string;
}

const leaders: Leader[] = [
    {
        name: "Riley D. Evans",
        title: "Chairman of the Board",
        bio: "Mr. Evans has over 38 years of experience in business management, mining, engineering, land surveying, heavy equipment operations and land development. Mr. Evans started his first professional service firm, AES Consultants in 1982. This architects, civil engineers and surveying professional services firm specialized in land use planning, permitting, design development, civil engineering plans, land surveying, construction staking, heavy earth works and structural design. AES helped in development projects for commercial mining, shopping centers, large apartment complexes and subdivisions, primarily in Washington state. In 1993, Mr. Evans went into land development, taking an owning interest in several commercial projects, evolving into auto dealerships and large apartment projects. In 2004 he became Chief Operating Officer of an environmental engineering firm assisting in its rapid growth and profitability. In early 2015 having located a large iron ore deposit in Washington State, Mr. Evans helped to create Aaron Mining by combining other business interests. Mr. Evans is a supporter of youth sports and a former VP of facilities for youth soccer in Washington State. He has been a consistent supporter of the National Sheriffs Association, Washington State Patrol, Search and Rescue and the International Association of Fire Fighters.",
        imageSrc: "/riley_d_evans.jpg"
    },
    {
        name: "Elizabeth Barlow Gupta",
        title: "Certified MSHA Miner and Operator, President of Operations",
        bio: "Ms. Barlow brings people, plans, and operations together as a leader. With a diverse career spanning across industries, she has excelled in challenging environments and built success through relationships. Ms. Barlow has been the Director of Real Estate Development for Building Hope, specializing in construction management and design-build 501-C3 school projects. Her involvement in the community, industry committees, and associations has significantly contributed to the rapid growth of Building Hope, including a portfolio of CARES Act projects in 2020 with exceptional schedule demands in a volatile delivery environment. As the leader of TRICOR, Ms. Barlow leveraged her broad experience as a key strategic partner of Byron Russell LLC, working with clients such as Western Governors University and Big West Oil, LLC. She has also held leadership positions in iron ore and mining asset management and capital projects, training and administration, maintenance, and operational communications at Rio Tinto in the United States and Western Australia. Some of her key accomplishments include working on AutoHaul, the world's first autonomous heavy-haul railway, leading Rio Tinto's first HVI (high-value innovation) project worth over 1 billion AUD, receiving a prestigious National Transportation and Logistics Industry Council award, and launching Zero Harm, a cultural transformation movement at Kennecott Utah Copper. Ms. Barlow has also made significant contributions as part of the sales and marketing team for Beautone USA, managing a nationally scaled sales team and launching new product lines and private label design partnerships with retail brands such as Target, Walmart, and Office Depot. Ms. Barlow holds a BS in Anthropology from the University of Utah, with a focus on Government Politics and Journalism. She was raised in Maryland and currently resides in Potomac, MD, with her two courageous young boys, considering their growth and development to be her greatest accomplishment. Ms. Barlow has served on the Board of Directors of the Salt Lake City Library System, Seeds of Peace, The Governo's Mansion Artist Series, and has held various positions on committees with community organizations.",
        imageSrc: "/elizabeth_barlow_gupta.jpg"
    },
    {
        name: "Paul King, PhD",
        title: "Director",
        bio: "Dr. King is presently CEO and President of Ampere Scientific, an Oregan based company focused on generating improvements in specialty alloy production and processing. From 2009 to 2014, Dr. King served as the Director of Partnerships, Outreach and Education at the National Energy Technology Laboratory located in Albany, Oregon. In his position with the National Energy Technology Lab, Dr. King was responsible for business development and driving organizational growth. Additionally, he has been responsible for managing non-core research programs, educational and intern programs, intellectual property development/portfolio, technology transfer functions, outreach activities and international relations. He also managed $80M in research programs focused on novel endeavors for the lab, developed unique industrial/national lab/academic partnerships in-order to leverage federal funding for research and commercialization efforts. intellectual property management including identification, evaluation and protection of IP, invention review board creation, invention management systems, invention pre-screening, full and provisional patent applications, patents, technology transfer and commercialization to promote IP availability, outreach to industry, venture capitalists, serial entrepreneurs, incubators, gap-grant programs, SBIR/STTR programs, and SBA programs. Dr. King engaged in various activities in federally sponsored programs with DOE, DOI-BSEE, USGS, DOD, requiring knowledge of BAAs and other funding mechanisms, knowledge about pursuit of FOAs as well as building relationships with funding organizations.",
        imageSrc: "/paul_king.jpg"
    }
];

const Leadership: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-6">Our Leadership</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {leaders.map((leader, index) => (
                    <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="relative h-64 w-full">
                            <Image
                                src={leader.imageSrc}
                                alt={leader.name}
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                        <div className="p-6">
                            <h2 className="text-2xl font-semibold mb-2">{leader.name}</h2>
                            <h3 className="text-lg text-gray-600 mb-4">{leader.title}</h3>
                            <p className="text-gray-700">{leader.bio}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Leadership;
