function sorteio() {

    //GERAÇÃO DO NÚMERO ALEATÓRIO
    var min = 1
    var max = 14
    var resultado = document.getElementById("p-resultado")
    min = Math.ceil(min)
    max = Math.floor(max)
    var num_aleatorio = Math.floor(Math.random() * (max - min + 1)) + min

    /*
        0 - VAZIO
        1 - O ENFERMEIRO DA NOITE
        2 - FRAGMENTADO
        3 - O CHAMADO
        4 - O QUE FICOU PRA TRÁS
        5 - THE TRIP
        6 - NÓS
        7 - CORRA
        8 - O POÇO
        9 - O CONDE
        10 - ILHA DO MEDO
        11 - A BRUXA
        12 - INVOCAÇÃO DO MAL
        13 - TIN E TINA
        14 - BELA VINGANÇA
     */

    //CRIAÇÃO DO ARRAY COM OS NOMES DOS FILMES
    var filmes = [ , "O ENFERMEIRO DA MEIA NOITE", "FRAGMENTADO", "O CHAMADO", "O QUE FICOU PARA TRÁS", "THE TRIP", "NÓS", "CORRA", "O POÇO", "O CONDE", "ILHA DO MEDO", "A BRUXA", "INVOCAÇÃO DO MAL", "TIN E TINA", "BELA VINGANÇA"]

    //TESTE CONDICIONAL PARA ADICIONAR IMAGENS DE ACORDO COM O FILME
    var img = document.getElementById("imagem")
    
    if(num_aleatorio == 1){
        img.src = 'imagens/enfermeiro-da-noite.png'
        resultado.innerHTML = filmes[num_aleatorio]
    }else if(num_aleatorio == 2){
        img.src = 'imagens/fragmentado.png'
        resultado.innerHTML = filmes[num_aleatorio]
    }else if(num_aleatorio == 3){
        img.src = 'imagens/chamado.png'
        resultado.innerHTML = filmes[num_aleatorio]
    }else if(num_aleatorio == 4){
        img.src = 'imagens/ficou-pra-tras.png'
        resultado.innerHTML = filmes[num_aleatorio]
    }else if(num_aleatorio == 5){
        img.src = 'imagens/the-trip.png'
        resultado.innerHTML = filmes[num_aleatorio]
    }else if(num_aleatorio == 6){
        img.src = 'imagens/nos.png'
        resultado.innerHTML = filmes[num_aleatorio]
    }else if(num_aleatorio == 7){
        img.src = 'imagens/corra.png'
        resultado.innerHTML = filmes[num_aleatorio]
    }else if(num_aleatorio == 8){
        img.src = 'imagens/poco.png'
        resultado.innerHTML = filmes[num_aleatorio]
    }else if(num_aleatorio == 9){
        img.src = 'imagens/conde.png'
        resultado.innerHTML = filmes[num_aleatorio]
    }else if(num_aleatorio == 10){
        img.src = 'imagens/ilha-medo.png'
        resultado.innerHTML = filmes[num_aleatorio]
    }else if(num_aleatorio == 11){
        img.src = 'imagens/bruxa.png'
        resultado.innerHTML = filmes[num_aleatorio]
    }else if(num_aleatorio == 12){
        img.src = 'imagens/invocacao.png'
        resultado.innerHTML = filmes[num_aleatorio]
    }else if(num_aleatorio == 13){
        img.src = 'imagens/tin-tina.png'
        resultado.innerHTML = filmes[num_aleatorio]
    }else{
        img.src = 'imagens/vinganca.png'
        resultado.innerHTML = filmes[num_aleatorio]
    }
}