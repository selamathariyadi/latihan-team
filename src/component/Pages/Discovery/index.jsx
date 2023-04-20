import React from 'react'
import Navbar from '../../Navbar'
import Mostpick from '../../pickDestinaton/MostDestination'
import Footer from '../../Footer'
import Discoverytron from '../../Jumbotron/Discovery'
import Travelex from '../../travelExperince/travelex'
function Discovery() {
  return (
    <>
    <Navbar/>
    <Discoverytron/>
    <Mostpick/>
    <Travelex/>
    <Footer/>
    </>
  )
}

export default Discovery