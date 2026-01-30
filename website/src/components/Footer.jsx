import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-4 mb-4 md:mb-0">
                  <img src="https://www.tcd.ie/media/tcd/site-assets/images/tcd-logo.png" alt="Trinity College Dublin" className="h-10 opacity-80 grayscale hover:grayscale-0 transition-all" />
                  <div className="h-8 w-px bg-gray-300"></div>
                  <span className="text-sm font-semibold text-gray-500">School of Engineering</span>
              </div>
              <p className="text-center md:text-right text-sm text-gray-500">
                  &copy; {new Date().getFullYear()} François Pitié.<br/>
                  EEU44C16/EE5C16 Deep Learning.
              </p>
          </div>
      </div>
    </footer>
  );
}
