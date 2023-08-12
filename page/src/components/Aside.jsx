import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import MainHome from './MainHome'
function Aside() {

    const docsItems = [
        {
            path: '/documentations',
            name: "Documentations Home"
        },
        {
            path: "/documentations/knn",
            name: "K-Nearest Neighbours"
        },
        {
            path: "/documentations/k-means",
            name: "K-Means"
        },
        {
            path: "/documentations/randomforest",
            name: "Random Forest"
        }
    ]

    return (
        <Wrapper>
            <aside>
                <div className='section-documentations'>
                    <h3><a href='#'>Documentations</a></h3>
                    <ul>
                        {
                        docsItems.map((item, index) => (
                            <li key={index}>
                                <NavLink to={item.path} className={({isActive, isPending}) =>{
                                    return isActive ? 'active' : isPending ? "pending" : "";
                                }}>
                                {item.name}
                                </NavLink>
                            </li>
                        ))
                        }
                    </ul>
                </div>
                <div className='section-tutorials'>

                </div>
                <div className='section-projects'>

                </div>
            </aside>

        </Wrapper>
    )
}

export default Aside

const Wrapper = styled.div`
    display: flex;
    aside{
        height: 100vh;
        background-color: grey;
        padding-left: 1rem;
    }
    ul{
        list-style: none;
        margin-block-start: 0;
        margin-block-end: 0;
        padding-inline-start: 0;
        padding: 0 0.8rem;
        li{
            padding: 0.18rem 0;
        }
    }
    .section-documentations{
        h3{
            font-weight: bolder;
            line-height: 0;
        }
        .is-active{
            font-weight: bold;
        }
    }
`