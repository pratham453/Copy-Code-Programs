import React, { useContext } from 'react'
import { MdDescription } from 'react-icons/md';
import { ProgramContext } from '../Store/Program_Store';
import ProgramCard from './ProgramCard';

const Main = () => {
  const [id ,setId] = React.useState(1);

    const { programs , categories } = useContext(ProgramContext) ;

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
          <ProgramCard filteredPrograms={filteredPrograms} />
        </div>
      </div>
  )
}

export default Main
