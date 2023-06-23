import { AiFillInfoCircle, AiFillLinkedin, AiOutlineInstagram } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import AboutModal from './AboutModal'
import './Footer.css';
import React, { Fragment } from 'react';

const Footer = () => {
    //1! About modal
    const [showModal, setShowModal] = useState(false);
    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    //Default styling for all the icons.
    const style = {
        fontSize: "20px",
    }

    /*///These links will be used on each icon to open a new tab with the indicated link
    if clicked. */
    const links = {
      instagram: 'https://www.instagram.com/gabriel_coder47/',
      linkedin: 'https://www.linkedin.com/in/gabriel-cordero-0960b9244/',
    }

  return (
    <>
        <div className='footer pt-4'>
            <div className='d-flex justify-content-around'>
        
                <div className='social d-flex flex-row pb-3'>

                  <a target="_blank" href={links.linkedin}
                  >Linkedin<span className='ps-2 about-icon'><AiFillLinkedin style={style}/></span></a>

                  <a target="_blank" href={links.instagram}
                  >Instagram<span className='ps-2 about-icon'><AiOutlineInstagram style={style}/></span></a>

                  <a className='' onClick={handleShowModal}
                  >About<span className='ps-2 about-icon'><AiFillInfoCircle/></span></a>
                </div>
            </div>
            <p className='text-center pt-1'>AI Shopping List by Gabriel Cordero 2023</p>
        </div>

        {<AboutModal showModal={showModal} handleCloseModal={handleCloseModal} />}
    </>
  )
}

export default Footer;
