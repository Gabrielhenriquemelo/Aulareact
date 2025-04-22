export default function Exercicio3({ valor, taxa , tempo})
{
    let valorp = valor + (valor*(taxa*taxa/100)*tempo)

    return(
        <div>
            <h3> Resultado</h3>
            O valor da parcela é: {valor}R$
            <br></br>
            valor da taxa é: {taxa}%
            <br></br>
            valor da tempo é: {tempo}dias
        </div>
    );
}