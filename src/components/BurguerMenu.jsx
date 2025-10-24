import { slide as Menu } from 'react-burger-menu'
import './../styles/BurguerMenu.css'

export default function BurgerMenu() {
  return (
    <Menu left>
      <a id="home" className="menu-item" href="#home">Home</a>
      <a id="services" className="menu-item" href="#cards">Serviços</a>
      <a id="about" className="menu-item" href="#about">Sobre</a>
      <a id="contact" className="menu-item" href="#contact">Contato</a>
    </Menu>
  )
}
