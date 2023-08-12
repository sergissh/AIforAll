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

          </div>
        </div>
    </FooterSection>
  )
}

export default Footer

const FooterSection = styled.footer`
    
`