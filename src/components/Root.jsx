import React from 'react'
import Home from './Home'
import Footer from './footer'
import Aboutus from './aboutus'
import Workshop from './Workshop'
import Faq from './faq'
import './workshop.css'
import '../App.css'
export default function Root() {
  return (
      <div>
          < Home />
          < Aboutus />
          < Workshop /> 
          < Faq />
          < Footer />
     </div>
      
      
  )
}
