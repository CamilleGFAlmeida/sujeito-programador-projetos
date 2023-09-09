// importando as rotas das outras páginas 
import RoutesApp from "./routes"; 


// classe .app criada no arquivo index 
// renderiza o documento "pagina home" dentro de pages
export default function App() {
  return(
    <div className="app"> 
      <RoutesApp /> 
    </div>
  )
}
