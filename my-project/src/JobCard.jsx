// import React from 'react'


// export default function JobCard({ job }) {
//     return (
//       <div className="card shadow-sm">
//         <div className="card-body">
//           <h5 className="card-title">{job.job_title}</h5>
//           <h6 className="card-subtitle mb-2 text-muted">{job.employer_name}</h6>
//           <p className="card-text">{job.job_city}, {job.job_country}</p>
//           <a href={job.job_apply_link} className="btn btn-outline-primary" target="_blank" rel="noreferrer">
//             Apply Now
//           </a>
//         </div>
//       </div>
//     );
//   }
  
import React from 'react';

export default function JobCard({ job }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-4 w-full max-w-sm hover:shadow-lg transition duration-300">
      <div className="flex justify-between items-center mb-2">
        <span className={`text-xs font-semibold ${job.job_employment_type === "FULLTIME" ? "text-purple-600" : "text-green-600"}`}>
          {job.job_employment_type}
        </span>
        <span className="text-sm text-gray-600">
          {job.job_min_salary && job.job_max_salary
            ? `Salary: ${job.job_min_salary} - ${job.job_max_salary} ${job.job_salary_currency || ''}`
            : 'Salary: N/A'}
        </span>
      </div>

      <h3 className="text-lg font-semibold mb-1">{job.job_title}</h3>
      <p className="text-sm text-gray-700 mb-1">{job.employer_name}</p>
      <p className="text-xs text-gray-500 mb-4">{job.job_city}, {job.job_country}</p>

      <div className="flex -space-x-2 mb-3">
        <img src="https://randomuser.me/api/portraits/men/32.jpg" className="w-6 h-6 rounded-full border-2 border-white" />
        <img src="https://randomuser.me/api/portraits/women/45.jpg" className="w-6 h-6 rounded-full border-2 border-white" />
        <img src="https://randomuser.me/api/portraits/men/41.jpg" className="w-6 h-6 rounded-full border-2 border-white" />
        <span className="text-xs text-gray-500 ml-2">10+ applicants</span>
      </div>

      <div className="flex gap-2 justify-content-center">
        
        <a href={job.job_apply_link} target="_blank" rel="noreferrer" className="px-4 py-1 bg-purple-600 text-white rounded-md text-sm font-medium hover:bg-purple-700">
          Apply now
        </a>
      </div>
    </div>
  );
}
