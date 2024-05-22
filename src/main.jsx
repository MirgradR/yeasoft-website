import Header from './components/header/Header'
import AboutUs from './components/aboutUs/AboutUs'
import Partners from './components/partners/Partners'
import SectionTitle from './components/sectionTitle/SectionTitle'
import Profession from './components/professionСard/Profession'
import Advantages from './components/advantages/Advantages'
import Feedback from './components/feedback/Feedback'
import Questions from './components/questions/Questions'
import ApplicationTitle from './components/applicationTitle/ApplicationTitle'
import ApplicationForm from './components/applicationForm/ApplicationForm'
import Footer from './components/footer/Footer'



function Main() {
  return (
    <>
      <Header />
      <AboutUs />
      <Partners />
      <SectionTitle title='Our Services' paragraph='Transform your brand with our innovative digital solutions that captivate and engage your audience.' />
      <Profession />
      <SectionTitle title='Why Choose YeaSoft?' paragraph='Experience excellence in digital craftsmanship with our team of skilled professionals dedicated to delivering exceptional results.' />
      <Advantages />
      <SectionTitle title='What our Clients say About us?' paragraph="At SquareUp, we take pride in delivering exceptional digital products and services that drive success for our clients. Here's what some of our satisfied clients have to say about their experience working with us" />
      <Feedback />
      <SectionTitle title='Frequently Asked Questions' paragraph="Still you have any questions? Contact our Team via hello@squareup.com" />
      <Questions />
      <ApplicationTitle />
      <ApplicationForm />
      <Footer />
    </>
  )
}

export default Main
