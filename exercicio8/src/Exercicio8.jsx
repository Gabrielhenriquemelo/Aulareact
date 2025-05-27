export default function Exercicio8({ peso, altura })
{
    let imc = peso/(altura*altura)
    return(
      <div>
       

        Uma pessoa com {peso} e {altura} tem IMC de {imc}
      </div>
    );
}
