export default function Exercicio1( { fah } )
{
    let celsius = Number(fah - 32) * 5/9

    return(
        <div>
            <h3>Conversão de Fah para Celsius</h3>

            A conversão de {fah}°F para grau Celsius é {Celsius}°C
        </div>
    );
}