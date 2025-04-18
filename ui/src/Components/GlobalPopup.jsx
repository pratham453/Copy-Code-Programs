import { useContext, useEffect } from "react";
import { ProgramContext } from "../Store/Program_Store";
import Input from "./Input"; // Import Input here

export default function GlobalPopup() {
  const { popup, setPopup, editId, programs } = useContext(ProgramContext);

  useEffect(() => {
    if (popup) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = ''; // Or 'auto' depending on your default
    }

    // Cleanup function to reset overflow when the component unmounts
    return () => {
      document.body.style.overflow = '';
    };
  }, [popup]);

  if (!popup) {
    return null;
  }

  const currentProgram = programs.find((program) => program.id === editId);

  let content = null;

  content = (
    <Input
      programCode={currentProgram?.code}
      programTitle={currentProgram?.title}
      programDescription={currentProgram?.description}
      onClose={() => setPopup(false)} // Pass the onClose prop
    />
  );

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
        <div className="bg-white rounded-md p-8 z-10 relative">{content}</div>
      </div>
    </>
  );
}