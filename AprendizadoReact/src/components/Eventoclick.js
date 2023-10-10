function Evento({numero}){

    function meuEvento(){
        console.log('fui ativado!', numero)
    }

    return(
        <div>
            <p>Clique para alterar evento</p>
            <button onClick={meuEvento}> Ativar! </button>
            
            
            </div>
    )
}

export default Evento