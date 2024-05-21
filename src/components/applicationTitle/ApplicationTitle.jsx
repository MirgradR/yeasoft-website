import './applicationTitle.css'
import Button from '../button/Button'

function ApplicationTitle() {
  return (
    <div className='application-title'>
      <div className='section-wrapper'>
        <img className='img-logo' src="/public/images/logo-no-text.svg" alt="logo" />
        <h1>Thank you for your Interest in YeaSoft</h1>
        <p>We would love to hear from you and discuss how we can help bring your digital ideas to life. Here are the different ways you can get in touch with us.</p>
        <Button className='button button-green' type="button">Start Project</Button>
      </div>
    </div>
  )
}

export default ApplicationTitle
