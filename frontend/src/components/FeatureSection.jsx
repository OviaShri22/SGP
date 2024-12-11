import React from 'react';

const features = [
  {
    title: "Robust Workflow",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    svgPath: "M35 20H24a1 1 0 00-1 1v22a1 1 0 001 1h18a1 1 0 001-1V28h-8v-8z",
    svgGradient: "M35 20v8h8z"
  },
  {
    title: "Robust Workflow",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    svgPath: "M46 23H19c-.552 0-1 .424-1 .947v17.106c0 .523.448.947 1 .947h27c.552 0 1-.424 1-.947V23.947c0-.523-.448-.947-1-.947z",
    svgGradient: "M46 23H19c-.552 0-1 .424-1 .947v17.106c0 .523.448.947 1 .947h27c.552 0 1-.424 1-.947V23.947c0-.523-.448-.947-1-.947z"
  },
  {
    title: "Robust Workflow",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    svgPath: "M27 29h-4a1 1 0 00-1 1v12a1 1 0 001 1h5V30a1 1 0 00-1-1z",
    svgGradient: "M43.882 28.133A2.986 2.986 0 0043 28h-6v-3c0-3.824-2.589-4.942-3.958-5A1 1 0 0032 21v4.638l-4 4.8V43h12.23a2.985 2.985 0 002.87-2.118l2.769-9a3 3 0 00-1.987-3.749z"
  },
  {
    title: "Robust Workflow",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    svgPath: "M32 24.691l-10.737-2.656a1.007 1.007 0 00-.87.17c-.247.19-.393.483-.393.795v17a1 1 0 00.737.965L32 43.764V24.691z",
    svgGradient: "M43.607 22.205a1.012 1.012 0 00-.87-.17L32 24.691v19.073l11.263-2.799A1 1 0 0044 40V23c0-.312-.146-.605-.393-.795z"
  },
  {
    title: "Robust Workflow",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    svgPath: "M26 21h12v11H26z",
    svgGradient: "M40 21h-4v10l-4-3-4 3V21h-4a3 3 0 00-3 3v16a3 3 0 003 3h16a3 3 0 003-3V24a3 3 0 00-3-3z"
  },
  {
    title: "Robust Workflow",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    svgPath: "M41.95 24.051A6.957 6.957 0 0037 22a6.956 6.956 0 00-5 2.102l-.05-.051A6.957 6.957 0 0027 22c-1...."
  }
];

const FeatureSection = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-6 border rounded-lg shadow-lg flex flex-col items-center text-center bg-white"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <svg className="w-12 h-12 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id={`gradient${index}`} x1="50%" y1="0%" x2="50%" y2="100%">
                  <stop stopColor="#FFF" offset="0%"></stop>
                  <stop stopColor="#E2EEFF" offset="100%"></stop>
                </linearGradient>
              </defs>
              <rect width="64" height="64" rx="32" fill="#5091EE"></rect>
              <use fill="url(#gradient)" xlinkHref={`#path${index}`}></use>
              <path id={`path${index}`} d={feature.svgPath} fill="#fff"></path>
            </svg>
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
