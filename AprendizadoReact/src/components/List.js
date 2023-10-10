import Item from "../Item"

function Lista(){
    return(
        <>
        <h1>Minha Lista</h1>
        <ul>
            <Item marca="Ferrari"ano_lancamento={1940} />
            <Item marca="Ford"ano_lancamento={1960}/>
            <Item marca="hasbro"ano_lancamento={2000}/>
            <Item/>
        </ul>
        
        </>
    )

}

export default Lista