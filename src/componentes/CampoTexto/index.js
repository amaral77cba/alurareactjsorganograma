import './CampoTexto.css'

const CampoTexto = (props) => {

    const placeholderAux = `${props.placeholder}`

    return(
        <div className="campo-texto">
            <label>{props.label}</label>
            <input placeholder={placeholderAux}/>
        </div>
    )    
}

export default CampoTexto