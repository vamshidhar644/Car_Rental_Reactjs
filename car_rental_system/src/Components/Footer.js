import React from 'react'
import '../Styles/Footer.css'
import {FaGooglePlay} from 'react-icons/fa'
import {AiFillFacebook, AiFillTwitterCircle, AiFillInstagram, AiFillYoutube, AiFillLinkedin} from 'react-icons/ai'

import {BsApple} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className="FooterBody">
        <div className="box">
          <h2 className="downloadTitle">Download our App</h2>
          <p className="downloadInfo">Download App for Android and IOS mobile</p>          
          <div className="icons">
              <FaGooglePlay  className="btnDownload"/>
              <BsApple className="btnDownload"/>
          </div>
        </div>
        <div className="box">
            <h2>Be connected with us</h2>
            <div className="icons">
                <div className=''><AiFillFacebook/></div>
                <div className=''><AiFillTwitterCircle/></div>
                <div className=''><AiFillInstagram/></div>
                <div className=''><AiFillYoutube/></div>
                <div className=''><AiFillLinkedin/></div>
            </div>
        </div>        
        <p className="foot">2022 Team 4 Pvt Ltd., All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer