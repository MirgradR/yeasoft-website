import './aboutUs.css'
import Button from '../button/Button'


function AboutUs() {

  return (
    <div className='about-us'>
      <h1 className='about-us__title'>A Digital Product Studio <br /> that will Work</h1>
      <div className='about-us__customers'>
        <p> For <span>Startups</span> , <span>Enterprise leaders</span> , <span>Media & Publishers</span> and  <span>Socia Good</span></p>
      </div>
      <div className='about-us__button-wrapper'>
        <Button className='button button-grey' type="button">Our Works</Button>
        <Button className='button button-green' type="button">Contact Us</Button>
      </div>
    </div>
  )
}

export default AboutUs
