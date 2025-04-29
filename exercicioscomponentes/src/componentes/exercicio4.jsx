export default function Exercicio04 ({ tipo, base, altura }) {

    let arearesultado;
    if (tipo=="triangulo")
    {
      arearesultado = base*altura/2;
    }
    else
    if (tipo=="retangulo")
    {
        arearesultado = base*altura;
    }
    else
    if (tipo=="quadrado")
    {
        arearesultado = base*base; 
    }  
    return(
        <div>
            <p>Poligno {tipo} com base {base} e a altura de {altura} tem area de: {arearesultado} </p>
        </div>
    );
}