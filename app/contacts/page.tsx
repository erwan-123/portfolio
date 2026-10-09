import React from 'react'
import Navbar from '../components/accueil/Navbar'
import Footer from '../components/accueil/footer'
import ContactForm from '../components/ContactForm'

function page() {
  return (
    <div>
        <Navbar/>
        <ContactForm/>
        <Footer/>
    </div>
  )
}

export default page