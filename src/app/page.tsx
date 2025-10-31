import React from 'react';

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-tr from-blue-50 to-indigo-200 px-6 py-24 relative overflow-hidden">
      {/* Floating 3D neural structure */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        {/* Integrate a canvas or SVG of a neural network */}
      </div>
      
      {/* Main container */}
      <div className="relative z-10 max-w-6xl mx-auto text-center space-y-8">
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-6 text-indigo-800 drop-shadow-lg">
          Welcome to SND Regenic
        </h1>
        <p className="text-lg sm:text-xl opacity-80 mb-8">
          Let&apos;s revolutionize the field of regenerative medicine through <span className="font-semibold text-emerald-800">re-construction of neural tissues</span> for millions needing healing.
        </p>
        
        {/* Country selection with 3D card effect */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {/* Japan */}
          <a
            href='https://groups.oist.jp/sites/default/files/imce/u104348/Lokesh_PII.pdf '
            className="bg-white backdrop-blur shadow-xl rounded-xl px-8 py-10 border-4 border-emerald-200 hover:scale-105 transition-transform duration-300 drop-shadow-2xl hover:border-emerald-500"
            style={{boxShadow: '0 6px 32px 0 rgba(60,255,150,0.15)'}}
          >
            {/* <img src="/images/japan.svg" alt="Japan" className="w-16 mx-auto mb-4" /> */}
            <h2 className="text-2xl font-bold text-emerald-700 mb-4">Japan Location</h2>
            <p className="text-base text-gray-600">SND Regenic Pvt. Ltd., Japan</p>
          </a>
          {/* India */}
          <a
  href="/PresentationIndia.pdf"      // Replace with your actual PDF path
  target="_blank"                   // Opens PDF in a new tab
  rel="noopener noreferrer"        // Security and performance best practice
  className="bg-white backdrop-blur shadow-xl rounded-xl px-8 py-10 border-4 border-indigo-200 hover:scale-105 transition-transform duration-300 drop-shadow-2xl hover:border-indigo-500"
  style={{ boxShadow: '0 6px 32px 0 rgba(60,120,255,0.2)' }}
>
  {/* <img src="/images/india.svg" alt="India" className="w-16 mx-auto mb-4" /> */}
  <h2 className="text-2xl font-bold text-indigo-700 mb-4">India Location</h2>
  <p className="text-base text-gray-600">SND Regenic Pvt. Ltd.</p>
</a>

          
        </div>
        
        {/* Highlights and features in animated 3D cards */}
        <div className="grid sm:grid-cols-3 gap-8">
          <div className="bg-white/90 rounded-2xl p-6 shadow-xl hover:scale-105 transition">
            <h3 className="text-xl font-semibold text-indigo-700 mb-2">
              What We Do
            </h3>
            <p className="text-gray-700">
              Tissue engineering, biomaterials & stem cells. Winners of 7 inventions, 6 patents, and 16 research papers.
            </p>
          </div>
          <div className="bg-white/90 rounded-2xl p-6 shadow-xl hover:scale-105 transition">
            <h3 className="text-xl font-semibold text-emerald-700 mb-2">
              Our Mission
            </h3>
            <p className="text-gray-700">
              Re-construction of neural tissues to treat neural injuries—helping more than 28 million patients globally.
            </p>
          </div>
          <div className="bg-white/90 rounded-2xl p-6 shadow-xl hover:scale-105 transition">
            <h3 className="text-xl font-semibold text-purple-700 mb-2">
              Clinical & Tech Milestones
            </h3>
            <p className="text-gray-700">
              GMP production, bio-ink, clinical protocols, and human trials—all supported by leading global universities and industries.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12">
          <a
            // href="/contact"
            href="/about"
            className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-indigo-700 transition"
          >
            Connect With Us & Join the Revolution
          </a>
        </div>
      </div>
    </section>
  );
}
