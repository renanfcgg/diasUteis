const form = document.getElementById("ics");
const dayName = new Array ("segunda", "terça", "quarta", "quinta", "sexta", "sábado", "domingo")

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

    if(diaDaSemana && horasEMinutos || diaDaSemana == 0 && horasEMinutos) {
        if(diaDaSemana < 5 || diaDaSemana === 0) {

            for (let i = 0; i < diaDaSemana; i++) {
                totalUtil;


                if (totalUtil < 18) {
                    alert(`Parabéns, Você foi agendado para ${dayName[diaDaSemana + 1]} ${totalUtil}:${horasEMinutos[1]}`);
                    break;
                } else {
                    totalUtil = ((horario - 9) + 3);
                    alert(`Parabéns, Você foi agendado para ${dayName[diaDaSemana + 2]} ${totalUtil}:${horasEMinutos[1]}`);
                    break;
                }
            }

        } else {
            for (let i = 4; i < diaDaSemana; i++) {
                totalUtil;
                if (totalUtil < 18) {
                    alert(`Parabéns, Você foi agendado para ${dayName[(diaDaSemana - diaDaSemana) + 1]} ${totalUtil}:${horasEMinutos[1]}`);
                    break;
                } else {
                    totalUtil = ((horario - 9) + 3);
                    alert(`Parabéns, Você foi agendado para ${dayName[(diaDaSemana - diaDaSemana) + 2]} ${totalUtil}:${horasEMinutos[1]}`);
                    break;
                }
            }
        }
    }

}