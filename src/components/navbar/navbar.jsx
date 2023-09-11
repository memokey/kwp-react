import React, { useState } from 'react'
import './navbar.css'
import logo from '../../assets/logo_blue.png'
// import '../../_custom.scss';
import { Button, Container, Nav, Navbar, Offcanvas } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { FaBars, FaChevronDown, FaMinus, FaPlus } from 'react-icons/fa';
const KWNavbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showOwnerLinks, setShowOwnerLinks] = useState(false);
  const [showTenantLinks, setShowTenantLinks] = useState(false);
  const [showAboutLinks, setShowAboutLinks] = useState(false);

  const toggleOwnerLinks = () => {
    setShowOwnerLinks(!showOwnerLinks);
    setShowTenantLinks(false);
    setShowAboutLinks(false);

  };

  const toggleTenantLinks = () => {
    setShowTenantLinks(!showTenantLinks);
    setShowAboutLinks(false);
    setShowOwnerLinks(false);
  };

  const toggleAboutLinks = () => {
    setShowAboutLinks(!showAboutLinks);
    setShowTenantLinks(false);
    setShowOwnerLinks(false);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <>
      <Navbar bg="light" variant="light" className='fixed-top navbar-styles'>
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              width="135"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />

          </Navbar.Brand>
          <FaBars size={26} color='#222' onClick={toggleSidebar} className='ms-2 d-xl-none' />
            <Nav className='d-none d-xl-flex'>
              <Nav.Link as={Link} to="/"> 
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/browse">
                Browse
              </Nav.Link>
              <Nav.Link as={Link} to="/properties"> 
                Properties
              </Nav.Link>
              {/* <Nav.Link
                variant="link"
                className={`nav-link ${showPropertiesLinks ? 'highlight-link' : ''}`}
                onClick={togglePropertiesLinks}
                aria-controls="properties-links"
                aria-expanded={showPropertiesLinks}
              >
                Properties <span><FaChevronDown size={13} /></span>
              </Nav.Link> */}
              <Nav.Link as={Link}
               variant="link"
               className={`nav-link ${showOwnerLinks ? 'highlight-link' : ''}`}
               onClick={toggleOwnerLinks}
               aria-controls="properties-links"
               aria-expanded={showOwnerLinks}> 
                Owners <span><FaChevronDown size={13} /></span>
              </Nav.Link>
              <Nav.Link
               variant="link"
               className={`nav-link ${showTenantLinks ? 'highlight-link' : ''}`}
               onClick={toggleTenantLinks}
               aria-controls="properties-links"
               aria-expanded={showTenantLinks}
              >Tenants <span><FaChevronDown size={13} /></span></Nav.Link>
              <Nav.Link
               variant="link"
               className={`nav-link ${showAboutLinks ? 'highlight-link' : ''}`}
               onClick={toggleAboutLinks}
               aria-controls="properties-links"
               aria-expanded={showAboutLinks}
              >About Us <span><FaChevronDown size={13} /></span></Nav.Link>
              <Nav.Link>Contact Us</Nav.Link>
             
              {showOwnerLinks && (
                <div className="properties-links ps-4 p-2 d-flex justify-content-center bg-light drop-links">
                  <Nav.Link className="nav-link">
                    Property Management
                  </Nav.Link>
                  <Nav.Link className="nav-link">
                    Tenant Placement
                  </Nav.Link>
                  <Nav.Link className="nav-link">
                    Tenant Screening
                  </Nav.Link>
                  <Nav.Link className="nav-link">
                    Maintenance
                  </Nav.Link>
                  <Nav.Link className="nav-link">
                    Legal Services
                  </Nav.Link>
                  <Nav.Link className="nav-link">
                    Owner Reviews
                  </Nav.Link>
                </div>
              )}

              {showTenantLinks && (
                <div className="properties-links ps-4 p-2 d-flex justify-content-center bg-light drop-links">
                  <Nav.Link className="nav-link">
                    Become a Tenant
                  </Nav.Link>
                  <Nav.Link className="nav-link">
                    Get verified by KWP
                  </Nav.Link>
                  <Nav.Link className="nav-link">
                    Required Documents
                  </Nav.Link>
                  <Nav.Link className="nav-link">
                    No Deposit Required
                  </Nav.Link>
                  <Nav.Link className="nav-link">
                    Tenant Reviews
                  </Nav.Link>
                  <Nav.Link className="nav-link">
                    Submit a Work Order
                  </Nav.Link>
                </div>
              )}

              {showAboutLinks && (
                <div className="properties-links ps-4 p-2 d-flex justify-content-center bg-light drop-links">
                  <Nav.Link className="nav-link">
                    About KWP
                  </Nav.Link>
                  <Nav.Link className="nav-link">
                    Meet the team
                  </Nav.Link>
                  <Nav.Link className="nav-link">
                    Careers
                  </Nav.Link>
                  <Nav.Link className="nav-link">
                    FAQs
                  </Nav.Link>
                </div>
              )}
            </Nav>
          
        </Container>
      </Navbar>

      <Offcanvas show={showSidebar} onHide={toggleSidebar} placement="start" className="full-screen">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title> <img
              src={logo}
              width="100"
              alt="React Bootstrap logo"
            /></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="container d-flex flex-column align-items-start">
            <Nav.Link as={Link} to="/" className="fs-5 ms-3">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/browse" className="fs-5 ms-3">
              Browse
            </Nav.Link>
            <Nav.Link as={Link} to="/properties" className="fs-5 ms-3">
              Properties
            </Nav.Link>
            <Nav.Link className="fs-5 ms-3" as={Link} to="/student">Students</Nav.Link>
            <Nav.Link className="fs-5 ms-3" as={Link} to="/commercial">Commercial</Nav.Link>
            <Button
              variant="link"
              className="nav-link fs-5 d-flex align-items-center"
              onClick={toggleOwnerLinks}
              aria-controls="properties-links"
              aria-expanded={showOwnerLinks}
            ><span className='pe-1 pb-1'>{showOwnerLinks ? <FaMinus size={13} /> : <FaPlus size={13} />}</span>
              Owners 
            </Button>
            {showOwnerLinks && (
                <div className="properties-links ps-4">
                  <Nav.Link className="nav-link fs-5">
                    Property Management
                  </Nav.Link>
                  <Nav.Link className="nav-link fs-5">
                    Tenant Placement
                  </Nav.Link>
                  <Nav.Link className="nav-link fs-5">
                    Tenant Screening
                  </Nav.Link>
                  <Nav.Link className="nav-link fs-5">
                    Maintenance
                  </Nav.Link>
                  <Nav.Link className="nav-link fs-5">
                    Legal Services
                  </Nav.Link>
                  <Nav.Link className="nav-link fs-5">
                    Owner Reviews
                  </Nav.Link>
                </div>
              )}

            <Button
              variant="link"
              className="nav-link fs-5 d-flex align-items-center"
              onClick={toggleTenantLinks}
              aria-controls="properties-links"
              aria-expanded={showTenantLinks}
            ><span className='pe-1 pb-1'>{showTenantLinks ? <FaMinus size={13} /> : <FaPlus size={13} />}</span>
              Tanents 
            </Button>
            {showTenantLinks && (
                <div className="properties-link ps-4">
                  <Nav.Link className="nav-link fs-5">
                    Become a Tenant
                  </Nav.Link>
                  <Nav.Link className="nav-link fs-5">
                    Get verified by KWP
                  </Nav.Link>
                  <Nav.Link className="nav-link fs-5">
                    Required Documents
                  </Nav.Link>
                  <Nav.Link className="nav-link fs-5">
                    No Deposit Required
                  </Nav.Link>
                  <Nav.Link className="nav-link fs-5">
                    Tenant Reviews
                  </Nav.Link>
                  <Nav.Link className="nav-link fs-5">
                    Submit a Work Order
                  </Nav.Link>
                </div>
              )}

            <Button
              variant="link"
              className="nav-link fs-5 d-flex align-items-center"
              onClick={toggleAboutLinks}
              aria-controls="properties-links"
              aria-expanded={showAboutLinks}
            ><span className='pe-1 pb-1'>{showAboutLinks ? <FaMinus size={13} /> : <FaPlus size={13} />}</span>
              About Us 
            </Button>
             
             
              {showAboutLinks && (
                <div className="properties-link ps-4">
                  <Nav.Link className="nav-link fs-5">
                    About KWP
                  </Nav.Link>
                  <Nav.Link className="nav-link fs-5">
                    Meet the team
                  </Nav.Link>
                  <Nav.Link className="nav-link fs-5">
                    Careers
                  </Nav.Link>
                  <Nav.Link className="nav-link fs-5">
                    FAQs
                  </Nav.Link>
                </div>
              )}
               <Nav.Link as={Link} className="fs-5 ms-3">
              Contact Us
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}


export default KWNavbar