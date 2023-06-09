const form = document.getElementById("ics");
const dayName = new Array ("segunda", "terça", "quarta", "quinta", "sexta", "sábado", "domingo")

document.onload = atualizarDia();

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    verificaDiaDisponivel();
});

function armazenaHora() {
    //Pega o valor da hora, quebra em Hora e Minuto
    const stringHora = document.querySelector("#start-time").value;
    const partesHora = stringHora.split(":");
    const hora = parseInt(partesHora[0], 10); 
    const minuto = partesHora[1]; 
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

            if (diaDaSemana == 0) {
                segundaFeira(diaDaSemana, totalUtil, horario, horasEMinutos);
            } else if (diaDaSemana == 3) {
                quintaFeira(diaDaSemana, totalUtil, horario, horasEMinutos);
            } else if (diaDaSemana == 4) {
                sextaFeira(diaDaSemana, totalUtil, horario, horasEMinutos);
            }  else {
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

function segundaFeira(diaDaSemana, totalUtil, horario, horasEMinutos) {
    if (totalUtil < 18) {
        alert(`Parabéns, Você foi agendado para ${dayName[(diaDaSemana - diaDaSemana) + 1]} ${totalUtil}:${horasEMinutos[1]}`);
    } else {
        totalUtil = ((horario - 9) + 3);
        alert(`Parabéns, Você foi agendado para ${dayName[(diaDaSemana - diaDaSemana) + 2]} ${totalUtil}:${horasEMinutos[1]}`);
    }
}

function quintaFeira(diaDaSemana, totalUtil, horario, horasEMinutos) {
    if (totalUtil < 18) {
        alert(`Parabéns, Você foi agendado para ${dayName[diaDaSemana + 1 ]} ${totalUtil}:${horasEMinutos[1]}`);
    } else {
        totalUtil = ((horario - 9) + 3);
        alert(`Parabéns, Você foi agendado para ${dayName[(diaDaSemana - diaDaSemana)]} ${totalUtil}:${horasEMinutos[1]}`);
    }
}

function sextaFeira(diaDaSemana, totalUtil, horario, horasEMinutos) {
    if (totalUtil < 18) {
        alert(`Parabéns, Você foi agendado para ${dayName[(diaDaSemana - diaDaSemana)]} ${totalUtil}:${horasEMinutos[1]}`);
    } else {
        totalUtil = ((horario - 9) + 3);
        alert(`Parabéns, Você foi agendado para ${dayName[(diaDaSemana - diaDaSemana) + 1]} ${totalUtil}:${horasEMinutos[1]}`);
    }
}


function atualizarDia () {
    let f = new Intl.DateTimeFormat('en');
    let a = f.formatToParts();
    const horario = document.querySelector("#start-time")
    document.querySelector("#start-date").min = `${a[4].value}-0${a[0].value}-${a[2].value}`;
    
}