
import React from 'react';
import { Job } from '../types';

interface JobBoardProps {
  jobs: Job[];
}

const JobBoard: React.FC<JobBoardProps> = ({ jobs }) => {
  if (jobs.length === 0) {
    return (
      <div className="text-center py-20 bg-white rounded-2xl border-2 border-dashed border-slate-200">
        <p className="text-slate-400 text-lg">找不到符合條件的職缺，換個關鍵字試試看？</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {jobs.map(job => (
        <div key={job.id} className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-indigo-400 hover:shadow-lg transition-all cursor-pointer group">
          <div className="flex items-start gap-4">
            <img src={job.logo} alt={job.company} className="w-16 h-16 rounded-xl object-cover border border-slate-100" />
            <div className="flex-grow">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {job.title}
                  </h3>
                  <p className="text-slate-600 font-medium">{job.company}</p>
                </div>
                <span className="text-indigo-600 font-bold bg-indigo-50 px-3 py-1 rounded-lg text-sm">
                  {job.salary}
                </span>
              </div>
              
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-md text-xs font-semibold">{job.location}</span>
                <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-md text-xs font-semibold">{job.category}</span>
                <span className="px-3 py-1 bg-emerald-50 text-emerald-600 rounded-md text-xs font-semibold">{job.type}</span>
              </div>

              <p className="mt-4 text-slate-500 text-sm line-clamp-2">
                {job.description}
              </p>
              
              <div className="mt-4 flex justify-between items-center text-xs text-slate-400">
                <span>發布於 {job.postedAt}</span>
                <button className="text-indigo-600 font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                  查看詳情 →
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobBoard;
