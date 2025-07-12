import React, { useState, useEffect } from "react";

const Students = () => {
  // COUNTERS
  const [students, setStudents] = useState(0);
  const [classes, setClasses] = useState(0);
  const [teachers, setTeachers] = useState(0);
  const [alumini, setAlumini] = useState(0);

  useEffect(() => {
    const duration = 10000; // 5 seconds
    const fps = 60;
    const totalFrames = Math.round((duration / 1000) * fps);

    let frame = 0;

    const studentTarget = 456;
    const classTarget = 12;
    const teacherTarget = 26;
    const alumini = 200;

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;

      setStudents(Math.round(studentTarget * progress));
      setClasses(Math.round(classTarget * progress));
      setTeachers(Math.round(teacherTarget * progress));
      setAlumini(Math.round(alumini * progress));

      if (frame === totalFrames) {
        clearInterval(counter);
      }
    }, 1000 / fps);

    return () => clearInterval(counter);
  }, []);

  return (
    <div className="flex justify-center items-center gap-8 p-10 bg-gray-50">
      <div className="bg-white w-full max-w-xs rounded-lg shadow p-6 text-center">
        <strong className="block text-gray-700 text-lg mb-2">
          Total Students
        </strong>
        <span className="text-3xl font-bold text-blue-600">{students}</span>
      </div>
      <div className="bg-white w-full max-w-xs rounded-lg shadow p-6 text-center">
        <strong className="block text-gray-700 text-lg mb-2">
          Total Classes
        </strong>
        <span className="text-3xl font-bold text-green-600">{classes}</span>
      </div>
      <div className="bg-white w-full max-w-xs rounded-lg shadow p-6 text-center">
        <strong className="block text-gray-700 text-lg mb-2">
          Total Teachers
        </strong>
        <span className="text-3xl font-bold text-purple-600">{teachers}</span>
      </div>
      <div className="bg-white w-full max-w-xs rounded-lg shadow p-6 text-center">
        <strong className="block text-gray-700 text-lg mb-2">
          Our Alumini's
        </strong>
        <span className="text-3xl font-bold text-purple-600">{alumini}</span>
      </div>
    </div>
  );
};

export default Students;
