import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage'
// import ProductDetails from './components/ProjectDetails'
import './App.css';
import Loader from './components/Loader';

function App() {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => setLoading(false), 2000)
    }, [])
    if (loading) {
        return <Loader/>
    }
  return (
    <Router>
        <Header/>
        <main>
            <Routes>
                <Route path='/' element={<HomePage/>} exact/>
                {/* <Route path='/project/:id' element={<ProductDetails/>} /> */}
            </Routes>
        </main>
        
        <Footer/>
    </Router>
  );
}

export default App;
