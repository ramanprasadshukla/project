import React, { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

const PdfArchive = () => {
  // Dummy list of PDFs
  const [pdfs] = useState([
    {
      id: 1,
      name: "Dummy PDF 1",
      url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    },
    {
      id: 2,
      name: "Sample PDF 2",
      url: "https://www.orimi.com/pdf-test.pdf",
    },
    {
      id: 3,
      name: "Report 2025",
      url: "https://unec.edu.az/application/uploads/2014/12/pdf-sample.pdf",
    },
  ]);

  const [showList, setShowList] = useState(true);

  const toggleList = () => {
    setShowList((prev) => !prev);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      {/* Header with Eye icon */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">PDF Archive</h1>
        <button
          onClick={toggleList}
          className="text-gray-700 hover:text-gray-900"
        >
          {showList ? (
            <EyeSlashIcon className="h-6 w-6" />
          ) : (
            <EyeIcon className="h-6 w-6" />
          )}
        </button>
      </div>

      {showList && (
        <>
          {pdfs.length === 0 ? (
            <p className="text-gray-500 text-center">No PDFs available.</p>
          ) : (
            <ul className="space-y-4">
              {pdfs.map((pdf) => (
                <li
                  key={pdf.id}
                  className="flex justify-between items-center bg-gray-50 p-4 rounded shadow"
                >
                  <span className="text-gray-700 font-medium">
                    {pdf.name}
                  </span>
                  <div className="flex gap-2">
                    {/* View Button */}
                    <a
                      href={pdf.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm"
                    >
                      View
                    </a>
                    {/* Download Button */}
                    <a
                      href={pdf.url}
                      download
                      className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm"
                    >
                      Download
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
};

export default PdfArchive;
