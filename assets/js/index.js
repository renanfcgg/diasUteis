const form = document.getElementById("ics");
var dayName = new Array ("segunda", "terça", "quarta", "quinta", "sexta", "sábado", "domingo")

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    verificaDiaDisponivel();
});

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
    let diaDaSemana = armazenaDia();
    const horasEMinutos = armazenaHora();
    const horario = horasEMinutos[0];
    let totalUtil = ((horario - 9) + 12);

    if(diaDaSemana == 0) {
        diaDaSemana = 0.1;
    }

    if(diaDaSemana && horasEMinutos) {

        if(diaDaSemana < 5) {
            console.log(diaDaSemana);
            for (let i = 0; i < diaDaSemana; i++) {
                
            }


        } else {
            if (diaDaSemana === 5) {
                if (horario < 18) {
                    totalUtil;

                    if (totalUtil < 18) {
                        alert(`Parabéns, Você foi agendado para Terça ${totalUtil}:${horasEMinutos[1]}`);
                    } else {
                        totalUtil = ((horario - 9) + 3);
                        alert(`Parabéns, Você foi agendado teste para Quarta ${totalUtil}:${horasEMinutos[1]}`);
                    }
                }
            } else {
                if (diaDaSemana === 6) {
                    if (horario < 18) {
                        totalUtil;

                        if (totalUtil < 18) {
                            alert(`Parabéns, Você foi agendado para Terça ${totalUtil}:${horasEMinutos[1]}`);
                        } else {
                            totalUtil = ((horario - 9) + 3);
                            alert(`Parabéns, Você foi agendado teste para Quarta ${totalUtil}:${horasEMinutos[1]}`);
                        }
                    }
                }
            }
        }
    }

}