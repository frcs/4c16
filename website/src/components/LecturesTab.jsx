import React from 'react';
import { BookOpen, FileText, Play } from 'lucide-react';
import { lectures } from '../data/lectures';
import { getAssetUrl } from '../utils/url';
import videoImg from '../assets/slide-video.png';

export default function LecturesTab() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="border-b border-gray-200 pb-4">
         <h2 className="text-3xl font-bold text-tcd-blue">Lecture Schedule</h2>
         <p className="mt-2 text-gray-600">Access slides, tutorials, and handouts.</p>
      </div>

      {/* Featured Lecture Notes Card */}
      <div className="bg-gradient-to-r from-tcd-blue to-blue-800 rounded-xl shadow-lg text-white overflow-hidden relative">
         <div className="absolute top-0 right-0 p-8 opacity-10">
            <BookOpen size={120} />
         </div>
         <div className="p-8 md:p-10 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
               <div>
                  <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-400 bg-opacity-30 text-blue-50 mb-4 border border-blue-300 border-opacity-30">
                     Primary Reference
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white">4C16 - Deep Learning and its Applications</h3>
                  <p className="text-blue-100 text-lg mb-4">Comprehensive Online Lecture Notes</p>
                  <p className="text-blue-200 text-sm max-w-2xl mb-6 leading-relaxed">
                     Access the full set of interactive lecture notes, covering everything from the fundamentals of Machine Learning to advanced Deep Learning architectures.
                  </p>
                  <div className="flex flex-wrap items-center gap-4">
                     <a href="https://frcs.github.io/4C16-LectureNotes/" target="_blank" rel="noreferrer" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-tcd-blue bg-white hover:bg-gray-50 transition-colors shadow-sm">
                        <BookOpen className="mr-2" size={20} />
                        Read the Lecture Notes
                     </a>
                     <a href="https://doi.org/10.5281/zenodo.17954655" target="_blank" rel="noreferrer" className="text-xs text-blue-300 hover:text-white transition-colors">
                        DOI: 10.5281/zenodo.17954655
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </div>

      {/* Recorded Lectures Section */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 group">
        <div className="md:flex">
          <div className="md:flex-shrink-0 relative overflow-hidden">
            <img className="h-48 w-full object-cover md:w-72 transition-transform duration-500 group-hover:scale-105" src={videoImg} alt="Lecture Videos" />
            <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-0 transition-opacity"></div>
          </div>
          <div className="p-8 flex flex-col justify-center">
            <div className="uppercase tracking-wide text-xs text-tcd-blue font-bold">Video Archive</div>
            <a href="https://goo.gl/DP2jnJ" target="_blank" rel="noreferrer" className="block mt-1 text-xl leading-tight font-bold text-gray-900 hover:text-tcd-blue transition-colors">
              Watch Previous Years' Lectures
            </a>
            <p className="mt-2 text-gray-600">
              Catch up on key concepts or review complex topics with our archive of recorded lectures from previous years available on YouTube.
            </p>
            <div className="mt-4">
               <a href="https://www.youtube.com/playlist?list=PLIo1iEzl5iB9NkulNR0X5vXN8AaEKglWT" target="_blank" rel="noreferrer" className="inline-flex items-center text-red-600 hover:text-red-700 font-medium">
                  <Play size={16} className="mr-2 fill-current" />
                  Open Playlist
               </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-md border border-gray-200">
        <ul className="divide-y divide-gray-200">
          {lectures.map((lecture) => (
            <li key={lecture.id}>
              <div className="px-4 py-4 sm:px-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="flex-shrink-0 h-8 w-8 flex items-center justify-center bg-gray-100 rounded-full text-sm font-bold text-gray-500">
                      {lecture.id}
                    </span>
                    <div className="ml-4">
                      <p className="text-lg font-medium text-tcd-blue truncate">{lecture.title}</p>
                      <p className="mt-1 text-sm text-gray-600">{lecture.description}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 sm:flex sm:justify-between">
                  <div className="flex flex-wrap gap-2 ml-12">
                    {lecture.resources.map((res, idx) => (
                      <React.Fragment key={idx}>
                        <a
                          href={getAssetUrl(res.url)}
                          className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-blue-50 text-tcd-blue hover:bg-blue-100 transition-colors border border-blue-100"
                        >
                          <FileText size={12} className="mr-1.5" />
                          {res.type === 'slides' ? 'Slides' : res.text || 'Resource'}
                        </a>
                        {res.solution && (
                          <a
                            href={getAssetUrl(res.solution)}
                            className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors border border-emerald-100"
                          >
                            <FileText size={12} className="mr-1.5" />
                            Solutions
                          </a>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="text-center text-sm text-gray-500 pt-4">
        <p>
          Previous year slides can be found <a href="https://github.com/frcs/4C16-2425" className="text-tcd-blue hover:underline">here</a>.
        </p>
      </div>
    </div>
  );
}