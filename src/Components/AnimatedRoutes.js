import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from '../Pages/Home/index.js';
import NotFound from '../Pages/NotFound/index.js';
import Wallet from '../Pages/Wallet/index.js';

import { AnimatePresence } from 'framer-motion';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={ location } key={ location.pathname }>
        <Route exact path="/" element={ <Home /> } />
        <Route exact path="/wallet" element={ <Wallet /> } />
        <Route path="*" element={ NotFound } />
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes;