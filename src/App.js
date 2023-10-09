import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import Lista from './components/List';

function App() {

 
  {/*
  function sum(a,b){
  return a + b
  }
  const url = "https://via.placeholder.com/150"
  */}

  return (
    <div className="App">
      {/*<hi>Aprendendo na marra</hi>
      <p>Se deus quiser vai</p>
      <p>Ola {name} </p>
      <p>Conta: {1+2}</p>
      <p>conta: {sum(1,2)}</p> {/* Chamando função*}
      <img src={url} alt='Minha imagem'></img> {/* Colocando uma imagem*/}


      <HelloWorld />
     
      <Pessoa 
        nome="rodrigo" 
        idade="21" 
        profissao="programador" 
        foto="https://via.placeholder.com/150" 
      />

      <Frase/>
      <Lista/>
    </div>
  );
}

export default App;
