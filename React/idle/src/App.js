import './App.css';
import { useState } from 'react';

import Sidebar from '../src/UI/Sidebar.js';
import Header from '../src/UI/Header';
import Main from '../src/UI/Main.js'

function App() {
  const [activeTab, setActiveTab] = useState("player");
  
  return (
    <div className="App">
      <header> <Header  activeTab={activeTab}/> </header>
        
      <aside> <Sidebar  activeTab={activeTab} setActiveTab={setActiveTab} /> </aside>
       
      <main> <Main activeTab={activeTab} /> </main>
       
     
    </div>
  );
}

export default App;