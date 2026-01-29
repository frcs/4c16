import React, { useState } from 'react';
import { BookOpen, Terminal, FileText, ChevronRight, GraduationCap, Play, User, Calendar } from 'lucide-react';

const lectures = [
  { id: '00', title: 'Introduction', resources: [{ type: 'slides', url: '/handouts/handout-00-intro.pdf' }] },
  { id: '01', title: 'Linear Regression/Least Squares', resources: [
    { type: 'slides', url: '/handouts/handout-01-linear-regression.pdf' },
    { type: 'tutorial', text: 'Linear Algebra', url: '/handouts/tutorial-00-linear-algebra.pdf', solution: '/handouts/tutorial-00-linear-algebra-solutions.pdf' },
    { type: 'tutorial', text: 'Least Squares', url: '/handouts/tutorial-01-linear-regression.pdf', solution: '/handouts/tutorial-01-linear-regression-solutions.pdf' }
  ]},
  { id: '02', title: 'Logistic Regression', resources: [{ type: 'slides', url: '/handouts/handout-02-logistic-regression.pdf' }] },
  { id: '03', title: 'Classic Classifiers', resources: [{ type: 'slides', url: '/handouts/handout-03-classic-classifiers.pdf' }] },
  { id: '04', title: 'Evaluating Classifier Performance', resources: [{ type: 'slides', url: '/handouts/handout-04-evaluating-classifier-performance.pdf' }] },
  { id: '05', title: 'FeedForward Neural Networks', resources: [{ type: 'slides', url: '/handouts/handout-05-deep-feedforward-networks.pdf' }] },
  { id: '06', title: 'Convolutional Neural Networks', resources: [{ type: 'slides', url: '/handouts/handout-06-convolutional-neural-networks.pdf' }] },
  { id: '07', title: 'Advances in Network Architectures', resources: [{ type: 'slides', url: '/handouts/handout-07-advances-in-network-architectures.pdf' }] },
  { id: '08', title: 'Recurrent Neural Networks', resources: [{ type: 'slides', url: '/handouts/handout-08-recurrent-neural-networks.pdf' }] },
  { id: '09', title: 'Attention Mechanism and Transformer Model', resources: [{ type: 'slides', url: '/handouts/handout-09-transformers.pdf' }] },
  { id: '10', title: 'Generative Models', resources: [{ type: 'slides', url: '/handouts/handout-10-generative-models.pdf' }] },
  { id: '11', title: 'Large Language Models', resources: [{ type: 'slides', url: '/handouts/handout-11-large-language-models.pdf' }] },
];

const keynotes = [
  {
    year: '2018/19',
    talks: [
      {
        speaker: 'Peter Barry',
        affiliation: 'Jaguar Land Rover',
        title: 'Automated Driving and AI',
        date: 'Nov 1st',
        description: 'Chief Software Architect Autonomous Driving at Jaguar Land Rover.',
      },
      {
        speaker: 'Professor Linda Hogan',
        affiliation: 'Trinity College Dublin',
        title: 'Ethics of Automation',
        date: 'Nov 21st',
        description: 'Ethicist with extensive experience in research and teaching in pluralist and multi-religious contexts.',
        video: 'https://youtu.be/wr1P0qK_nWA',
      },
      {
        speaker: 'Michaela Blott',
        affiliation: 'Xilinx',
        title: 'Machine Learning & FPGAs',
        date: 'Nov 22nd',
        description: 'Principal Engineer and Engineering Director at Xilinx Ireland. Expert in FPGA and board-level design.',
        video: 'https://youtu.be/kzVvrM7feJQ',
      },
      {
        speaker: 'George Toderici',
        affiliation: 'Google Research',
        title: 'Recent Advances in Neural Net Architectures',
        date: 'Nov 28th',
        description: 'Tech Lead / Manager at Google, focusing on lossy image compression and beyond.',
      },
    ]
  },
  {
    year: '2017/18',
    talks: [
      {
        speaker: 'Michaela Blott',
        affiliation: 'Xilinx',
        title: 'Industry Keynote',
        date: 'Nov 23rd',
        video: 'https://youtu.be/pIVh-4tqjPc',
        slides: '/keynotes/4c16-keynote-23-11-2017-Michaela_Blott-Xilinx.pdf',
      },
      {
        speaker: 'Dr. George Toderici',
        affiliation: 'Google Research',
        title: 'Industry Keynote',
      },
      {
        speaker: 'Dr. Sofiane Yous',
        affiliation: 'Intel/Movidius',
        title: 'Industry Keynote',
      },
    ]
  }
];

function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-900 text-white p-2 rounded-lg">
                <span className="font-bold text-xl tracking-tight">4C16</span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-lg leading-tight">Deep Learning</span>
                <span className="text-xs text-gray-500 uppercase tracking-wider">Trinity College Dublin</span>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              {['home', 'lectures', 'labs', 'keynotes'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`capitalize px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeTab === tab
                      ? 'text-blue-900 bg-blue-50'
                      : 'text-gray-600 hover:text-blue-900 hover:bg-gray-50'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {activeTab === 'home' && (
          <div className="space-y-12 animate-in fade-in duration-500">
            <section className="prose prose-blue max-w-none">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl mb-6">
                Machine Learning & Deep Learning
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                4C16/5C16 is a course on Machine Learning (ML), with a focus on Deep Learning. 
                It is a fourth and fifth year module offered by the 
                <a href="https://www.tcd.ie/eleceng/" className="text-blue-600 hover:underline mx-1">Electronic & Electrical Engineering</a>
                department to the undergraduate students of 
                <a href="https://www.tcd.ie" className="text-blue-600 hover:underline mx-1">Trinity College Dublin</a>.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 my-12">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mb-4 text-indigo-600">
                    <GraduationCap size={20} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Modern Curriculum</h3>
                  <p className="text-gray-600">
                    From Least Squares to Transformers. The material is constructed in collaboration with leading industrial practitioners including Google, YouTube, and Movidius.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mb-4 text-emerald-600">
                    <Terminal size={20} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Hands-on Labs</h3>
                  <p className="text-gray-600">
                    Unique environment connecting to Google Cloud Platform or Colab. Labs use Keras and are automatically assessed using Git.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Course Overview</h2>
              <p className="text-gray-600 mb-4">
                Although Deep Learning has been around for quite a while, it has recently become a disruptive technology 
                that has been unexpectedly taking over operations of technology companies around the world.
              </p>
              <p className="text-gray-600 mb-4">
                The course starts with an introduction to essential aspects of Machine Learning, including Least Squares, 
                Logistic Regression and popular classification techniques. Then it dives into Neural Nets, including 
                Feed Forward, CNNs, RNNs, and Transformers.
              </p>
            </section>
          </div>
        )}

        {activeTab === 'lectures' && (
          <div className="space-y-8 animate-in fade-in duration-500">
            <div className="flex justify-between items-end border-b border-gray-200 pb-4">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Lecture Schedule</h2>
                <p className="mt-2 text-gray-600">Access slides, tutorials, and handouts.</p>
              </div>
              <a href="https://frcs.github.io/4C16-LectureNotes" target="_blank" rel="noreferrer" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-900 hover:bg-blue-800">
                <BookOpen className="mr-2" size={16} />
                Full Lecture Notes
              </a>
            </div>

            {/* Recorded Lectures Section */}
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                  <img className="h-48 w-full object-cover md:w-64" src="./assets/slide-video.png" alt="Lecture Videos" />
                </div>
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Video Archive</div>
                  <a href="https://goo.gl/DP2jnJ" target="_blank" rel="noreferrer" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
                    Watch Previous Years' Lectures
                  </a>
                  <p className="mt-2 text-gray-500">
                    Catch up on key concepts or review complex topics with our archive of recorded lectures from previous years available on YouTube.
                  </p>
                  <div className="mt-4">
                     <a href="https://goo.gl/DP2jnJ" target="_blank" rel="noreferrer" className="inline-flex items-center text-red-600 hover:text-red-700 font-medium">
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
                          <span className="flex-shrink-0 h-8 w-8 flex items-center justify-center bg-gray-100 rounded-full text-sm font-medium text-gray-500">
                            {lecture.id}
                          </span>
                          <p className="ml-4 text-lg font-medium text-blue-900 truncate">{lecture.title}</p>
                        </div>
                      </div>
                      <div className="mt-4 sm:flex sm:justify-between">
                        <div className="flex flex-wrap gap-2 ml-12">
                          {lecture.resources.map((res, idx) => (
                            <React.Fragment key={idx}>
                              <a
                                href={res.url}
                                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors"
                              >
                                <FileText size={12} className="mr-1" />
                                {res.type === 'slides' ? 'Slides' : res.text || 'Resource'}
                              </a>
                              {res.solution && (
                                <a
                                  href={res.solution}
                                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 hover:bg-green-200 transition-colors"
                                >
                                  <FileText size={12} className="mr-1" />
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
                Previous year slides can be found <a href="https://github.com/frcs/4C16-2425" className="text-blue-600 hover:underline">here</a>.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'labs' && (
          <div className="max-w-4xl mx-auto space-y-12 animate-in fade-in duration-500">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Lab & Resources</h2>
              <p className="mt-2 text-gray-600">Everything you need for the practical sessions.</p>
            </div>

            <div className="bg-white shadow-sm rounded-lg border border-gray-200 overflow-hidden">
               <div className="md:grid md:grid-cols-2">
                 <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <Terminal className="mr-2 text-blue-900" /> Lab Environment
                    </h3>
                    <p className="text-gray-600 mb-4">
                      We have designed a unique environment specifically for this course so that students can learn best industry practices.
                      Our web platform can transparently connect students to a Google Cloud Platform cluster or Colab via web based terminal/editor/Jupyter sessions.
                    </p>
                    <div className="bg-blue-50 border-l-4 border-blue-900 p-4">
                      <p className="text-sm text-blue-800">
                        Labs use the <strong>Keras</strong> framework and are automatically assessed using Git to give immediate feedback.
                      </p>
                    </div>
                 </div>
                 <div className="bg-gray-50 flex items-center justify-center p-4">
                    <img src="./assets/slide-lab-env.png" alt="Lab Environment Diagram" className="rounded shadow-sm max-w-full h-auto" />
                 </div>
               </div>
            </div>

            <div className="bg-white shadow-sm rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Course Projects</h3>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <img src="./assets/slide-labs.png" alt="Course Projects" className="rounded-lg shadow-sm border border-gray-100" />
                    <div>
                        <p className="text-gray-600 mb-4">
                            Students will work on real-world challenges including:
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <ChevronRight className="flex-shrink-0 h-5 w-5 text-blue-500" />
                                <span className="ml-2 text-gray-700">Image classification with Deep Neural Networks</span>
                            </li>
                            <li className="flex items-start">
                                <ChevronRight className="flex-shrink-0 h-5 w-5 text-blue-500" />
                                <span className="ml-2 text-gray-700">Self-driving car simulation (Udacity)</span>
                            </li>
                            <li className="flex items-start">
                                <ChevronRight className="flex-shrink-0 h-5 w-5 text-blue-500" />
                                <span className="ml-2 text-gray-700">Text generation and detection with RNNs</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <a href="/handouts/PreparationPython3.pdf" className="block group">
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm group-hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 flex items-center">
                    Python 3 Resources <ChevronRight size={16} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h4>
                  <p className="text-sm text-gray-500">Refresher material for Python 3 prior to starting 4C16.</p>
                </div>
              </a>
              <a href="/handouts/4c16-lab-system-handbook.pdf" className="block group">
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm group-hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 flex items-center">
                    Lab System Handbook <ChevronRight size={16} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h4>
                  <p className="text-sm text-gray-500">Instructions for Lab 0 and system usage guide.</p>
                </div>
              </a>
            </div>
          </div>
        )}

        {activeTab === 'keynotes' && (
          <div className="space-y-10 animate-in fade-in duration-500">
            <div className="border-b border-gray-200 pb-4">
              <h2 className="text-3xl font-bold text-gray-900">Industry Keynotes</h2>
              <p className="mt-2 text-gray-600">Guest lectures from leading practitioners at Google, YouTube, Movidius, and more.</p>
            </div>

            {keynotes.map((yearGroup, index) => (
              <div key={index} className="space-y-6">
                <div className="flex items-center space-x-2">
                  <h3 className="text-xl font-bold text-blue-900">{yearGroup.year} Series</h3>
                  <div className="h-px bg-gray-200 flex-grow"></div>
                </div>
                
                <div className="grid gap-6 md:grid-cols-2">
                  {yearGroup.talks.map((talk, i) => (
                    <div key={i} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="bg-blue-100 p-2 rounded-full text-blue-700">
                            <User size={20} />
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900">{talk.speaker}</h4>
                            <span className="text-sm text-gray-500 font-medium">{talk.affiliation}</span>
                          </div>
                        </div>
                        {talk.date && (
                          <div className="flex items-center text-xs text-gray-400 bg-gray-50 px-2 py-1 rounded">
                            <Calendar size={12} className="mr-1" />
                            {talk.date}
                          </div>
                        )}
                      </div>
                      
                      <h5 className="text-lg font-semibold text-gray-800 mb-2">{talk.title}</h5>
                      
                      {talk.description && (
                        <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                          {talk.description}
                        </p>
                      )}

                      <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-50">
                        {talk.video && (
                          <a href={talk.video} target="_blank" rel="noreferrer" className="inline-flex items-center text-sm font-medium text-red-600 hover:text-red-700 bg-red-50 hover:bg-red-100 px-3 py-1.5 rounded-md transition-colors">
                            <Play size={16} className="mr-2 fill-current" />
                            Watch Video
                          </a>
                        )}
                        {talk.slides && (
                          <a href={talk.slides} target="_blank" rel="noreferrer" className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-800 bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-md transition-colors">
                            <FileText size={16} className="mr-2" />
                            Slides
                          </a>
                        )}
                        {!talk.video && !talk.slides && (
                          <span className="text-xs text-gray-400 italic">No recording available</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

      </main>

      <footer className="bg-white border-t border-gray-200 mt-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Trinity College Dublin. 4C16/5C16 Deep Learning.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
