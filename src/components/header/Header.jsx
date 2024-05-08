import './header.css'
import Button from '../button/Button'

function Header() {
  return (
      <header className="header">
        <a href="/" className='header__logo'>
          <img src="/public/images/Logo.svg" alt="logo Yeasoft"></img>
        </a>
        <nav className='header__nav'>
          <a href="/">Home</a>
          <a href="/">Services</a>
          <a href="/">Work</a>
          <a href="/">Process</a>
          <a href="/">About</a>
          <a href="/">Careers</a>
        </nav>
        <Button className='button button-green' type="button">Contact Us</Button>
      </header>
  )
}

export default Header
