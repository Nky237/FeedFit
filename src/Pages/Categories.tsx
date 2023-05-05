import React, { FormEventHandler, useState } from 'react';
import { Wrapper, Flex, Button, Form, Smal, Column, Conto } from '../Component/MyStyle.style';
import Human from '../assets/Human.svg';
import { useNavigate } from 'react-router-dom';

const Categories = () => {
  const [message, setMessage] = useState('');
  const [messa, setMessa] = useState('');
  const [BMI, setBMI] = useState('');
  const [height, setHeight] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);
  const [open, setOpen] = useState(false)

	const Back = ()=>{
    setOpen(false)
  }
  const CalcBMI: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    

  if(height === 0 || weight === 0){
    alert('invalid input')
  }
  else{
    setOpen(true)
    let BMI = ( weight/(height/100) **2)
      setBMI(BMI.toFixed(2))

      if(BMI < 18.5){
        setMessage('You are underweight')
        setMessa(`This means you do not have enough body fat, and as such, are prone to malnutrition, decreased  muscle strength, low immunity and a lot more.
        Health risks: 
        Malnutrition.
        Weak immune system.
        Increased risk of fractures.
        Nutrient deficiency.                      
        see more...
        
        `)
      }
      else if(BMI >= 18.5 && BMI <= 24.5){
        setMessage('You are helthy weight')
        setMessa(`This means you do not have enough body fat, and as such, are prone to malnutrition, decreased  muscle strength, low immunity and a lot more.
       <li> Health risks: </li>
        Malnutrition.
        Weak immune system.
        Increased risk of fractures.
        Nutrient deficiency.                      
        
        
        `)

      }
    else{
        setMessage('You are Obesed')
        setMessa(`This means you do not have enough body fat, and as such, are prone to malnutrition, decreased  muscle strength, low immunity and a lot more.
        Health risks: 
        Malnutrition.
        Weak immune system.
        Increased risk of fractures.
        Nutrient deficiency.                      
        see more...
        
        `)
      }
  }

  
  };

  return (
    <Wrapper >
      <h1>BMI (Body Mass Index) Calculator</h1>
      <Flex>
        <img src={Human} width={500} alt="human" />
        <Form action="" onSubmit={CalcBMI}>
          <Column>
            <label htmlFor="">Gender</label>
            <select name="" id="">
              <option selected value="">
                Choose gender
              </option>
              <option value="male">male</option>
              <option value="female">Female</option>
            </select>
          </Column>
          <Column>
            <label htmlFor="">Age</label>
            <input type="number"  />
          </Column>
          <Column>
            <label htmlFor="weight">Weight</label>
            <Smal>
              <input type="number" value={weight} onChange={(e) => setWeight(Number(e.target.value))} />
              <select name="weight" id="">
                <option value="kg">kg</option>
                <option value="g">g</option>
                <option value="lb">lb</option>
              </select>
            </Smal>
          </Column>
          <Column>
            <label htmlFor="height">Height</label>
            <Smal>
              <input type="number" value={height} onChange={(e) => setHeight(Number(e.target.value))} />
              <select name="height" id="height">
                <option value="cm">cm</option>
                <option value="m">m</option>
                <option value="ft">ft</option>
              </select>
            </Smal>
          </Column>
          <div>
            <Button type="submit">Submit</Button>
          </div>
        </Form>
      </Flex>

      <Conto style={{display: open ? 'flex': 'none'}}>
        <div>
          <small onClick={Back}>x</small>
            <h1>Hello!</h1>
            <p>Your BMI result says:{message}</p>
            <h3>Your BMI is {BMI} </h3>
            <p>{messa}</p>
            <Button>See More</Button>
        </div>
        
          
      </Conto>
    </Wrapper>
  );
};

export default Categories;
