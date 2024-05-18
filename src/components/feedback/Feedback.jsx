import FeedbackCard from './сard/FeedbackCard'

function Feedback() {
  return (
    <>
      <div className='clients-card'>
        <div className='clients-card__column-1'>
          <FeedbackCard img='/public/images/clients/Profile.png' title='SquareUp has been Instrumental in Transforming our Online Presence. ' paragraph="Their team's expertise in web development and design resulted in a visually stunning and user-friendly e-commerce platform. Our online sales have skyrocketed, and we couldn't be happier." name='John Smith' profession='CEO of Chic Boutique' />
          <FeedbackCard img='/public/images/clients/Profile-1.png' title='Working with SquareUp was a breeze.' paragraph="They understood our vision for a mobile app that streamlined our food delivery service. The app they delivered exceeded our expectations, and our customers love the seamless ordering experience. SquareUp is a trusted partner we highly recommend." name='Sarah Johnson' profession='Founder of HungryBites' />
          <FeedbackCard img='/public/images/clients/Profile-2.png' title='SquareUp developed a comprehensive booking and reservation system for our event management company' paragraph="Their attention to detail and commitment to delivering a user-friendly platform was evident throughout the project. The system has streamlined our operations and enhanced our clients' event experiences." name='Mark Thompson' profession='CEO of EventMasters' />
        </div>
        <div className='clients-card__column-2'>
          <FeedbackCard img='/public/images/clients/Profile-3.png' title='ProTech Solutions turned to SquareUp to automate our workflow' paragraph="They delivered an exceptional custom software solution. The system has significantly increased our productivity and reduced manual errors. SquareUp's expertise and professionalism have made them a trusted technology partner." name='Laura Adams' profession='COO of ProTech Solutions' />
          <FeedbackCard img='/public/images/clients/Profile-4.png' title='SquareUp designed and developed a captivating web portal for showcasing our real estate listings.' paragraph="The platform is visually appealing and easy to navigate, allowing potential buyers to find their dream homes effortlessly. SquareUp's expertise in the real estate industry is unmatched." name='Michael Anderson' profession='Founder of Dream Homes' />
          <FeedbackCard img='/public/images/clients/Profile-5.png' title='FitLife Tracker wanted a mobile app that tracked fitness activities and provided personalized workout plans.' paragraph="SquareUp's team developed an intuitive and feature-rich app that has helped our users stay motivated and achieve their fitness goals. We highly recommend SquareUp for any health and fitness app development needs." name='Emily Turner' profession='CEO of FitLife Tracker' />
        </div>
      </div>
    </>
  )
}

export default Feedback
