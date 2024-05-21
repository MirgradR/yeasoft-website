import './applicationForm.css'
import Button from "../button/Button"

function ApplicationForm() {
    return (
        <div>
            <form className='application-form' action="/submit-form" method="POST">
                <section className='user-data wrap-block'>
                    <label  className='user-data__name'>
                        <div>
                            <p>Full Name</p>
                            <input type="text" placeholder='Type here' />
                        </div>
                    </label>
                    <label className='user-data__email'>
                        <div >
                            <p>Email</p>
                            <input type="email" placeholder='Type here' />
                        </div>
                    </label>
                </section>
                <section className='inquiry-reason wrap-block'>
                    <p className='inquiry-reason__title'>Why are you contacting us?</p>
                    <div className='inquiry-reason__checkbox'>
                        <input type="checkbox" id="web" className="custom-checkbox" />
                        <label htmlFor="web">Web Design</label>
                        <input type="checkbox" id="app" className="custom-checkbox" />
                        <label htmlFor="app">Mobile App Design</label>
                        <input type="checkbox" id="collab" className="custom-checkbox" />
                        <label htmlFor="collab">Collaboration</label>
                        <input type="checkbox" id="others" className="custom-checkbox" />
                        <label htmlFor="others">Others</label>
                    </div>
                </section>
                <section className='budget wrap-block'>
                    <p className='budget__title'>Your Budget</p>
                    <span>Slide to indicate your budget range</span>
                    <div className="budget__range">
                        <input type="range" min="0" max="1000" value="200" className="slider" id="min-price" />
                        <div className="slider-track"></div>
                    </div>
                </section>
                <section className='message wrap-block'>
                    <label>
                        <p className='message__title'>Your Message</p>
                        <textarea className='message__text' placeholder='Type here' maxLength="500" />
                    </label>
                </section>
                <Button className='button button-green' type="submit">Submit</Button>
            </form>
        </div>
    )
}

export default ApplicationForm
