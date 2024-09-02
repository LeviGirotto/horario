function atualizar_horario() {
    var horas = Number(new Date().getHours())
    var minutos = Number(new Date().getMinutes())
    var segundos = Number(new Date().getSeconds())
    horas = horas < 10 ? '0' + horas : horas;
    minutos = minutos < 10 ? '0' + minutos : minutos;
    segundos = segundos < 10 ? '0' + segundos : segundos;
    var horario = document.getElementById('horario')
    horario.innerHTML = `${horas}:${minutos}:${segundos}`

    var estancia = 0

    if (horas >= 5 && horas < 12) {
        estancia = 0
    } else if (horas >= 12 && horas < 16) {
        estancia = 1
    } else if (horas >= 16 && horas < 19) {
        estancia = 2
    } else {
        estancia = 3
    }

    document.querySelector('.ativo').classList.remove('ativo')
    switch (estancia) {
        case 0:
            document.getElementById('manha').classList.add('ativo')
            document.body.style.backgroundColor = '#64C2EE'
            break
        case 1:
            document.getElementById('meiodia').classList.add('ativo')
            document.body.style.backgroundColor = '#64C2EE'
            break
        case 2:
            document.getElementById('tarde').classList.add('ativo')
            document.body.style.backgroundColor = '#EECE64'
            break
        case 3:
            document.getElementById('noite').classList.add('ativo')
            document.body.style.backgroundColor = '#222249'
            break
        default:
            document.write('erro')
    }
}

setInterval(atualizar_horario, 1000)
atualizar_horario()
