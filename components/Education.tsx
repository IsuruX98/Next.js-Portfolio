import React from "react";

const Education = () => {
  const timelineData = [
    {
      date: "2021 - Present",
      title:
        "Bsc.Special (Hons) Information Technology Specialization - Software Engineering (3.5 CGPA)",
      description:
        "Currently reading for my Bachelors' Degree in Software Engineering at SriLanka Institute of Information Technology (SLIIT)",
    },
    {
      date: "2017 - 2018",
      title: "Pearson Diploma in Information Technology",
      description: "Completed in ESOFT, Galle",
    },
    {
      date: "2017 - 2018",
      title: "Pearson Diploma in English",
      description: "Completed in ESOFT, Galle",
    },
    {
      date: "2017",
      title: "Advanced Level (Index No -5854890) 2017 - Commerce Stream",
      description:
        "Passed with 2 C (Accounting, Business studies) and 1 S (Economics) Passes, Mahinda College, Galle",
    },
    {
      date: "2014",
      title: "G.C.E (O/L) Examination in 2014 (Index No – 41275888)",
      description: "Passed with 7A’s, 1B, 1C",
    },
  ];

  return (
    <div className="xl:px-36 lg:px-20 px-12 py-28 sm:mr-0 mr-[-80px]">
      <div className="mb-16">
        <h1 className="text-[16px] mb-4">TIME LINE</h1>
        <div className="text-4xl font-extrabold bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text">
          Education
        </div>
      </div>

      <div className="space-y-8 w-full relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-[8.75rem] md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
        {timelineData.map((item, index) => (
          <div key={index} className="relative">
            <div className="md:flex items-center md:space-x-4 mb-3">
              <div className="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow md:order-1 dark:bg-gray-800">
                  {/* You can customize the icon based on your needs */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                  >
                    <path
                      className="fill-emerald-500 dark:fill-indigo-400"
                      d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8Zm0 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z"
                    />
                  </svg>
                </div>
                <time className="font-medium text-xl text-indigo-500 md:w-28 dark:text-indigo-300">
                  {item.date}
                </time>
              </div>
              <div className="text-slate-500 ml-14 dark:text-gray-300">
                <span className="text-slate-900 font-bold dark:text-gray-100">
                  {item.title}
                </span>
              </div>
            </div>
            <div className="bg-white p-4 rounded border border-black text-slate-500 shadow ml-14 md:ml-44 dark:bg-gray-950 dark:border-gray-700 dark:text-gray-300">
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
