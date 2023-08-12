import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

function header() {

  const headerSections = [
    {
      path: "/documentations",
      name: "Documentations",
      icon: <i className="fa-solid fa-sort-down"></i>
    },
    {
      path: "/tutorials",
      name: "Tutorials",
      icon: <i className="fa-solid fa-sort-down"></i>
    },
    {
      path: "/projects",
      name: "Projects",
      icon: <i className="fa-solid fa-sort-down"></i>
    },
    {
      path: "/about",
      name: "About",
      icon: null
    }
    
  ]

  return (
    <>
      <Header>
        <div className='header-logo-title'>
          <Link to="/">
            <img src='https://seeklogo.com/images/O/open-ai-logo-8B9BFEDC26-seeklogo.com.png'/>
            <h2>Artificial Intelligence for All</h2>
          </Link>
        </div>
        <div className='header-list'>
          <ul>
          {
            headerSections.map((item, index) =>(
              <li key={index}>
                <Link to={item.path}>
                  <span>{item.name}</span>
                  {item.icon ? item.icon : ""}
                </Link>
              </li>
            ))
          }
          </ul>
        </div>
        <div className='header-credentials'>
          <a href="#"><span>Sign Up</span></a>
          <a href="#"><span>Log In</span></a>
        </div>
      </Header>
      <BigDiv>
      </BigDiv>
    </>
  )
}

export default header

const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: start;
  background: white;
  .header-logo-title{
    max-width: 30%;
    margin-left: 4rem;
    a{
      display: flex;
      align-items: center;
      justify-content: space-around;
      img{
        width: 2.5rem;
        object-fit: contain;
      }
      h2{
        font-size: 1.3rem;
        padding: 0 0.5rem;
      }
    }
  }
  .header-list{
    margin-left: 5rem;
    font-size: 1.1rem;
    ul{
      padding-inline-start: 0;
      display: flex;
      align-items: center;
      height: 100%;
      margin: 0;
    }
    li{
      list-style: none;
      padding: 0 1.3rem;
      height: 100%;
      display: block;
      
      a{
        display: flex;
        align-items: center;
        height: 100%;
      }
      span{
        margin: auto 0;
        font-weight: bold;
      }
      i{
        margin-left: 0.3rem;
        margin-bottom: 0.3rem;
      }

    }
  }
  .header-credentials{
    background: transparent;
    margin-left: auto;
    margin-right: 5rem;
    margin-top: auto;
    margin-bottom: auto;
    a{
      padding: 0.5rem 0.8rem;
      border: 3px solid black;
      border-radius: 15%;
      margin-right: 2rem;
      background-color: grey;
    }
  }
`

const BigDiv = styled.div`
  height: 1.4rem;
  background: #ACFADF;
`