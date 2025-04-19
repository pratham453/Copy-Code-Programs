import React from "react";
import Program from "./Program";

export default function ProgramCard({ filteredPrograms }) {
  return (
    <div>
      {filteredPrograms && filteredPrograms.length > 0 ? 
      filteredPrograms.map((program) => (
        <Program
          key={program.id}
          id={program.id}
          title={program.title}
          description={program.program} // Assuming 'program' is the description
          code={program.program}
          category={program.typeId} // Assuming 'program' is also the code
        />
      ))
    : <p className="text-red-600 text-center">Not Available</p>
    }
    </div>
  );
}