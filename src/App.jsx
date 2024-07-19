import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HomeCards from './components/HomeCards';
import BrowseJobs from './components/BrowseJobs';
import AllJobs from './components/AllJobs';
import './index.css';

const App = () => {
  return (
<>
    <Navbar />
    <Hero />
    <HomeCards />
    <BrowseJobs />
    <AllJobs />
   
    
</>
  )
}

export default App