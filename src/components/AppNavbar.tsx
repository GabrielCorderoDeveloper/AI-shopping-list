import Navbar from 'react-bootstrap/esm/Navbar';
import { Nav } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import AboutModal from './AboutModal'
import ContactUs from './ContactUs';
import './AppNavbar.css';

const AppNavbar = () => {
      //1! About modal
      const [showModal, setShowModal] = useState(false);
      const handleShowModal = () => setShowModal(true);
      const handleCloseModal = () => setShowModal(false);

      //1! Contact Us
      const [showContact, setShowContact] = useState(false);
      const handleShowContact = () => setShowContact(true);
      const handleCloseContact = () => setShowContact(false);

      const [isCollapsed, setIsCollapsed] = useState(window.innerWidth < 576); 

      useEffect(() => {
        const handleResize = () => setIsCollapsed(window.innerWidth < 576);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);
      
  return (
      <header>
        <Navbar className='d-flex flex-row-reverse justify-content-between nav-bar up-animation nav-spacing pb-2'
        expand="sm" collapseOnSelect>
        <Navbar.Brand>
          <div className='d-flex flex-row cursor-pointer' onClick={handleShowModal} >
              <img className='user-select-none profile-img mt-1' src="./assets/AI_shopping_list_logo.png" alt="AI Shopping List Logo" />
          </div>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" className='ms-4 FiMenu'>
          <FiMenu style={{ color: 'var(--light-black)', fontSize: '3.5rem' }} />
        </Navbar.Toggle>

        <Navbar.Collapse>
          <Nav>
            <div className={`nav-item mt-sm-0 mt-2 ${isCollapsed ? ' collapsed' : ''}`}>
              <Nav.Link className='ps-5 pe-5 nav-link' onClick={handleShowModal}>About</Nav.Link>
            </div>
            <div className={`nav-item${isCollapsed ? ' collapsed' : ''}`}>
              <Nav.Link className='ps-5 pe-5 nav-link' onClick={handleShowContact}>Contact Us</Nav.Link>
            </div>
            <div className={`nav-item${isCollapsed ? ' collapsed' : ''}`}>
              <Nav.Link className='ps-5 pe-5 nav-link' href='https://www.linkedin.com/in/gabriel-cordero-0960b9244/' target="_blank">Linkedin</Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
        </Navbar>

        <AboutModal showModal={showModal} handleCloseModal={handleCloseModal} />
        <ContactUs showContact={showContact} handleCloseContact={handleCloseContact} />
      </header>
  );
}

export default AppNavbar;

