import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Wallet from './Pages/Wallet';
import NotFound from './Pages/NotFound';

function App() {
  return (
    <div className="App">
       <Routes>
         <Route exact path="/" element={ <Home /> } />
         <Route exact path="/wallet" element={ <Wallet /> } />
         <Route path="*" element={ NotFound } />
       </Routes>
    </div>
  );
}

export default App;
