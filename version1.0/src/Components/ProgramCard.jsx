import React from "react";
import Program from "./Program";

export default function ProgramCard({ filteredPrograms }) {
  return (
    <div>
      {filteredPrograms.map((program) => (
        <Program
          key={program.id}
          id={program.id}
          title={program.title}
          description={program.program} // Assuming 'program' is the description
          code={program.program} // Assuming 'program' is also the code
        />
      ))}
    </div>
  );
}