// import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/index.js';
import Wallet from './Pages/Wallet';
import NotFound from './Pages/NotFound/index.js';
import './index.css'

function App() {
  return (
    <div className="App bg-stone-100 h-screen">
       <Routes>
         <Route exact path="/" element={ <Home /> } />
         <Route exact path="/wallet" element={ <Wallet /> } />
         <Route path="*" element={ NotFound } />
       </Routes>
    </div>
  );
}

export default App;
