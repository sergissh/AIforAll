import React from 'react'
import styled from 'styled-components'
import Aside from './Aside'
import Recomendations from './Recomendations'
function MainHome() {
  return (
    <>
        <Main>
            <h2>Main Section</h2>
            <Recomendations/>
        </Main>
    </>
  )
}

export default MainHome

const Main = styled.main`
  

`