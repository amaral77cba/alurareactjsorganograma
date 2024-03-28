
import Banner from './componentes/Banner/Banner';
import CampoTexto from './componentes/CampoTexto';
import Formulario from './componentes/Formulario';

function App() {
  return (
    <div className="App">
      <Banner />
      {/*  Foi removido daqui e jogado para dentro do js do Formulario
      <CampoTexto label='Nome' placeholder="Digite o nome"/>
      <CampoTexto label='Cargo' placeholder="Digite o cargo"/>
      <CampoTexto label='Imagem' placeholder="Selecione a imagem"/>
      */}
      <Formulario />
    </div>
  );
}

export default App;
