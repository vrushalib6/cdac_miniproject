import React from 'react';
import "./Footer.css"; 
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <div className="page-container">
    <MDBFooter className='bg-secondary text-white mt-auto'>
      <MDBContainer className='p-4'>
        <MDBRow>
          <MDBCol lg="6" md="12" className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>EngineeringEase Rental</h5>

            <p>
            EngineeringEase is a platform that provides online courses and resources for engineers. 
             to provide easy and accessible learning materials
              that cater to the needs of engineers of all skill levels.
            </p>
          </MDBCol>

          <MDBCol lg="3" md="6" className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>About us</h5>

            <ul className='list-unstyled mb-0'>
              <li>
                <a href='#!' className='text-white'>
                  Rental system
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                  Licens
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                  our Network
                </a>
              </li>
              
            </ul>
          </MDBCol>

          <MDBCol lg="3" md="6" className='mb-4 mb-md-0'>
            <h5 className='text-uppercase mb-0'>Credit</h5>

            <ul className='list-unstyled'>
              <li>
                <a href='#!' className='text-white'>
                  Website development
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                  Owners and Developers
                </a>
              </li>
              
              
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright:
        <a className='text-white' href='https://EngineeringEaseRental.com/'>
          EngineeringEaseRental.com
        </a>
      </div>
    </MDBFooter></div>
  );
}