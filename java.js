var pontuação = document.getElementById('pontuação')

function X() {

    pontuação = (pontuação-1)
    console.log(pontuação)
}

function A() {

    pontuação = (pontuação+1)
    console.log(pontuação)
}

function submit () {
    alert ("Sua Pontuação foi de " + pontuação)
    
    if (pontuação<6) {
        alert ('Reprovado :(')
    }
    
    if (pontuação >=6) {
        alert('Aprovado :D')
    }
}
