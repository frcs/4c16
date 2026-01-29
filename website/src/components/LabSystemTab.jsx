import React from 'react';
import { Server, Shield, Cpu, Code } from 'lucide-react';
import { labSystemContent } from '../data/content';

export default function LabSystemTab() {
  const icons = [Cpu, Shield, Code, Server];

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="border-b border-gray-200 pb-4 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-tcd-blue">{labSystemContent.title}</h2>
        <p className="mt-4 text-gray-600 text-lg leading-relaxed">
          {labSystemContent.overview}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {labSystemContent.features.map((feature, index) => {
          const Icon = icons[index % icons.length];
          return (
            <div key={index} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-tcd-blue">
                <Icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>

      <div className="bg-tcd-blue text-white rounded-2xl p-8 md:p-12">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Architecture Design</h3>
          <p className="text-blue-100 mb-0 leading-relaxed">
            The infrastructure is designed to abstract away the complexity of cloud resource management, 
            allowing students to focus entirely on the machine learning challenges. By utilizing 
            containerized environments and automated Git workflows, we ensure a consistent and 
            scalable experience for all participants.
          </p>
        </div>
      </div>
    </div>
  );
}
