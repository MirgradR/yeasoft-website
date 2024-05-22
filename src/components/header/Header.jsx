import { useState } from 'react';
import './header.css'
import Button from '../button/Button'

function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setIsMenuOpen((prev) => !prev)
  }


  return (
    <header className="header">
      <a href="/" className='header__logo'>
        <img src="/public/images/Logo.svg" alt="logo Yeasoft"></img>
      </a>

      <nav className={`nav ${!isMenuOpen ? '' : 'burger__nav'}`}>
        <a href="/">Home</a>
        <a href="/">Services</a>
        <a href="/">Work</a>
        <a href="/">Process</a>
        <a href="/">About</a>
        <a href="/">Careers</a>
      </nav>

      <a onClick={handleClick} className='burger-menu'>
        <img src="/public/images/icon/burger-menu.svg"></img>
      </a>
      <Button className='button button-green' type="button">Contact Us</Button>
    </header>
  )
}

export default Header
