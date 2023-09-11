import React from 'react'
import './commercial.css'
import { Container } from 'react-bootstrap'
import { Filters } from '../../components/filter/Filters'
import { Listings } from '../../components/listings/Listings'
import { lisings } from '../../data/listings.data'
import KWNavbar from '../../components/navbar/navbar'
import KWFooter from '../../components/footer/footer'

export const Commercial = () => {
  return (
    <>
    <KWNavbar/>
    <Container className='mt-5 pt-5'>
        <h1>Browse Listings and Filter Search</h1>
        <Filters/>
        <div className="listings-container">
            {lisings.map(listing => {
                return (
                    <Listings 
                    heading={listing.name}
                    description={listing.description}
                    price={listing.price}
                    img={listing.img}
                    />
                )
            })}
        </div>
    </Container>
    <KWFooter/>
    </>
  )
}

