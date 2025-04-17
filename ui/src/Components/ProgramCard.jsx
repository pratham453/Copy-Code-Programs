import Program from './Program';

export default function ProgramCard({ filteredPrograms }) {
  return (
    <div className="flex flex-col gap-4 ">
      {filteredPrograms && filteredPrograms.length > 0 ? (
        filteredPrograms.map((program ) => {
          return (
            <Program
              key={program.title}
              id = {program.id}
              category={program.id}
              title={program.title}
              description={program.description}
            />
          );
        })
      ) : (
        <p className="text-red-500 text-center">No programs available.</p>
      )}
    </div>
  );
}
