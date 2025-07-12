import React, { useEffect, useRef, useState } from "react";
import Students  from "./allcomponent/allStudentsData";
import AlumniSuccess from "./allcomponent/aluminiSuccess";
import AluminiScrolling from "./allcomponent/aluminiScrolling";
import PdfArchive from "./allcomponent/pdfArchive";

function Alumini() {

  return(
    <div>
       <div>
          <AluminiScrolling />
       </div>
      <div>
        <h1 className="text-center text-4xl font-bold  font-mono from-neutral-200  text-blue-950" >Our Students</h1>
         <Students />
      </div>
       <div>
        <AlumniSuccess />
       </div>
       <div>
        <h1 className="text-center text-4xl font-bold font-mono text-blue-950" >Our Alumini Data</h1>

        <PdfArchive />
       </div>
    </div>
  );
}

export default Alumini;

