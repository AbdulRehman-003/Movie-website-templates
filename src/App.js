import React from 'react';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  
    return (
        <div className="wrapper bg-black">
            <Navbar/>
            <Carousel/>
            <Content/>
            <Footer/>
        </div>
    );
}

export default App;
