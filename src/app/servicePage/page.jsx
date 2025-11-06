import React from 'react'
import ServicesHeader from '../Components/ServicesHeader'
import ServiceCards from '../Components/ServiceCards'
import ServiceComparison from '../Components/ServicesComparison'
import Footer from '../Components/Footer'

export default function page() {
  return (
    <>
      <ServicesHeader />
      <ServiceCards />  
      <ServiceComparison />
      <Footer />
    </>
  )
}
