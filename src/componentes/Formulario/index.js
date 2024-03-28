import CampoTexto from '../CampoTexto'
import './Formulario.css'

const Formulario = () => {
    return (
        <section className='formulario'>
            <form>
                <h2>Preencha os dados para criar o card</h2>
                <CampoTexto label='Nome' placeholder="Digite o nome" />
                <CampoTexto label='Cargo' placeholder="Digite o cargo" />
                <CampoTexto label='Imagem' placeholder="Selecione a imagem" />
            </form>
        </section>
    )
}

export default Formulario