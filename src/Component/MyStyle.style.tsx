import styled from "styled-components";

export const Container = styled.div`
width: 100%;
`
export const Wrapper = styled.div`
width: 90%;
margin: auto;
margin: 40px auto;
padding: 40px 0;
h1{
    text-align: center;
}
`
export const Wrap = styled(Wrapper) `
   p{
    line-height: 32.78px;
   }
   
    img{
        width: 70%;
        height: 522px;
    }
`
export const Button = styled.button `
    background-color: #74DDA0;
    border-radius: 16px;
    width: 144px;
    padding: 8px;
    color: white;
    height: 48px;
    border: none;
    cursor: pointer;

`
export const Center = styled.div`
/* width: 50%; */
margin: auto;
text-align: center;

`
export const Input = styled.input`
width: 670px;
height: 48px;
border-radius: 16px;
border: 1px solid #74DDA0;
color: #74DDA0;
padding: 0 20px;


`
export const Flex = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

 @media (max-width: 768px) {
    flex-direction: column;
 }

`
export const Ash = styled.div`
    background-color: #F7F7F7;
`
export const Figure  = styled.div`
    width: 400px;
    height: 440px;
    line-height:27.32px;
    text-align: center;


    img{
    width: 400px;
    height: 346px;
    background-color: #DEF7E8;
    object-fit: cover;
    padding: 40px;
    border-top-right-radius: 100px;
    border-top-left-radius: 16px;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    }


`
export const Small = styled(Flex)`
justify-content: center;
align-items: center;
gap: 50px;
text-align: center;
line-height: 35.22px;
    div{
        width: 40%;
    }
    img{
        height: 300px;
        width: 360px;
    }
`
export const LightGreen = styled.div`
background-color: #58D68D;
color: white;
 div{
    margin-bottom: 0;
    justify-content: space-between;
    line-height: 32.78px;
 }
 input, button{
    height: 49px;
    border: none;

 }
 button{
    width: 91px;
 }
 input{
    width: 230px;
    padding: 0 30px;
 }
`

export const Footer = styled(Flex)`
background-color: #0A9C48;
color: white;
justify-content: space-around;
line-height: 30px;
margin-top: 0;
padding: 30px 0;
`
export const Form =styled.form`
width: 80%;
input, select{
    height: 50px;
    width: 480px;
    padding: 0 20px;
}
button{
    border-radius: 8px;
    width: 480px;
    margin-top: 20px;
}
label{
    padding-bottom: 10px;
}
@media(max-width: 560px){
    width: 90%;
    input, select{
        width: 450px;
    }
    button{
      width:  400px;
    }
    }
`
export const Smal = styled.div`
select{
    width: 80px;
    margin-left: 20px;
}
@media(max-width: 560px){
 input{
        width: 330px;
    }
    select{

        margin-left: 10px;
    }
    }




`
export const Column = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
`
export const Conto = styled.div`
height: 100vh;
width: 100%;
background-color: rgba(0,0,0,0.5);
position: absolute;
top: 0;
left: 0;
display: flex;
align-items: center;
justify-content:center;
background-position: fixed;
text-align: center;

small{
    justify-content: flex-end;
    cursor: pointer;
    font-size: 36px;
    color: red;
    padding-right: 12px;
    display: flex;
    
}

div{
    background: white;
    color: black;
    height: 300px;
    width:60%;
    overflow: auto;
    display: flex;

    flex-direction: column;

}
P{
    width: 100%;
}
`
export const Table = styled.table`
border: 3px solid #58D68D;
padding: 10px;
border-collapse: collapse;
td{
    border: 3px solid #58D68D;
    padding: 10px; 
}

`
export const Eighty = styled.div`
width: 60%;
margin: auto;
`
