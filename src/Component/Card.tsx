import { Pic } from './types'
const Card = ({image}:Pic) => {
  return (
    <div>
        <img src={image} alt="testimonies" />
    </div>
  )
}

export default Card