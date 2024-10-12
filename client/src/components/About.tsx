import React from 'react';

const About: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-6">About Aaron Mining LLC</h1>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Our Resources</h2>
                <p className="mb-4">
                    Aaron Mining LLC holds numerous mining claims in the northwest with conservative estimated reserves of 300,000,000 metric tons of high quality magnetite ore, millions of metric tons of silicon ore containing gold, silver and platinum, together with millions of tons of other ore products.
                </p>
                <p className="mb-4">
                    Aaron Mining LLC&apos;s claims can be looked up through the Bureau of Land Management&apos;s Mineral and Land Records System. Select &quot;OR&quot; as the &quot;Admin State&quot; and enter &quot;Aaron Mining LLC&quot; in the &quot;Claimant Name&quot; field.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Our Process</h2>
                <p className="mb-4">
                    When in operation, Aaron Mining LLC will use a unique method to greatly reduce or entirely eliminate negative environmental impacts.
                </p>
                <p className="mb-4">
                    The ore at our site will be transported to our processing facility and crushed to a fine powder. Then the latest methods will be used to systematically extract and concentrate each element. Remaining material will be turned into concrete products that encapsulate the tailings, thus eliminating the major source of environmental concern. A significant portion of our energy needs will be met by renewable electric sources. Our goal is to be good stewards of the air, water and land, while economically producing the materials that drive our economy.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Environmental Responsibility</h2>
                <p className="mb-4">
                    Aaron Mining LLC&apos;s team has significant expertise in environmental remediation and has worked in the past with state ecology departments and the EPA on various environmental projects. That expertise will be used from the inception of our operations and in each step along the way.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-4">Investment Opportunity</h2>
                <p className="mb-4">
                    Aaron Mining LLC is seeking investors who can fund initial extraction operations. The quality and diversity of the minerals available on our claim sites is significant and carries the opportunity for a substantial return. We will provide interested investors with detailed information including a professional geological assessment and test results from sample ore, as well as financial projections. Contact us directly to arrange a discussion of this unique opportunity.
                </p>
            </section>
        </div>
    );
};

export default About;
