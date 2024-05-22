import './footer.css'

function Footer() {



    return (
        <footer className='footer'>
            <article>
                <section className='section'>

                    <img src="/public/images/Logo.svg" alt="logo" />

                    <nav className='nav'>
                        <a href="/">Home</a>
                        <a href="/">Services</a>
                        <a href="/">Work</a>
                        <a href="/">Process</a>
                        <a href="/">About</a>
                        <a href="/">Careers</a>
                        <a href="/">Contact</a>
                    </nav>

                    <div className='footer__connect section'>
                        <p>Stay Connected</p>
                        <img src="/public/images/icon/facebook.svg" alt="facebook" />
                        <img src="/public/images/icon/twitter.svg" alt="twitter" />
                        <img src="/public/images/icon/linkedin.svg" alt="linkedin" />
                    </div>
                </section>

                <section >
                    <address className='footer__address'>
                        <img src="/public/images/icon/icon-mail.svg" alt="icon-mail" /><a href="mailto:hello@squareup.com">hello@squareup.com</a>
                        <img src="/public/images/icon/icon-tel.svg" alt="icon-tel" /><a href="tel:+91 91813 23 2309">+91 91813 23 2309</a>
                        <img src="/public/images/icon/icon-geo.svg" alt="icon-geo" /><a href="http://">Somewhere in the World</a>
                        <span>&copy; 2024 All rights reserved.</span>
                    </address>
                </section>
            </article>
        </footer>
    )
}

export default Footer
