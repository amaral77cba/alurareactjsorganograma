
import Banner from './componentes/Banner/Banner';
import CampoTexto from './componentes/CampoTexto';

function App() {
  return (
    <div className="App">
      <Banner />
      <CampoTexto label='Nome' placeholder="Digite o nome"/>
      <CampoTexto label='Cargo' placeholder="Digite o cargo"/>
      <CampoTexto label='Imagem' placeholder="Selecione a imagem"/>
      
    </div>
  );
}

export default App;
