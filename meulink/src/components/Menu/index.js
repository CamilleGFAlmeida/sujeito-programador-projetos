
import './menu.css'; // importando o css
import {BsLinkedin, BsInstagram} from 'react-icons/bs'; // icones com biblioteca bs
import {Link} from 'react-router-dom';

export default function Menu() {
    return (
      <div className='menu'>
        <a
          className="social"
          href="https://www.linkedin.com/in/camille-guillen-fernandes-de-almeida-532701215/"
        >
          <BsLinkedin color="#fff" size={24} />
        </a>
        <a
          className="social"
          href="https://www.instagram.com/fernandeslilee/"
        >
          <BsInstagram color="#fff" size={24} />
        </a>
        <Link className='menu-item' to='/links'>
        Meus Links
        </Link> 
      </div>
    )
}