import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import KWNavbar from '../../components/navbar/navbar'
import KWFooter from '../../components/footer/footer'
import { Propertiescard } from '../../components/propertiescard/propertiescard'

import './properties.css'
import { FaLocationDot, FaMapMarker, FaMapPin, FaSearchLocation } from 'react-icons/fa'
import { Map } from '../../components/map/map'
import KWPropertyCard from '../../components/propertycard/propertycard'
export const Properties = () => {
  const [propertyData, setPropertyData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/v1/rentals', {
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/5373',
            'x-buildium-client-id': 'fedd8bc2-fe42-4865-8891-b0dfd6532dba',
            'x-buildium-client-secret': '03RYUJ+MPGyjuKdOCscRviUauD6ZUWm8R8rcuItL0yI=',
          },
        });
        if (response.ok) {
          const data = await response.json();
          setPropertyData(data);
          console.log(propertyData);
        } else {
          throw new Error('Error fetching property data');
        }
      } catch (error) {
        console.error('Error fetching property data:', error);
      }
    };

    fetchData();
  }, []);

  const markers = [
    { lat: 43.451639, lng: -80.492226 }
  ]
  return (
    <>
      <KWNavbar />
      <Container className='mt-5 pt-5'>
        <Row>
          <Col sm={12} lg={6}>
            <Map
              center={{ lat: 43.451639, lng: -80.492226 }}
              markers={markers}
              zoom={5}
            />
          </Col>
          <Col sm={12} lg={6} className='mt-4 md-lg-0'>
            <Form.Control placeholder='Search Address'></Form.Control>
            <div className='mt-4 d-flex justify-content-between'>
              <div>
                <Button variant='outline-primary' className='me-2 mb-2 mb-md-0' size='lg'><span className="d-flex align-items-center"><FaMapPin /> Map</span></Button>
                <Button variant='outline-primary' size='lg'>Reset</Button>
              </div>
              <div>
                <Button variant='outline-primary' className='me-2 mb-2 mb-md-0' size='lg'>Advance Search</Button>
                <Button variant='primary' size='lg'>Search</Button>
              </div>
            </div>
            <Row className='properties-container mt-4'>
              {
                propertyData.map((property) => (
                  <Col sm={12} lg={6}><KWPropertyCard mapCard={true} currentProperty={property} /></Col>
                ))
              }
            </Row>
          </Col>
        </Row>
      </Container>
      <KWFooter />
    </>
  )
}
