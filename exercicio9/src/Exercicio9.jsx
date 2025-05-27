export default function Exercicio9({capital,juros,tempo})

{
    let montante= capital * Match.pow(1 + juros/ 100,tempo);

    return(
        <div>
        O montante e de {montante}
        </div>
    )
}