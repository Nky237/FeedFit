import { Pic } from './types'
import styled from 'styled-components'

const Cardoo = styled.div`
  @media (max-width: 300px){
    img{
      width: 300px;
      height: 300px;
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