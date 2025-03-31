import React from 'react'
import Program from './Program';
import { MdDescription } from 'react-icons/md';

const Main = () => {
  const [id ,setId] = React.useState(1);

    // Categories and their respective descriptions
    const categories = [
      { id: 1, name: "MC", description: "Microcontroller Lab Programs" },
      { id: 2, name: "Latex", description: "Latex Lab Programs" },
      { id: 3, name: "Ada", description: "Algorithm Design & Analysis Programs" },
    ];
    
  // Programs for each category
    const programs = [
      // { id: 1, name: "MC", title: "Blinking LED", description: "A simple program to blink an LED using a microcontroller." },
      // { id: 2, name: "MC", title: "PWM Control", description: "A program to control the brightness of an LED using PWM." },
      // { id: 3, name: "Latex", title: "Document Formatting", description: "Learn how to format documents using LaTeX." },
      // { id: 4, name: "Latex", title: "Math Equations", description: "Using LaTeX for writing mathematical equations." },
      // { id: 5, name: "Ada", title: "Dijkstra's Algorithm", description: "Implementing Dijkstra’s shortest path algorithm." },
      // { id: 6, name: "Ada", title: "Knapsack Problem", description: "Solving the knapsack problem using dynamic programming." },
    ];

    const selectedCategory = categories.find((cat) => cat.id === id);
    const filteredPrograms = programs.filter((program) => program.name === selectedCategory?.name);

  return (
    <div className='bg-yellow-100 flex-1 flex flex-col items-center justify-center'>
      <h1 className='text-4xl font-bold font-mono mb-8'>Lab Programs</h1>
      <div className="w-[90%] bg-gray-500 grid gap-x-2 mb-2 grid-cols-3 p-2 rounded">
        {categories.map(category => {
          return (
            <div className={`text-center p-2 rounded cursor-pointer font-semibold  ${id === category.id ? 'bg-yellow-300' : ''} 
              hover:bg-yellow-400 transition`} 
              key={category.id}
              onClick={() => setId(category.id)}
              >
                {category.name}
            </div>
          )
        })}
      </div>
      <div className='w-[90%]  border rounded p-4 '>
        <h3 className='text-[20px]'>{selectedCategory?.description}</h3>
        <p className='mb-4'>Explore {selectedCategory?.name} lab programs with full Code.</p>

          {/** text and controls  */}
          <div className='flex flex-col gap-4 '>
          {/* <Program category={selectedCategory?.name} /> */}
          {filteredPrograms.length > 0 ? (
            filteredPrograms.map((program)=>{
              return (
                <Program key={program.title} category={program.id} title={program.title} description={program.description} />
              )
            })
          )
        :(
          <p className="text-red-500 text-center">No programs available.</p>
          )}
          </div>
        </div>
      </div>
  )
}

export default Main
