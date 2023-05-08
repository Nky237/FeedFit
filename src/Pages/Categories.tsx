import { FormEventHandler, useState } from 'react';
import { Wrapper, Flex, Button, Form, Smal, Column, Conto, Container } from '../Component/MyStyle.style';
import Human from '../assets/Human.svg';
import { useNavigate } from 'react-router-dom';

const Categories = () => {
  const [BMI, setBMI] = useState('');
  const [height, setHeight] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);

	
  const navigate = useNavigate()
  const CalcBMI: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    

  if(height === 0 || weight === 0){
    alert('invalid input')
  }
  else{
    let BMI = ( weight/(height/100) **2)
      setBMI(BMI.toFixed(2))
      sessionStorage.setItem('user', JSON.stringify(BMI))
      if(BMI < 18.5){
        navigate('/about')
      }
      else if(BMI >= 18.5 && BMI <= 24.5){
        navigate('/product')

      }
    else{  
        navigate('/price')
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

    </Wrapper>
  );
};

export default Categories;
