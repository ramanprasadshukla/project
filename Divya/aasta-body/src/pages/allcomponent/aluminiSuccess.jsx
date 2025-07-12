import React from "react";

const AlumniSuccess = () => {
  const exams = [
    { name: "NEET", count: 13 },
    { name: "JEE", count: 15 },
    { name: "CUET", count: 34 },
  ];

  return (
    <div className="bg-gray-50 py-10 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-mono font-bold text-gray-800 mb-4">
          Our Alumni’s Success Story
        </h1>
        <p className="text-gray-600 mb-8">
          Our brilliant alumni have achieved great success in various competitive exams:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {exams.map((exam) => (
            <div
              key={exam.name}
              className="bg-white shadow  rounded-lg p-6 flex flex-col items-center"
            >
              <h2 className="text-xl font-semibold text-gray-700 mb-2">
                {exam.name}
              </h2>
              <p className="text-3xl font-bold text-blue-600">
                {exam.count}
              </p>
              <span className="text-gray-500 mt-2">
                {exam.count} students cracked {exam.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlumniSuccess;
