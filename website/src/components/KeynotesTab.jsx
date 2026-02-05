import React from 'react';
import { User, Calendar, Play, FileText } from 'lucide-react';
import { keynotes } from '../data/keynotes';
import { getAssetUrl } from '../utils/url';
import keynotesImg from '../assets/keynotes.webp';

export default function KeynotesTab() {
  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="relative h-48 md:h-72 rounded-2xl overflow-hidden shadow-lg border border-gray-100">
        <img
          src={keynotesImg}
          alt="Industry Keynotes Session"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 md:p-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Industry Keynotes</h2>
          <p className="text-blue-100 md:text-lg">Guest lectures from leading industry experts.</p>
        </div>
      </div>

      <div className="text-gray-700 leading-relaxed">
        <p>
          Selection of guest lectures from previous academic years. These sessions offer historical insights into the practical application of deep learning in industry.
        </p>
    </div>

      <div className="grid gap-6 md:grid-cols-2">
        {keynotes.map((talk, index) => (
          <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow group">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-50 p-2.5 rounded-full text-tcd-blue group-hover:bg-tcd-blue group-hover:text-white transition-colors">
                  <User size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{talk.speaker}</h4>
                  <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">{talk.affiliation}</span>
                </div>
              </div>
              {talk.date && (
                <div className="flex items-center text-xs text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full whitespace-nowrap">
                  <Calendar size={12} className="mr-1.5" />
                  {talk.date}
                </div>
              )}
            </div>
            
            <h5 className="text-lg font-bold text-tcd-blue mb-2">{talk.title}</h5>
            
            {talk.description && (
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                {talk.description}
              </p>
            )}

            <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-50">
              {talk.video && (
                <a href={talk.video} target="_blank" rel="noreferrer" className="inline-flex items-center text-sm font-medium text-white bg-red-600 hover:bg-red-700 px-3 py-1.5 rounded-md transition-colors shadow-sm">
                  <Play size={16} className="mr-2 fill-current" />
                  Watch Video
                </a>
              )}
              {talk.slides && (
                <a href={getAssetUrl(talk.slides)} target="_blank" rel="noreferrer" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-md transition-colors">
                  <FileText size={16} className="mr-2" />
                  Slides
                </a>
              )}
              {!talk.video && !talk.slides && (
                <span className="text-xs text-gray-400 italic flex items-center">
                  <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-2"></span>
                  No recording available
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
