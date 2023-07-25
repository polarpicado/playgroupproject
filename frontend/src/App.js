// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import ProductForm from './components/ProductForm';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Navbar */}
        <nav className="navbar">
          <Link to="/" className="navbar-title">
            Proyecto Playgroup
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/add" element={<ProductForm />} />
        </Routes>

        {/* Footer */}
        <footer className="footer">
          <p>
            Desarrollado por <a href="https://www.linkedin.com/in/joaobasanta/">Joao Basanta</a>
          </p>
          <p>
            Tecnologías utilizadas:{' '}
            <a href="https://www.mongodb.com/" target="_blank">MongoDB</a>,
            <a href="https://expressjs.com/es/" target="_blank">Express</a>,
            <a href="https://nodejs.org/es" target="_blank">Node.js</a>,
            <a href="https://es.react.dev/" target="_blank">React</a>,
            <a href="https://reactrouter.com/en/main" target="_blank">React Router</a>
          </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
