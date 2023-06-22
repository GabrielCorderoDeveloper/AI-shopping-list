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
        fontSize: windowWidth < 400 ? "40px" : "50px",
    }

    ///If the width of the page changes the icon size will to.
    useEffect(() => {
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

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
                <a className='my-auto' onClick={handleShowModal}
                >About<span className='ps-2 about-icon'><AiFillInfoCircle/></span></a>
        
                <div className='social'>
                   { windowWidth > 600 ? <a target="_blank" href={links.instagram}><AiOutlineInstagram style={style}/></a> : "" }
                    <a target="_blank" href={links.linkedin}><AiFillLinkedin style={style}/></a>
                </div>
            </div>
            <p className='text-center pt-1'>AI Shopping List by Gabriel Cordero 2023</p>
        </div>

        {<AboutModal showModal={showModal} handleCloseModal={handleCloseModal} />}
    </>
  )
}

export default Footer;
