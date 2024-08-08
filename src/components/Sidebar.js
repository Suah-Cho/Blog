import React from 'react';
import profileImage from '../images/profile.jpeg';

function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <aside className={`bg-white shadow-md w-64 ${isOpen ? 'block' : 'hidden'} md:flex flex-col justify-between`}>
      <div className="p-4 text-center">
        <div className="mt-10 mb-8">
          <img src={profileImage} alt="Profile Picture" className="w-32 h-32 rounded-full mx-auto mb-4" />
        </div>
        <nav>
          <ul>
            <li className="mb-6"><a href="#" className="text-lg hover:text-gray-700">Home</a></li>
            <li className="mb-6"><a href="#" className="text-lg hover:text-gray-700">About</a></li>
            <li className="mb-6"><a href="#" className="text-lg hover:text-gray-700">Blog</a></li>
            <li className="mb-6"><a href="#" className="text-lg hover:text-gray-700">CV</a></li>
          </ul>
        </nav>
      </div>
      <div className="p-4">
        <div className="flex justify-center space-x-8">
          <a href="https://github.com/Suah-Cho" target="_blank" rel="noopener noreferrer">
            <svg className="w-6 h-6" fill="#696969	" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.477 2 2 6.486 2 12.02c0 4.418 2.865 8.165 6.839 9.489.5.09.682-.217.682-.483 0-.237-.009-.866-.013-1.7-2.782.603-3.37-1.34-3.37-1.34-.454-1.156-1.11-1.465-1.11-1.465-.908-.621.07-.609.07-.609 1.002.07 1.53 1.033 1.53 1.033.893 1.534 2.345 1.09 2.915.833.091-.647.35-1.09.635-1.34-2.221-.252-4.555-1.11-4.555-4.947 0-1.093.39-1.988 1.029-2.689-.103-.253-.447-1.27.097-2.647 0 0 .84-.27 2.75 1.026A9.6 9.6 0 0112 5.803c.851.004 1.705.115 2.504.337 1.91-1.296 2.749-1.025 2.749-1.025.545 1.376.201 2.394.099 2.647.64.701 1.028 1.596 1.028 2.689 0 3.847-2.337 4.693-4.564 4.941.36.31.682.919.682 1.854 0 1.337-.012 2.417-.012 2.745 0 .268.18.577.688.479C19.135 20.182 22 16.437 22 12.02 22 6.486 17.523 2 12 2z"/>
            </svg>
          </a>
          <a href="https://www.instagram.com/joooswaaa_/" target="_blank" rel="noopener noreferrer">
            <svg className="w-6 h-6" fill="#696969" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.001 2C4.238 2 2 4.238 2 7v10c0 2.762 2.238 5 5.001 5h10c2.761 0 4.999-2.238 4.999-5V7c0-2.762-2.238-5-4.999-5h-10zm0 2h10c1.654 0 2.999 1.345 2.999 3v10c0 1.655-1.345 3-2.999 3h-10c-1.655 0-3-1.345-3-3V7c0-1.655 1.345-3 3-3zm9 1c-.552 0-1 .448-1 1s.448 1 1 1a1 1 0 100-2zm-5 2.5A5.506 5.506 0 006.5 12 5.506 5.506 0 0012 17.5 5.506 5.506 0 0017.5 12 5.506 5.506 0 0012 7.5zm0 2A3.504 3.504 0 0115.5 12 3.504 3.504 0 0112 15.5 3.504 3.504 0 018.5 12 3.504 3.504 0 0112 9.5z"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/%EC%88%98%EC%95%84-%EC%A1%B0-42b999276/" target="_blank" rel="noopener noreferrer">
            <svg className="w-6 h-6" fill="#696969" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.54a2.07 2.07 0 110-4.14 2.07 2.07 0 010 4.14zm14.91 12.91h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.94v5.67h-3.56V9h3.42v1.56h.05c.48-.91 1.66-1.87 3.42-1.87 3.66 0 4.33 2.41 4.33 5.56v6.2z"/>
            </svg>
          </a>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;