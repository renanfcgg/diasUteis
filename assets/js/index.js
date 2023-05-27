document.getElementById("btn-agendar").onclick = function() {verificaDiaDisponivel()};
var dayName = new Array ("segunda", "terça", "quarta", "quinta", "sexta", "sábado", "domingo")

function armazenaHora() {
    //Pega o valor da hora, quebra em Hora e Minuto
    const stringHora = document.querySelector("#start-time").value;
    const partesHora = stringHora.split(":");
    const hora = parseInt(partesHora[0], 10); 
    const minuto = parseInt(partesHora[1], 10); 
    const horasEMinutos = [hora, minuto]
    return horasEMinutos;
}

function armazenaDia() {
    //Pega o valor da data, altera para dia da semana.
    const selectDate = document.getElementById("start-date").value;
    const completDate = new Date(selectDate);
    const diaDaSemana = completDate.getDay();
    return diaDaSemana;
}

function verificaDiaDisponivel() {
    const diaDaSemana = armazenaDia();
    const horasEMinutos = armazenaHora();
    const horario = horasEMinutos[0];

    if(diaDaSemana && horasEMinutos) {
        if(diaDaSemana < 5) {
            console.log(diaDaSemana);
        } else {
            if (diaDaSemana === 5) {
                if (horario < 18) {
                    let totalUtil = ((horario - 9) + 12);
                    if (totalUtil < 18) {
                        console.log(`Você foi agendado para Terça ${totalUtil}:${horasEMinutos[1]}`);
                    } else {
                        console.log(`Você foi agendado para Quarta ${totalUtil}:${horasEMinutos[1]}`);
                    }
                }
            } else {
                console.log(diaDaSemana)
                console.log("Domingo")
            }
        }
    }
    
}