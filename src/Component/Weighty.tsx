import styled from "styled-components"
import { Center, Button, Conto, Table} from "./MyStyle.style"
import {useState} from 'react'

interface Warp{
    image: string
    head: string
    head1: string | null
    para1: string
    para3: string
    list1: string
    list2: string
    list3: string
    list4: string
    list5: string
}
const Div = styled.div`
line-height: 24px;
margin: 23px auto;
h3{
    text-align: center;
    width: 59%;
    font-weight: 200;
    margin: auto;
}
button{
    width: 500px;
    height: 65px;
    padding: 12px;
    border-radius: 8px;
    margin-top: 20px;


}

@media (max-width: 768px) {
    button{
        width: 200px;
    }
 }

`
// const Relative = styled.div`
// position: relative;
// width: 100vh !important;
// `
const Weighty = ({image,head,head1,para1,para3,list1,list2,list3, list4, list5}: Warp) => {
    const [open, setOpen] = useState(false)
    const Close = ()=>{
        setOpen(false)
    }
    const getMeal = ()=>{
        setOpen(true)
    } 
  return (
    <div style={{lineHeight: '24px'}}>
        <Center>
            <img style={{padding: '10px 0'}} src={image} alt="" />
            <h1>{head}</h1>
            <p style={{padding: '10px 0'}}>{para1}</p>
            <h4>Your BMI score is {head1}</h4>
        </Center>
        <Div>
        
        <h3>{para3}</h3>
        </Div>
        <ul>
            <h3>{list1}</h3>
            <li>{list5}</li>
            <li>{list2}</li>
            <li>{list3}</li>
            <li>{list4}</li>
        </ul>
        <Table>
           <tr>
            <td>Below 18.5</td>
            <td>18.5 - 26.9</td>
            <td>25.9 - 29.9</td>
            <td>50.0 and above</td>
            </tr> 
           <tr>
            <td>Below 18.5</td>
            <td>18.5 - 26.9</td>
            <td>25.9 - 29.9</td>
            <td>50.0 and above</td>
            </tr> 
            </Table>
            <Center>
              
    <Div style={{paddingTop: '20px'}}>
          <p>Would you like to get more professional assistance like work out and diet plans suited just for you? Click on the button below and begin your healthy journey today.</p>
            <Button onClick={getMeal}>Get a meal plan</Button>
    </Div>  
        </Center>

        <Conto style={{display: open? 'flex': 'none'}}>
            <div>
            <small onClick={Close}>x</small>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis quis laborum sed distinctio aperiam? Recusandae, illum magni. Cumque beatae harum, inventore odio quae similique recusandae, aspernatur mollitia illum, quod ipsum.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis quis laborum sed distinctio aperiam? Recusandae, illum magni. Cumque beatae harum, inventore odio quae similique recusandae, aspernatur mollitia illum, quod ipsum.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis quis laborum sed distinctio aperiam? Recusandae, illum magni. Cumque beatae harum, inventore odio quae similique recusandae, aspernatur mollitia illum, quod ipsum.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis quis laborum sed distinctio aperiam? Recusandae, illum magni. Cumque beatae harum, inventore odio quae similique recusandae, aspernatur mollitia illum, quod ipsum.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis quis laborum sed distinctio aperiam? Recusandae, illum magni. Cumque beatae harum, inventore odio quae similique recusandae, aspernatur mollitia illum, quod ipsum.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis quis laborum sed distinctio aperiam? Recusandae, illum magni. Cumque beatae harum, inventore odio quae similique recusandae, aspernatur mollitia illum, quod ipsum.</p>
            </div>
        </Conto>
    
    </div>
  )
}

export default Weighty