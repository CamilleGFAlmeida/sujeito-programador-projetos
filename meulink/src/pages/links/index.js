import './links.css';
import {FiArrowLeft, FiLink, FiTrash} from 'react-icons/fi';
import {Link} from 'react-router-dom'; // caminho do link pra voltar pra home
export default function Links() {
  return (
    <div className="links-container">
      <div className="links-header">
        <Link to='/'> {/* parametro TO leva até a pagina home que é a / */} 
          <FiArrowLeft size={38} color="#FFF" />
        </Link>
        <h1>Meus Links</h1>
      </div>

      <div className="links-item">
        <button className="link">
          <FiLink size={18} color="#FFF" />
          https://camilleportfolio.netlify.app/
        </button>
        <button className="link-delete">
          <FiTrash size={24} color="#ff5454" />
        </button>
      </div>

      <div className="links-item">
        <button className="link">
          <FiLink size={18} color="#FFF" />
          https://camilleportfolio.netlify.app/
        </button>
        <button className="link-delete">
          <FiTrash size={24} color="#ff5454" />
        </button>
      </div>
    </div>
  )
}
