import { createContext, useState } from 'react'

import ComponentA from './components/componentA';
import ComponentB from './components/componentB';
import { UserContext } from './userContext/UserContext';

import './App.css';

function App() {
  // export const ThemeContext = createContext({})
  const [typedText, setTypedText] = useState('')
  return (
    <div className="App">
    <UserContext.Provider value={{typedText, setTypedText}}>
      <ComponentA />
      <ComponentB />
      </UserContext.Provider>
    </div>
  );
}

export default App;
