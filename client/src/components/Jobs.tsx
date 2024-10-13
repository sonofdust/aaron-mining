'use client';

import React from 'react';
import { useState } from 'react';

const Jobs: React.FC = () => {
    const [resume, setResume] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Here you would typically send the resume to a server
        console.log('Resume submitted:', resume);
        // Reset the form
        setResume('');
        alert('Resume submitted successfully!');
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-6">Jobs</h1>
            <p className="text-xl mb-8">
                Aaron Mining LLC anticipates hiring hundreds of employees once funding is secured to begin operations.
                Check back here regularly to see announcements of open positions.
            </p>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">How to Apply</h2>
                <p className="mb-4">
                    If you wish to apply, please email a resume and cover letter to
                    <a href="mailto:aaron@aaronmining.com" className="text-blue-600 hover:underline"> aaron@aaronmining.com</a>
                    {' '}or paste your resume into the space below.
                </p>

                <form onSubmit={handleSubmit} className="mt-6">
                    <div className="mb-4">
                        <label htmlFor="resume" className="block text-gray-700 text-sm font-bold mb-2">
                            Paste your resume here:
                        </label>
                        <textarea
                            id="resume"
                            value={resume}
                            onChange={(e) => setResume(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            rows={10}
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Submit Resume
                    </button>
                </form>
            </section>
        </div>
    );
};

export default Jobs;
