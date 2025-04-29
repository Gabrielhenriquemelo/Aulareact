import Exemplo1 from "./componentes/exemplo1"
import Exercicio1 from "./componentes/exercicio1"
import Exercicio2 from "./componentes/exercicio2"
import Exercicio3 from "./componentes/exercicio3"
import Exercicio4 from "./componentes/exercicio4"
import Exercicio5 from "./componentes/exercicio5"
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

      <hr></hr>

      <h3>chamada para o Exercicio 4</h3>
      <Exercicio4 tipo="retangulo" base="10" altura="5" />
      <Exercicio4 tipo="triangulo" base="10" altura="5" />
      <Exercicio4 tipo="quadrado" base="10" altura="5" />

      <hr></hr>

      <h3>chamada pR o Exerciio 5</h3>
      <Exercicio5 quantidadeC="10" />
      <Exercicio5 quantidadeC="20" />
      

    </div>


  )
}