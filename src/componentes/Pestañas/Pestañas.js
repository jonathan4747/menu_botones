import './Pestañas.css'
function Pestañas(props){
    return(
        <div>
            <div className='botones'>
                <button onClick={() => props.VizualisaTodo(1)}>
                    Tab1  
                </button >
                <button onClick={() => props.VizualisaTodo(2)}>
                    Tab2
                </button>
                <button onClick={() => props.VizualisaTodo(3)}>
                    Tab3
                </button>
            </div>
            <div className='resultado'>
                <h1>{props.ver.nombre}</h1>
            </div>
        </div>
    )
}

export default Pestañas;