function dataMaior (dt1, dt2){
    const data1 = new Date(dt1);
    const data2 = new Date(dt2);
   
    if (data1>data2){
        return data1;
    }else{
        return data2;
    }
}

function intervaloData (dt1, dt2){
    if(data1<data2){
        const dataint = Math.abs (new Date(data2) - new Date(data1));

        let dias = Math.floor(dataint / (1000 * 60 * 60 * 24));
        return dias;
    }else{
        console.log("Não é possível realizar essa operação. Data inicial é mais recente que a data final")
    }
}
function dataAtual() {
    const agora = new Date();
    return agora.toLocaleTimeString() + " - " + agora.toLocaleDateString();
}

const data1 = "2023-05-03";
const data2 = "2024-06-02";
const maior = dataMaior(data1, data2);
const intervalo = intervaloData (data1, data2);

console.log(`A maior data entre ${data1} e ${data2} é ${maior}`);
console.log(`O intervalo das datas ${data1} e ${data2} é de ${intervalo} Dias`);
console.log(`A data atual Hora:minuto - dia/mês/ano é: ${dataAtual()}`);