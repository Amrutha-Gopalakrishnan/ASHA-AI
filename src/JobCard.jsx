import React, { useState, useEffect } from 'react';
import { FaRegBookmark, FaBookmark } from 'react-icons/fa';
import { supabase } from './supabaseClient';
import toast from 'react-hot-toast';

export default function JobCard({ job }) {
  const [bookmarked, setBookmarked] = useState(false);

  useEffect(() => {
    checkIfBookmarked();
  }, []);

  const checkIfBookmarked = async () => {
    const { data } = await supabase
      .from('saved_jobs')
      .select('id')
      .eq('job_id', job.job_id)
      .single();
    setBookmarked(!!data);
  };

  const handleApply = async () => {
    const jobData = {
      job_id: job.job_id,
      title: job.job_title,
      company: job.employer_name,
      location: `${job.job_city}, ${job.job_country}`,
      logo: job.employer_logo,
      employment_type: job.job_employment_type,
      apply_link: job.job_apply_link,
      timeAgo: new Date().toISOString(),
    };

    await supabase.from('applied_jobs').upsert(jobData);
    await supabase.from('recently_viewed').upsert(jobData);

    toast.success('Job applied and saved!');
    window.open(job.job_apply_link, '_blank');
  };

  const toggleBookmark = async () => {
    if (!bookmarked) {
      const jobData = {
        job_id: job.job_id,
        title: job.job_title,
        company: job.employer_name,
        location: `${job.job_city}, ${job.job_country}`,
        logo: job.employer_logo,
        employment_type: job.job_employment_type,
        apply_link: job.job_apply_link,
        timeAgo: new Date().toISOString(),
      };
      await supabase.from('saved_jobs').insert(jobData);
      toast.success('Job bookmarked!');
    } else {
      await supabase.from('saved_jobs').delete().eq('job_id', job.job_id);
      toast.success('Job removed from bookmarks!');
    }
    setBookmarked(!bookmarked);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-4 w-full max-w-sm hover:shadow-lg transition duration-300">
      <div className="flex justify-between items-center mb-2">
        <span className={`text-xs font-semibold ${job.job_employment_type === "FULLTIME" ? "text-purple-600" : "text-green-600"}`}>
          {job.job_employment_type}
        </span>
      </div>

      <h3 className="text-lg font-semibold mb-1">{job.job_title}</h3>
      <p className="text-sm text-gray-700 mb-1">{job.employer_name}</p>
      <p className="text-xs text-gray-500 mb-4">{job.job_city}, {job.job_country}</p>

      <div className="flex gap-2">
        <button onClick={handleApply} className="px-4 py-1 bg-purple-600 text-white rounded-md text-sm font-medium hover:bg-purple-700">
          Apply now
        </button>
        <button onClick={toggleBookmark} className="text-purple-700 text-xl ml-3">
          {bookmarked ? <FaBookmark /> : <FaRegBookmark />}
        </button>
      </div>
    </div>
  );
}
