import React from 'react';
import RTE from './Editor.js';
function App() {
  return (
    <div>
    <div style={{margin:'auto 0', display:'flex', justifyContent:'center', border: '1px solid black', marginBottom:'2em', borderRadius:'2px'}}>
    <h1>
    Rich Text Editor Demo
    </h1>
    </div>  
      <RTE/>
    </div>
  );
}

export default App;
