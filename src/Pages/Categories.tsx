import { Wrapper, Flex, Button, Form, Smal, Column } from "../Component/MyStyle.style"
import Human from '../assets/Human.svg'
const Categories = () => {
  return (
    <Wrapper>
        <h1>BMI (Body Mass Index) Calculator</h1>
        <Flex>
      <img src = {Human} width = {500} alt= 'human' />
        <Form action="">
            <Column>
              <label htmlFor="">Gender</label>
            <select name="" id="">
            <option selected value="">Choose gender</option>
            <option value="male">male</option>
            <option value="female">Female</option>
            </select>
            </Column>
            <Column>
              <label htmlFor="">Age</label>
              <input type="number" />
            </Column>
            <Column>
                <label htmlFor="weight">Weight</label>
                <Smal>
                    <input type="number" />
                    <select name="weight" id="">
                      <option value="kg">kg</option>
                      <option value="g">g</option>
                      <option value="lb">lb</option>
                    </select>
                </Smal>
              </Column>
            <Column>
                <label htmlFor="weight">Height</label>
                <Smal>
                    <input type="number" />
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
  )
}

export default Categories