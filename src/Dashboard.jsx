
import React, { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';
import toast from 'react-hot-toast';
import CareerAnalytics from './CareerAnalytics';

export default function Dashboard() {
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [savedJobs, setSavedJobs] = useState([]);
  const [viewedJobs, setViewedJobs] = useState([]);

  useEffect(() => {
    fetchJobs();

    const appliedSub = supabase
      .channel('applied_jobs_changes')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'applied_jobs' }, () => {
        fetchJobs();
        toast.success('Applied Jobs Updated!');
      })
      .subscribe();

    const savedSub = supabase
      .channel('saved_jobs_changes')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'saved_jobs' }, () => {
        fetchJobs();
        toast.success('Saved Jobs Updated!');
      })
      .subscribe();

    const viewedSub = supabase
      .channel('viewed_jobs_changes')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'recently_viewed' }, () => {
        fetchJobs();
        toast.success('Recently Viewed Jobs Updated!');
      })
      .subscribe();

    return () => {
      supabase.removeChannel(appliedSub);
      supabase.removeChannel(savedSub);
      supabase.removeChannel(viewedSub);
    };
  }, []);

  const fetchJobs = async () => {
    const { data: applied } = await supabase.from('applied_jobs').select('*');
    const { data: saved } = await supabase.from('saved_jobs').select('*');
    const { data: viewed } = await supabase.from('recently_viewed').select('*');

    setAppliedJobs(applied || []);
    setSavedJobs(saved || []);
    setViewedJobs(viewed || []);
  };

  const renderJobCard = (job, index) => (
    <div
      key={index}
      className="flex flex-col items-center bg-white rounded-lg shadow p-4 mb-4"
    >
      {/* Job Details */}
      <h2 className="text-lg font-bold text-center">{job.title}</h2>
      <p className="text-gray-600 text-center">{job.company}</p>
      <p className="text-gray-500 text-center mb-2">{job.location}</p>

      {/* Buttons */}
      <div className="flex flex-col items-center mt-2 w-full">
        <a
          href={job.apply_link}
          target="_blank"
          rel="noreferrer"
          className="w-full text-center px-4 py-1 bg-purple-600 text-white rounded-md text-sm font-medium hover:bg-purple-700 mb-2"
        >
          Apply Now
        </a>
        <span className="text-xs bg-gray-100 px-2 py-1 rounded">{job.employment_type}</span>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-100 min-h-screen p-4 sm:p-6">
      {/* Applied Jobs Section */}
      <section className="bg-white p-4 rounded-lg shadow mb-6">
        <h3 className="text-xl font-semibold mb-4">Applied Jobs</h3>
        {appliedJobs.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {appliedJobs.map(renderJobCard)}
          </div>
        ) : (
          <p className="text-gray-500">No applied jobs yet.</p>
        )}
      </section>

      {/* Saved Jobs Section */}
      <section className="bg-white p-4 rounded-lg shadow mb-6">
        <h3 className="text-xl font-semibold mb-4">Saved Jobs</h3>
        {savedJobs.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {savedJobs.map(renderJobCard)}
          </div>
        ) : (
          <p className="text-gray-500">No saved jobs yet.</p>
        )}
      </section>

      {/* Recently Viewed Jobs Section */}
      <section className="bg-white p-4 rounded-lg shadow mb-6">
        <h3 className="text-xl font-semibold mb-4">Recently Viewed Jobs</h3>
        {viewedJobs.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {viewedJobs.map(renderJobCard)}
          </div>
        ) : (
          <p className="text-gray-500">No recently viewed jobs yet.</p>
        )}
      </section>

      {/* Profile Completion Section */}
      <section className="bg-white p-4 rounded-lg shadow mb-6">
        <h3 className="text-xl font-semibold mb-4">Profile Completion</h3>
        <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
          <div className="bg-purple-600 h-3 rounded-full" style={{ width: '90%' }}></div>
        </div>
        <p className="text-sm text-gray-600">90% profile completed (+10%)</p>
      </section>

      {/* Career Analytics */}
      <CareerAnalytics
        appliedJobs={appliedJobs}
        savedJobs={savedJobs}
        viewedJobs={viewedJobs}
      />

      {/* Feedback & Help Center Section */}
      <section className="bg-white p-4 rounded-lg shadow mb-6">
        <h3 className="text-xl font-semibold mb-4">Feedback & Help Center</h3>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Issue Report"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <textarea
            placeholder="Feedback"
            className="w-full border border-gray-300 rounded-md p-2 h-24 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full max-w-xs bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded"
            >
              Call Support
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

