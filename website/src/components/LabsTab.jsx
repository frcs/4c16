import React from 'react';
import { Link } from 'react-router-dom';
import { Terminal, GraduationCap, ChevronRight, Server } from 'lucide-react';
import { labsContent } from '../data/content';
import { getAssetUrl } from '../utils/url';
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
                to="/LabSystem"
                className="inline-flex items-center text-sm font-bold text-tcd-blue hover:text-tcd-blue-dark transition-colors group"
              >
                <Server size={16} className="mr-2" />
                Learn more about the infrastructure
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

      <div className="grid gap-6 md:grid-cols-2">
        <a href={getAssetUrl('handouts/PreparationPython3.pdf')} className="block group">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm group-hover:shadow-md transition-all duration-200 group-hover:border-tcd-blue">
            <h4 className="font-bold text-gray-900 mb-2 group-hover:text-tcd-blue flex items-center">
              Python 3 Resources <ChevronRight size={16} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-tcd-blue" />
            </h4>
            <p className="text-sm text-gray-500">Refresher material for Python 3 prior to starting 4C16.</p>
          </div>
        </a>
        <a href={getAssetUrl('handouts/4c16-lab-system-handbook.pdf')} className="block group">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm group-hover:shadow-md transition-all duration-200 group-hover:border-tcd-blue">
            <h4 className="font-bold text-gray-900 mb-2 group-hover:text-tcd-blue flex items-center">
              Lab System Handbook <ChevronRight size={16} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-tcd-blue" />
            </h4>
            <p className="text-sm text-gray-500">Instructions for Lab 0 and system usage guide.</p>
          </div>
        </a>
      </div>
    </div>
  );
}
