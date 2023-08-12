import React, {useState} from 'react'
import styled from 'styled-components'

function Recomendations() {
    {/*Status Values
        Closed == false
        Opened == true
    */}
    const [status, setStatus] = useState('closed');
    function handleArrow(){
        status === 'closed' ? 
            setStatus('opened')
        : 
            setStatus('closed')
    }
    
  return (
    <Wrapper>
        <div className={`aside ${status}`}>
            <div className='arrow '>
                <a onClick={() => handleArrow()}>
                    <i alt="Popular Topics" className="fa-solid fa-arrows-turn-right arrow-icon"></i>
                </a>
            </div>
            <div className='content'>
                <h3>Popular Topics</h3>
                <div className='content-list'>
                    <div className='content-list__item'>
                        <h4>Topic Title 1</h4>
                        <img src='https://imgv3.fotor.com/images/videoImage/ai-generated-beautiful-girl-like-a-beautiful-model-by-Fotor-ai-image-generator_2023-05-30-053050_brwf.jpg'/>
                        <p>Explicación del tópico, aunque debe ser una versión
                        corta que se tendria que poner a cada tema
                        </p>
                    </div>
                    <div className='content-list__item'>
                        <h4>Topic Title 2</h4>
                        <p>Explicación del tópico, aunque debe ser una versión
                        corta que se tendria que poner a cada tema
                        </p>
                    </div>
                    <div className='content-list__item'>
                        <h4>Topic Title 3</h4>
                        <p>Explicación del tópico, aunque debe ser una versión
                        corta que se tendria que poner a cada tema
                        </p>
                    </div>
                    
                </div>
                <div className='content-load'>
                    <a href='#'>
                        <i className="fa-solid fa-arrows-rotate"></i>                    
                    </a>
                </div>
            </div>
        </div>
    </Wrapper>
  )
}

export default Recomendations

const Wrapper = styled.aside`
   .aside{
        position: fixed;
        right: 0;
        max-height: 80%;
        display: flex;
        transition: right 0.5s;
        .arrow{
            align-self: center;
            position: relative;
            right: -1px;
            margin-left: 10px;
            border-top-left-radius: 15%;
            border-bottom-left-radius: 15%;
            border: 1px solid black;
            border-right: lime;
            background: lime;
            a{
                cursor: pointer;
            }
            i{
                font-size: 1.3rem;
                padding: 10px;
                transition: all 0.3s ease-in-out;
            }
        }
    }
    .opened{
        right: 0;
    }
    .closed{
        right: -302px;
        .arrow-icon{
            transform: rotate(-180deg);
        }
    }
    

    .content{
        background: lime;
        max-width: 300px;
        display: flex;
        
        flex-direction: column;
        align-items: center;
        border: 1px solid black;
        border-top-left-radius: 3%;
        border-bottom-left-radius: 3%;
        justify-content: center;
        .content-list{
            display: flex;
            flex-direction: column;
            gap: 0.2rem;
            max-width: 95%;
            .content-list__item{
                display: flex;
                flex-direction: column;
                align-items: center;
                background-color: lightblue;
                padding: 0px 10px;
                border-radius: 5%;
                h4{
                    margin-block: 0.5rem;
                }
                img{
                    width: 220px;
                }
                p{
                    font-size: 0.9rem;
                    font-family: 'Ubuntu', sans-serif;;
                }
            }
        }
        .content-load{
            height: 40px;
            i{
                font-size: 2rem;
            }
            
        }
    }
`