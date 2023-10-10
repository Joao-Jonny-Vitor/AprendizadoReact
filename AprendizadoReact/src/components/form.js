import { useState } from 'react'

function Form() {

    function cadastrarUsuario(e) {
        {/*comando no prompt e mostrando o nome apos sbmit*/ }
        e.preventDefault()
        console.log(name)
        console.log(`Usuario ${name} foi cadastrado com a senha ${password}`)
    }

    const [name, setName] = useState()
    const [password, setPassoword] = useState()
    return (
        <div>
            <hl>Meu cadastro:</hl>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Digite o seu nome" 
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="passoword">Senha:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Digite o sua senha"
                        onChange={(e) => setPassoword(e.target.value)}
                    /> {/*Comando para a area de texto */}
                </div>
                <div>
                    <input type="submit" value="cadastrar" /> {/*comando para o botão*/}
                </div>
            </form>
        </div>

    )
}

export default Form