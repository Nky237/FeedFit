import Weighty from "../Component/Weighty";
import Apple from '../assets/Logo.svg';
import { Eighty } from "../Component/MyStyle.style";
import Normal from '../assets/normal.svg'

const Pricing = () => {
  let user = sessionStorage.getItem('user');
  if (user) {
    user = user || null;
  }
  return (
    <Eighty>
      <Weighty
        image={Normal}
        head={"Congratulations!"}
        head1={'Your BMI result says you’re healthy'}
        para1={`Your BMI score is  ${user}`}
        para3={'You’re doing a good job! A healthy body helps increase overall productivity.'}
        list1={'Maintain your current BMI by:'}
        list2={'Drinking lots of water.'}
        list3={'Regular workouts.'}
        list4={'Regularly checking your BMI'}
        list5 = {'Eating healthy.'}
      />
    
    </Eighty>
  );
};
 





export default Pricing;
