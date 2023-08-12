import React from 'react'
import styled from 'styled-components'
function Footer() {

  const quickLinks = [
    {
      name: "Your Account",
      ref: "#"
    },
    {
      name: "About Us",
      ref: "#"
    },
    {
      name: "Contact Us",
      ref: "#"
    },
    {
      name: "Help & Support",
      ref: "#"
    }
  ]

  return (
    <FooterSection>
      <div className='footer-wrapper'>
        <div className='footer-list'>
          <div className='footer-list__items socials'>
            <figure>
              <a href="#">
                <i className="fa-brands fa-github"></i>
              </a>
            </figure>
            <figure>
              <a href="#">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </figure>
          </div>
          <div className='footer-list__items '>
            <h4>Quick Links</h4>
            <ul>
              {
                quickLinks.map((item, index) => (
                  <li key={index}>
                    <a href={item.ref}>
                      {item.name}
                    </a>
                  </li>
                ))
              }
            </ul>
          </div>
          <div className='footer-list__items'>
              
          </div>
        </div>
        <div  className='footer-copyright'>
          © 2023 Copyright: Sergi Sánchez Hernández a.k.a Sergissh/ElPelucas
        </div>
      </div>
    </FooterSection>
  )
}

export default Footer

const FooterSection = styled.footer`
    width: 100%;
    background: #f9f9fb;
    margin-top: auto;
    .footer-wrapper{
      max-width: 80%;
      margin: auto;
    }
    .footer-list{
      display: flex;
      flex-direction: row;
    }
    .footer-copyright{
      width: 100%;
      text-align: center;
    }

`