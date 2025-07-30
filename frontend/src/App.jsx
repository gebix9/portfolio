import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from './components/navbar';
// import Footer from './components/footer';

import AppRoutes from './router';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />

        <main style={{ flex: 1 }} className="container my-4">
          <AppRoutes/>
        </main>

        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;