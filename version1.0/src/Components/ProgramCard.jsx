import React from "react";
import Program from "./Program";

export default function ProgramCard({ filteredPrograms }) {
  return (
    <div className="flex flex-col gap-y-6">
      {filteredPrograms && filteredPrograms.length > 0 ? (
        filteredPrograms.map((program) => (
          <Program
            key={program.id}
            id={program.id}
            title={program.title}
            description={program.desc} // Assuming 'program' is the description
            code={program.program}
            category={program.typeId}
            lastUpdated={program.lastUpdated} // Pass lastUpdated as a prop
          />
        ))
      ) : (
        <p className="text-red-600 text-center">Not Available</p>
      )}
    </div>
  );
}