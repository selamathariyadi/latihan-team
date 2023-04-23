import React from 'react'
import Navbar from '../../Navbar'
import Mostpick from '../../pickDestinaton/MostDestination'
import Footer from '../../Footer'
import Discoverytron from '../../Jumbotron/Discovery'
import Travelex from '../../travelExperince/travelex'
import Ourpackage from '../../ourPackage'
function Discovery() {
  return (
    <>
    <Navbar/>
    <Discoverytron/>
    <Mostpick/>
    <Travelex/>
    <Ourpackage/>
    <Footer/>
    </>
  )
}

export default Discovery