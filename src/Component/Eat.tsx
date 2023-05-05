import { Props } from "./types"



const Eat: React.FC<Props> = ({image, head, para}) => {
  return (
    <div>
        <img src={image} alt="" />
        <h3>{head}</h3>
        <p>{para}</p>
    </div>
  )
}

export default Eat