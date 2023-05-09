import { Pic } from './types'
import styled from 'styled-components'

const Cardoo = styled.div`

  @media (max-width: 1280px){

    img{
      height: 670px;
    }
  }
  @media (max-width: 1027px){

    img{
      height: 530px;
    }
  }
  @media (max-width: 500px){

    img{
      height: 500px;
    }
  }
  @media (max-width: 300px){

    img{
      height: 360px;
    }
  }
`
const Card = ({image}:Pic) => {
  return (
    <Cardoo>
        <img src={image} alt="testimonies" />
    </Cardoo>
  )
}

export default Card