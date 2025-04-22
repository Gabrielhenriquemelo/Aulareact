import Exemplo1 from "./componentes/exemplo1"
import Exercicio1 from "./componentes/exercicio1"
import Exercicio2 from "./componentes/exercicio2"
import Exercicio3 from "./componentes/exercicio3"


export default function app ()
{

  return (
    <div>
      <h1>Exercicios de Componentes</h1>

      <Exemplo1 numero1={10} numero2={5} />
      <Exemplo1 numero1={50} numero2={45.98} />

      <hr></hr>

      <h3>Chamadas para o Exercicio 1</h3>
       <Exercicio1 fah="100" />
       <Exercicio1 fah="70" />
       
      <hr></hr>

       <h3>Chamadas para o Exercicio 2</h3>
       <Exercicio2 peso="80" altura= "1.80" />
       <Exercicio2 peso="60" altura= "1.60" />
       <hr></hr>
       <h3>Chamada para o Exercício 3</h3>
      <Exercicio3 valor="100" taxa="10" tempo="2"/>
      <Exercicio3 valor="100" taxa="10" tempo="10" />
    </div>

  )
}