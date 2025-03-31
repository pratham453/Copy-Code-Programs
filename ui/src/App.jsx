import React from 'react';
import Header from './Components/Header';
import Main from './Components/Main';

const App = () => {
  return (
    <div className='bg-gray-100 min-h-screen flex flex-col'>
    <Header/>
    <Main/>
    </div>
  );
}

export default App;
