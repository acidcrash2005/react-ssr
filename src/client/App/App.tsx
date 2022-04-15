import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import Suspens from './Suspens';
import './app.css';

const App: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<div>Home <Link to="/news">news</Link> <Link to="/suspense">suspense</Link></div>} />
            <Route path='/news' element={<div>News <Link to="/">Home</Link></div>} />
            <Route path='/suspense' element={<Suspens />} />
        </Routes>
  );
};

export default App;
