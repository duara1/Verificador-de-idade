function Verificar() {
    var anoAtual = new Date().getFullYear();
    var anoNascimento = document.getElementById("numAno").value;
    var sexo = document.getElementsByName("sexo");
    var resu = document.getElementById("resu");
    var img = document.getElementById("img")

    if (anoNascimento.length < 1900 || anoNascimento > anoAtual) {
        resu.innerHTML = '[ERRO] Verifique os dados e tente novamente.';
    }

    var idade = anoAtual - Number(anoNascimento);
    var genero = '';

    if (sexo[0].checked) {
        genero = 'Homem'
    } else {
        genero = 'Mulher'
    }

    resu.innerHTML = `Detectamos ${genero} com ${idade} anos.`

    if (idade < 12) {
        if (genero == 'Homem') {
            img.src = "https://images.pexels.com/photos/1416736/pexels-photo-1416736.jpeg"
        } else {
            img.src = "https://images.pexels.com/photos/1912868/pexels-photo-1912868.jpeg"
        }
    }

    if (idade >= 12 && idade < 18) {
        if (genero == 'Homem') {
            img.src = "https://images.pexels.com/photos/4144099/pexels-photo-4144099.jpeg"
        } else {
            img.src = "https://images.pexels.com/photos/6214726/pexels-photo-6214726.jpeg"
        }
    }

    if (idade >= 18 && idade < 60) {
        if (genero == 'Homem') {
            img.src = "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg"
        } else {
            img.src = "https://images.pexels.com/photos/1089164/pexels-photo-1089164.jpeg"
        }
    }

    if (idade > 60) {
        if (genero == 'Homem') {
            img.src = "https://images.pexels.com/photos/6787934/pexels-photo-6787934.jpeg"
        } else {
            img.src = "https://images.pexels.com/photos/5704852/pexels-photo-5704852.jpeg"
        }
    }
}




