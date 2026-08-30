import React from 'react';
import { Link } from 'react-router-dom';
import { Terminal, GraduationCap, ChevronRight, Server } from 'lucide-react';
import { labsContent } from '../data/content';
import envImg from '../assets/lab-env.jpg';
import projectsImg from '../assets/slide-labs.png';

export default function LabsTab() {
  return (
    <div className="max-w-4xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-tcd-blue">Lab & Resources</h2>
        <p className="mt-2 text-gray-600">Everything you need for the practical sessions.</p>
      </div>

      <div className="bg-white shadow-sm rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
         <div className="md:grid md:grid-cols-2">
           <div className="p-8 flex flex-col justify-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Terminal className="mr-2 text-tcd-blue" /> {labsContent.labEnvironment.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {labsContent.labEnvironment.description}
              </p>
              <div className="bg-blue-50 border-l-4 border-tcd-blue p-4 rounded-r-md mb-6">
                <p className="text-sm text-tcd-blue font-medium">
                  {labsContent.labEnvironment.highlight}
                </p>
              </div>
              <Link 
                to="/lab-system"
                className="inline-flex items-center text-sm font-bold text-tcd-blue hover:text-tcd-blue-dark transition-colors group"
              >
                <Server size={16} className="mr-2" />
                Lab System: Student Guide & Handbook
                <ChevronRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
              </Link>
           </div>
           <div className="bg-gray-50 flex items-center justify-center p-8 border-l border-gray-100">
              <img src={envImg} alt="Lab Environment Diagram" className="rounded-lg shadow-sm max-w-full h-auto border border-gray-200" />
           </div>
         </div>
      </div>

      <div className="bg-white shadow-sm rounded-xl border border-gray-200 p-8 hover:shadow-md transition-shadow">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <GraduationCap className="mr-2 text-tcd-blue" /> {labsContent.projects.title}
          </h3>
          <div className="grid md:grid-cols-2 gap-10 items-center">
              <img src={projectsImg} alt="Course Projects" className="rounded-lg shadow-sm border border-gray-100" />
              <div>
                  <p className="text-gray-600 mb-6 text-lg">
                      {labsContent.projects.intro}
                  </p>
                  <ul className="space-y-4">
                      {labsContent.projects.list.map((item, index) => (
                        <li key={index} className="flex items-start">
                            <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                                <ChevronRight className="h-4 w-4 text-tcd-blue" />
                            </div>
                            <span className="ml-3 text-gray-700 font-medium">{item}</span>
                        </li>
                      ))}
                  </ul>
              </div>
          </div>
      </div>

      {/* Student Guide Banner */}
      <div className="bg-blue-50/60 border border-blue-100 rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h4 className="font-semibold text-gray-900 text-base">
            4C16 Lab System: Student Guide
          </h4>
          <p className="text-sm text-gray-600 mt-1">
            Learn how your Colab environment, Trinity Google Drive, Forgejo Git repository, and autograding pipeline work together.
          </p>
        </div>
        <Link
          to="/lab-system"
          className="flex-shrink-0 inline-flex items-center px-4 py-2 rounded-lg bg-tcd-blue text-white font-medium text-sm hover:bg-tcd-blue-dark transition-colors shadow-xs"
        >
          Open Student Guide
          <ChevronRight size={16} className="ml-1.5" />
        </Link>
      </div>
    </div>
  );
}
