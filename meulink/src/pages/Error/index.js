
import './error.css'; 
import {Link} from 'react-router-dom'; 

export default function Error(){
    return(
        <div className='container-error'>
            <img src='not-found-semfundo.png' alt='pagina 404' />
            <h1>Página não Encontrada</h1>
            <Link to="/"> 
            Voltar para Home
            </Link>
        </div>
    )
}