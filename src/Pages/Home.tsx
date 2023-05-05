import { Input, Container, LightGreen, Center, Small, Flex, Button,Wrapper, Ash, Wrap, Figure } from "../Component/MyStyle.style"
import Bg from '../assets/image1.svg'
import { Info } from "../Component/data"
import Eat from "../Component/Eat"
import Card from "../Component/Card"
import Test1 from '../assets/Tes1.svg'
import Test2 from '../assets/Tes2.svg'
import Test3 from '../assets/Tes3.svg'
import Foot from "../Component/Footer"




const Home: React.FC = () => {
  return (
    
    <Container>
        <Center>
        <Input placeholder="search" />
        </Center>
            {/*Section 1  */}
            <Ash>
            <Wrap>
            <Flex>
            <div>
                <h1>Lets Begin Your <br/> </h1>
                <p>Achieve your weight goals and improve your
                    overall health with our customized diet plans
                tailored to your specific needs.</p>
                <p>Achieve your weight goals and improve your
                    overall health with our customized diet plans
                tailored to your specific needs.</p>
                <Button>Get Started</Button>
            </div>
            <img src = {Bg}  alt = 'bg' />
        </Flex>
            </Wrap>
            </Ash>
            
            <Wrapper>
                <h1> Featured Products </h1>
                <Flex>
                    {
                        Info.map((item, index)=>(
                            <Figure key = {index}>
                                <img src ={item.image} alt ='item' />
                                <h3>{item.head}</h3>
                               <p>{item.para}</p>
                            </Figure>
                        ))
                    }
                </Flex>
            </Wrapper>
                    <Ash>
                    <Wrapper>
                <h1>What we do</h1>
                <Small>
                    <Eat image = {Info[0].image} head = {'Meal plan'} para = {'The ultimate tool to living a healthy life. Whether you want to lose weight, gain weight, or maintain a healthy weight, our app can help you reach your goals by providing personalized meal plans, nutrient tracking, recipe suggestions, progress tracking, support and motivation.'} />
                    <Eat image = {Info[1].image} head = {'Nutrition made easy'} para = {'Eating healthy has never been simpler with our expert nutrition guides and convenient meal plans.'} />
                </Small>
            </Wrapper>
                    </Ash>
            <Wrapper>
                    <Center>
                    <h1>Results you can see, Health = feel</h1>
                        <p>Take it from our members.</p>
                    </Center>
                <Flex>
                    <Card image= {Test1} />
                    <Card image= {Test2} />
                    <Card image= {Test3} />
                </Flex>
                <p style={{lineHeight: '38.5px'}}>“...for every body health goal to work, it has to work for you.”</p>
            </Wrapper>
            <LightGreen>
            <Wrapper>
                <Flex>
                    <div>
                        <h3>NEW TO FEEDFIT?</h3>
                        <p>Subscribe to our newsletter to get updates on our latest offer</p>
                    </div>
                    <div>
                        <input type="text"  placeholder="Email Address"/>
                        <Button>Subscribe</Button>
                    </div>
                    </Flex>
            </Wrapper>
            </LightGreen>

                {/*FOOTER  */}
                <Foot />

    </Container>
  )
}

export default Home