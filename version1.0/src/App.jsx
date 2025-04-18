import React from 'react';
import Header from './Important/Header';
import StoreContext from './Store/StoreContext'; // Import the default export
import GlobalPopup from './Important/GlobalPopup';
import Main from "./Important/Main"
const App = () => {
  return (
    <StoreContext> {/* Use StoreContext as a JSX element */}
      <div>
        <Header />
        <Main/>
        {/* Other components that need access to the context will go here */}
        <GlobalPopup/>
      </div>
    </StoreContext>
  );
};

export default App;