import {useState} from 'react'; 
import {FiLink} from 'react-icons/fi'; // importando os ícones 
import './home.css'; // importando o css

import Menu from '../../components/Menu'; // chamando o menu
import LinkItem from '../../components/LinkItem';

import api from "../../services/api" 

export default function Home() {
  const [link, setLink] = useState(''); 
  const [data, setData] = useState({}); 
  const [showModal, setShowModal] = useState(false);  

  async function handleShortLink(){
    try{
      const response = await api.post('/shorten', {
        long_url: link
      })

      setData(response.data); 
      setShowModal(true);

      setLink(''); /* no tt estava sem ; */

    }catch{
      alert('Algo deu errado'); 
      setLink(''); 
    }
  }

  return (
    <div className="container-home">
      <div className="logo">
        <img src="/logo1.png" alt="Liink Logo" />
        <h1>Liink Encurtador</h1>
        <span>Cole seu link para encurtar 👇</span>
      </div>

      <div className="area-input">
        <div>
          <FiLink size={24} color="#FFF" />
          <input
            placeholder="Cole seu link aqui..."
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </div>

        <button onClick={handleShortLink}>Encurtar Link</button>
      </div>

      <Menu />

      {showModal && (
      <LinkItem 
      closeModal={ () => setShowModal(false)}
      content={data}
      />
      ) }

    </div>
  )
}
