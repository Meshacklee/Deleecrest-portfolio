// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './index.css';
import CosmicBackground from './components/CosmicBackground';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import Forum from './pages/Forum';
import Products from './pages/Products';
import Teams from './pages/Teams';
import Contact from './pages/Contact';
import PostEditor from './pages/PostEditor';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState('dark');

  // 🧠 Tawk.to Live Chat Integration
  useEffect(() => {
    // Only run in browser
    if (typeof window === 'undefined') return;
    
    var Tawk_API = Tawk_API || {};
    var Tawk_LoadStart = new Date();
    (function() {
      var s1 = document.createElement("script"),
          s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = "https://embed.tawk.to/6912a3f985e1d4195f23265c/1j9od12eq";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      s0.parentNode.insertBefore(s1, s0);
    })();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setIsMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Apply theme to document body
  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <Router>
      <div className="app">
        <CosmicBackground />
        <header className="header">
          <div className="container">
            <div className='headermenu'>
              <Link to="/" className="logo">DLC Web Portfolio</Link>
              <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
                <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
                <Link to="/pricing" onClick={() => setIsMenuOpen(false)}>Pricing</Link>
                <Link to="/forum" onClick={() => setIsMenuOpen(false)}>Forum</Link>
                <Link to="/products" onClick={() => setIsMenuOpen(false)}>Products</Link>
                <Link to="/teams" onClick={() => setIsMenuOpen(false)}>Teams</Link>
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                
              </nav>
              <div className="theme-toggle-container">
                <button 
                  className="theme-toggle"
                  onClick={toggleTheme}
                  aria-label="Toggle theme"
                >
                  {theme === 'light' ? '🌙' : '☀️'}
                </button>
              </div>
            </div>
            <button 
              className="menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              ☰
            </button>
          </div>
        </header>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="teams" element={<Teams />} />
            <Route path="/editor" element={<PostEditor />} />
          </Routes>
        </main>

        <footer className="footer">
          <div className="container">
            <p>&copy; 2023 delecrest-services. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;