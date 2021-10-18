import React from 'react'
import './App.css'
import CustomSelect from './components/customSelect';

function App() {
  const steps:string[] = [
    'No Status',
    'Draft',
    'Active',
    'Complete',
    'Archive'
  ];
  return <div className="App">
    <CustomSelect progressSteps={steps} defaultProgress={steps[0]} size='defaul'></CustomSelect>
  </div>
}

export default App
