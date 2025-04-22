export default function Exercicio2({ peso, altura })
{
    let imc = peso/(altura*altura)
    return(
      <div>
        <h3>RESULTADO</h3>

        Uma pessoa com {peso} e {altura} tem IMC de {imc}
      </div>
    );
}

