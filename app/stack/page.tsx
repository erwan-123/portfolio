import React from 'react'
import TechStack from '../components/TechStack'
import Navbar from '../components/accueil/Navbar'
import Footer from '../components/accueil/footer'

function page() {
  return (
    <div>
      <Navbar/>
        <TechStack/>
        <Footer/>
    </div>
  )
}

export default page
