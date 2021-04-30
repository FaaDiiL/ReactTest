import { useState } from 'react'

import ComponentA from './components/componentA';
import ComponentB from './components/componentB';
import { UserContext } from './userContext/UserContext';

import './App.css';

function App() {
  const [typedText, setTypedText] = useState('')
  return (
    <UserContext.Provider value={{typedText, setTypedText}}>
      <div className="App">
        <ComponentA />
        <ComponentB />
      </div>
    </UserContext.Provider>
  );
}

export default App;
