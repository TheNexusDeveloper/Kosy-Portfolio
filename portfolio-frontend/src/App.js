import React, { useEffect, useState } from 'react'
import { HashRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage'
import './App.css';
import Loader from './components/Loader';

function App() {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => setLoading(false), 3300)
    }, [])
    if (loading) {
        return <Loader/>
    }
  return (
    <Router>
        <Header/>
        {/* <Routes>
            <Route path='/' element={HomePage} exact></Route>
        </Routes> */}
        <HomePage/>
        <Footer/>
    </Router>
  );
}

export default App;
