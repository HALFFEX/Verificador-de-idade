function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('idade')
    var resultado = document.querySelector('div#resultado')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] verifique os dados e tente novamente') 
    } else {
        var sex = document.getElementsByName('sexo')
        var idade = ano - fano.value
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', 'img/foto-bebe-m.png')
                genero = 'Homem criança'
            } else if (idade < 21) {
                img.setAttribute('src', 'img/foto-jovem-m.png')
                genero = 'Homem jovem'
            } else if (idade < 50) {
                img.setAttribute('src', 'img/foto-adulto-m.png')
                genero = 'Homem adulto'
            } else {
                img.setAttribute('src', 'img/foto-idoso-m.png')
                genero = 'Homem idoso'
            } 
        } else if (sex[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', 'img/foto-bebe-f.png')
                genero = 'Mulher criança'
            } else if (idade < 21) {
                img.setAttribute('src', 'img/foto-jovem-f.png')
                genero = 'Mulher jovem'
            } else if (idade < 50) {
                img.setAttribute('src', 'img/foto-adulto-f.png')
                genero = 'Mulher adulta'
            } else {
                img.setAttribute('src', 'img/foto-idoso-f.png')
                genero = 'Mulher idosa'
            } 
        }
        resultado.style.textAlign = 'center'
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        resultado.appendChild(img)
    }
}