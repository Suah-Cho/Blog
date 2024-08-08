import React from 'react';

function MainContent({ toggleSidebar }) {
  return (
    <div className="flex-1 p-6">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Blog Title</h1>
        <button className="md:hidden text-gray-700" onClick={toggleSidebar}>
          <svg className="w-6 h-6" fill="none" stroke="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </header>
      <main>
        <article className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Post Title</h2>
          <p className="text-gray-700 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet...</p>
        </article>
        {/* More articles can be added here */}
      </main>
    </div>
  );
}

export default MainContent;