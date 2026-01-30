import React from 'react';
import { GraduationCap, Terminal, User } from 'lucide-react';
import { homeContent } from '../data/content';

export default function HomeTab() {
    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            
            {/* Title Section - Full Width */}
            
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-8 leading-tight">
                <span className="block">Deep Learning</span>
                <span className="block text-[0.8em] font-medium text-gray-500 mt-3">
                    & Its Applications
                </span>
            </h1>
            
            
            <div className="flex flex-col lg:flex-row gap-12">
                {/* Left Column: Main Prose (60%) */}
                <div className="lg:w-3/5 space-y-12">
                    <section className="prose prose-blue max-w-none text-gray-600">
                        <p className="text-xl leading-relaxed">
                            This module is comprehensive introduction course to Machine Learning (ML), with a specialised focus on the architecture and power of Deep Learning. Offered by the Department of <a href="https://www.tcd.ie/eleceng/" className="text-tcd-blue hover:underline mx-1 font-semibold">Electronic & Electrical Engineering</a>, the course is designed for fourth and fifth-year students at <a href="https://www.tcd.ie" className="text-tcd-blue hover:underline mx-1 font-semibold">Trinity College Dublin</a> looking to master the technology defining the modern era.
                        </p>
                        <p className="text-xl leading-relaxed mt-3">
                            Deep Learning is the engine of the AI revolution. Whether it is the creative power of Generative AI or the reasoning capabilities of AI assistants like ChatGPT, modern breakthroughs are, at their core, Deep Learning successes. This course moves beyond the headlines to show you how these systems actually work.
                        </p>
                        <p className="text-xl leading-relaxed mt-3">
                            We begin with the foundations—Least Squares, Logistic Regression, and core classification—before diving into the neural architectures defining the future: from CNNs for computer vision to the Transformers that underpin today’s Large Language Models.
                            </p>
                    </section>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4 text-tcd-blue">
                                <GraduationCap size={20} />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Modern Curriculum</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                From Least Squares to Transformers. The material is constructed in collaboration with leading industrial practitioners including Google, YouTube, and Intel.

                        </p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center mb-4 text-emerald-600">
                                <Terminal size={20} />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Hands-on Labs</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">{homeContent.handsOnLabs}</p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center">
                        <figure>
                            <img src="./assets/machine_learning.png" alt="XKCD Machine Learning Comic" className="max-w-xs w-full rounded-lg shadow-sm border border-gray-200" />
                            <figcaption className="text-center mt-2">
                                <a href="https://xkcd.com/1838/" target="_blank" rel="noreferrer" className="text-xs text-gray-400 hover:text-tcd-blue transition-colors">
                                    https://xkcd.com/1838/
                                </a>
                            </figcaption>
                        </figure>
                    </div>
                </div>

                {/* Right Column: Instructors (40%) */}
                <div className="lg:w-2/5 space-y-8">
                    <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 sticky top-24">
                        <h2 className="text-2xl font-bold text-tcd-blue mb-6 border-b border-gray-200 pb-2">
                            Instructors
                        </h2>
                        
                        <div className="space-y-6">
                            {homeContent.instructors.people.map((person, idx) => (
                                <div key={idx} className="flex items-start space-x-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center border border-gray-200 text-gray-400 shadow-sm overflow-hidden">
                                            {person.image ? (
                                                <img src={person.image} alt={person.name} className="w-full h-full object-cover" />
                                            ) : (
                                                <User size={32} />
                                            )}
                                        </div>
                                    </div>
                                    <div className="pt-2">
                                        <h3 className="text-lg font-bold text-gray-900 leading-tight">                      {person.link ? (
                                            <a href={person.link} target="_blank" rel="noreferrer" className="hover:text-tcd-blue hover:underline decoration-2 underline-offset-2 transition-all">
                                                {person.name}
                                            </a>
                                        ) : (
                                            person.name
                                        )}
                                        </h3>
                                        <p className="text-sm text-tcd-blue font-medium">{person.role}</p>
                                        {person.description && (
                                            <p className="text-sm text-gray-500 mt-1">{person.description}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Team Photo 
                            <div className="mt-8 pt-6 border-t border-gray-200">
                            <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Instructor</h4>
                            <img 
                            src="./assets/slide-team.png" 
                            alt="4C16 Team" 
                            className="w-full rounded-lg shadow-sm border border-gray-200 bg-white"
                            />
                            </div>*/}
                        </div>
                        </div>
                        </div>
                        </div>
                        );
                        }
