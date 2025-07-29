// src/router.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Accueil from './pages/Accueil/accueil';
import Contact from './pages/Contact';
import CV from './pages/CV';
import Etude from './pages/Etude';
import Projets from './pages/Projets';
import Certifications from './pages/certifications';
import Formations from './pages/Formations';
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Accueil />} />
      <Route path="/etude" element={<Etude />} />
      <Route path="/projets" element={<Projets />} />
      <Route path="/certifications" element={<Certifications />} />
      <Route path="/formations" element={<Formations />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/CV" element={<CV/>}/>




      <Route path="*" element={<h1>404 - Page non trouvée</h1>} />
    </Routes>
  );
};

export default AppRoutes;
