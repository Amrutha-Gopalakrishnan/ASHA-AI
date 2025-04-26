import React, { useState } from 'react';
import { FaMapMarkerAlt, FaSearch } from 'react-icons/fa';
import axios from 'axios';
import JobCard from './JobCard';

const FeaturedJobs = () => {
  const [jobQuery, setJobQuery] = useState('');
  const [location, setLocation] = useState('');
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchJobs = async () => {
    if (!jobQuery) return;
    setLoading(true);
    try {
      const options = {
        method: 'GET',
        url: 'https://jsearch.p.rapidapi.com/search',
        params: {
          query: `${jobQuery} in ${location}`,
          page: '1',
          num_pages: '1'
        },
        headers: {
          'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
      };

      const response = await axios.request(options);
      setJobs(response.data.data || []);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
    setLoading(false);
  };

  return (
    <section className="py-10 px-5 md:px-20 bg-white text-center" id='job'>
      <h2 className="text-3xl font-bold mb-2">Find Jobs</h2>
      <p className="text-gray-600 mb-6">Search jobs using your skill, keyword, or location</p>

      {/* Search Bar */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-0 md:space-x-4 bg-white shadow-md rounded-lg px-6 py-4 max-w-4xl mx-auto mb-10">
        <div className="flex items-center w-full md:w-1/2 border-b border-gray-300 px-2 py-2">
          <FaSearch className="text-gray-400 mr-2" />
          <input
            type="text"
            value={jobQuery}
            onChange={(e) => setJobQuery(e.target.value)}
            placeholder="Job title, keyword..."
            className="w-full outline-none"
          />
        </div>
        <div className="flex items-center w-full md:w-1/2 border-b border-gray-300 px-2 py-2">
          <FaMapMarkerAlt className="text-gray-400 mr-2" />
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location"
            className="w-full outline-none"
          />
        </div>
        <button
          className="bg-purple-700 hover:bg-purple-800 text-white font-semibold px-4 py-1 rounded-3 mt-3 md:mt-0"
          onClick={fetchJobs}
         
        >
          Find Jobs
        </button>
      </div>

      {/* Job Recommendations */}
      <div className="max-w-6xl mx-auto mt-8">
        {loading ? (
          <p className="text-center text-gray-600">Loading jobs...</p>
        ) : jobs.length > 0 ? (
          <>
            <h3 className="text-2xl font-semibold mb-6">Recommended Jobs</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
  {jobs.map((job, index) => (
    <JobCard key={index} job={job} />
  ))}
</div>
          </>
        ) : (
          jobQuery && <p className="text-center text-gray-500">No jobs found for “{jobQuery}”</p>
        )}
      </div>
    </section>
  );
};

export default FeaturedJobs;
