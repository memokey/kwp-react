import React from 'react'
import './filters.css'
import { Button, Col, Form, Row } from 'react-bootstrap'

export const Filters = () => {
  return (
    <div className='background p-5'>
      <Row>
        <Col sm={12} lg={6}>
          <Form.Select className="my-3" aria-label="Default select example">
            <option>All Propery Types</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
          <Form.Select className="my-3" aria-label="Default select example">
            <option>Price Range</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
          <Form.Select className="my-3" aria-label="Default select example">
            <option>Select City</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
          <Form.Select className="my-3" aria-label="Default select example">
            <option># of Bedrooms</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Col>
        <Col sm={12} lg={6}>
          <Row>
            <Col sm={12} lg={6}>
              <Form.Check
                className='my-2 mt-3'
                type='checkbox'
                label='Central Air'
              />
              <Form.Check
                className='my-2'
                type='checkbox'
                label='Central Air'
              />
              <Form.Check
                className='my-2'
                type='checkbox'
                label='Central Air'
              />
              <Form.Check
                className='my-2'
                type='checkbox'
                label='Central Air'
              />
            </Col>
            <Col sm={12} lg={6}>
              <Form.Check
                className='my-2 mt-3'
                type='checkbox'
                label='Central Air'
              />
              <Form.Check
                className='my-2'
                type='checkbox'
                label='Central Air'
              />
              <Form.Check
                className='my-2'
                type='checkbox'
                label='Central Air'
              />
              <Form.Check
                className='my-2'
                type='checkbox'
                label='Central Air'
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <Button className='btn btn-primary search-button'>Search</Button>
    </div>
  )
}
