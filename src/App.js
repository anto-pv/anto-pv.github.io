import React from 'react';
import './style/App.scss';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import ErrorBoundary from './components/ErrorBoundary';
import Navigation from './components/Navigation';
import Home from './Home';
import Posts from './Posts';
import About from './About';
import Links from './Links';
import SiteMap from './components/sitemap';

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="App">
          <Navigation/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/posts" element={<Posts/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/links" element={<Links/>}/>
          </Routes>
          <SiteMap/>
          <ToastContainer 
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
