import React from 'react';
import { GraduationCap, Terminal } from 'lucide-react';
import { homeContent } from '../data/content';

export default function HomeTab() {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <section className="prose prose-blue max-w-none">
        <h1 className="text-4xl font-extrabold tracking-tight text-tcd-blue sm:text-5xl mb-6">
          {homeContent.title}
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-4xl">
          This module is an introduction course to Machine Learning (ML), with a focus on Deep Learning. 
          The course is offered by the 
          <a href="https://www.tcd.ie/eleceng/" className="text-tcd-blue hover:underline mx-1 font-semibold">Electronic & Electrical Engineering</a>
          department to the fourth and fifth year students of 
          <a href="https://www.tcd.ie" className="text-tcd-blue hover:underline mx-1 font-semibold">Trinity College Dublin</a>.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 my-12">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 text-tcd-blue">
              <GraduationCap size={24} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Modern Curriculum</h3>
            <p className="text-gray-600">{homeContent.modernCurriculum}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center mb-4 text-emerald-600">
              <Terminal size={24} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Hands-on Labs</h3>
            <p className="text-gray-600">{homeContent.handsOnLabs}</p>
          </div>
        </div>

        <div className="flex flex-col items-center my-12">
           <img src={`${import.meta.env.BASE_URL}assets/machine_learning.png`} alt="XKCD Machine Learning Comic" className="max-w-xs w-full rounded-lg shadow-sm border border-gray-200" />
           <a href="https://xkcd.com/1838/" target="_blank" rel="noreferrer" className="text-sm text-gray-400 mt-2 hover:text-tcd-blue transition-colors">
              https://xkcd.com/1838/
           </a>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-tcd-blue mt-0 mb-4">{homeContent.courseOverview.title}</h2>
          <p className="text-gray-600 mb-4">{homeContent.courseOverview.p1}</p>
          <p className="text-gray-600 mb-0">{homeContent.courseOverview.p2}</p>
        </div>
      </section>
    </div>
  );
}
