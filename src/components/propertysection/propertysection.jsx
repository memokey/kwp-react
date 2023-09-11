import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import KWPropertyCard from '../propertycard/propertycard'
import img from '../../assets/property.jpg'
import './propertysection.css'

const KWPropertySection = () => {
  const [propertyData, setPropertyData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/v1/rentals', {
          headers: {
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

  return (
    <>
    {propertyData.length > 0 && <Container className='mb-4'>
        <h1 className="mb-2">Rental <span className="blue">Properties</span></h1>
        <h4 className='mb-3'>TRUSTABLE, EASY, FURNISHED</h4>
        <Row>
          {
            propertyData.map((property) => (
              <Col sm={12} lg={4}><KWPropertyCard img={img} currentProperty={property} /></Col>
            ))
          }
        </Row>
        <Button variant='primary' className='mx-auto d-block mt-3'>View more properties</Button>
    </Container>}
    </>
  )
}

export default KWPropertySection