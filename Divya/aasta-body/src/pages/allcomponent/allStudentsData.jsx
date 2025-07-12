import React, { useState, useEffect } from "react";

const Students = () => {
  // COUNTERS
  const [students, setStudents] = useState(0);
  const [classes, setClasses] = useState(0);
  const [teachers, setTeachers] = useState(0);
  const [alumini, setAlumini] = useState(0);

  useEffect(() => {
    const duration = 10000;
    const fps = 60;
    const totalFrames = Math.round((duration / 1000) * fps);

    let frame = 0;

    const studentTarget = 456;
    const classTarget = 12;
    const teacherTarget = 26;
    const aluminiTarget = 200;

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;

      setStudents(Math.round(studentTarget * progress));
      setClasses(Math.round(classTarget * progress));
      setTeachers(Math.round(teacherTarget * progress));
      setAlumini(Math.round(aluminiTarget * progress));

      if (frame === totalFrames) {
        clearInterval(counter);
      }
    }, 1000 / fps);

    return () => clearInterval(counter);
  }, []);

  return (
    <div className="bg-gray-50 py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <strong className="block text-gray-700 text-lg mb-2">
            Total Students
          </strong>
          <span className="text-4xl font-bold text-blue-600">
            {students}
          </span>
        </div>
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <strong className="block text-gray-700 text-lg mb-2">
            Total Classes
          </strong>
          <span className="text-4xl font-bold text-green-600">
            {classes}
          </span>
        </div>
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <strong className="block text-gray-700 text-lg mb-2">
            Total Teachers
          </strong>
          <span className="text-4xl font-bold text-purple-600">
            {teachers}
          </span>
        </div>
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <strong className="block text-gray-700 text-lg mb-2">
            Our Alumni
          </strong>
          <span className="text-4xl font-bold text-orange-600">
            {alumini}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Students;
