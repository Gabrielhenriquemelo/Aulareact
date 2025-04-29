export default function Exercicio5 ({quantidadeC})
{

    let salariob = quantidadeC * 150;
    let aliquota = (8/100)*salariob;
    let salarioL = salariob - aliquota;

    return(
        <div>
            <h3> Resultado</h3>
            Quantidade de consultas: {quantidadeC}
            <br></br>
            O salario bruto é: {salariob} R$
            <br></br>
            O desconto do INSS é: {aliquota} R$
            <br></br>
            O salario liquido é: {salarioL} R$

        </div>
    );
}
    
