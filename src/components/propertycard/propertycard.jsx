import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import './propertycard.css';

const KWPropertyCard = ({currentProperty, mapCard}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const cardHeight = mapCard ? '450px' : '540px';

  useEffect(() => {

    const fetchImage = async (id) => {
      try {
        const response = await fetch(`/v1/rentals/${currentProperty.Id}/images/${id}/downloadrequests`, {
          method: 'POST',
          headers: {
            'x-buildium-client-id': 'fedd8bc2-fe42-4865-8891-b0dfd6532dba',
            'x-buildium-client-secret': '03RYUJ+MPGyjuKdOCscRviUauD6ZUWm8R8rcuItL0yI=',
          },
        });
        if (response.ok) {
          const data = await response.json();
          setImageUrl(data.DownloadUrl)
        } else {
          throw new Error('Error fetching property data');
        }
      } catch (error) {
        console.error('Error fetching property data:', error);
      }
    };

    const fetchData = async () => {
      try {
        const response = await fetch(`/v1/rentals/${currentProperty.Id}/images`, {
          headers: {
            'x-buildium-client-id': 'fedd8bc2-fe42-4865-8891-b0dfd6532dba',
            'x-buildium-client-secret': '03RYUJ+MPGyjuKdOCscRviUauD6ZUWm8R8rcuItL0yI=',
          },
        });
        if (response.ok) {
          const data = await response.json();
           await fetchImage(data[0].Id);
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
          {imageUrl && <Card
            style={{ width: '100%', minHeight: cardHeight}}
            className={`mb-3 shadow ${isHovered ? 'animate__animated animate__pulse' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Card.Img style={{height: '240px', objectFit: 'cover'}} src={imageUrl} variant='top'/>
            <Card.Body>
              <Card.Title>
                <h3 className="text-primary">{currentProperty.Name}</h3>
              </Card.Title>
              <Card.Text>
                {!mapCard ? currentProperty.StructureDescription : ''}
                <h6 className="mt-2">
                  <span className="text-primary">${currentProperty.Reserve}</span> /month
                </h6>
              </Card.Text>
              <Card.Text>
                Address: {currentProperty.Address.AddressLine1}, {currentProperty.Address.City}, {currentProperty.Address.State}{' '}
                {currentProperty.Address.PostalCode}, {currentProperty.Address.Country}
              </Card.Text>
            </Card.Body>
          </Card>}
          </>
  );
};

export default KWPropertyCard;
