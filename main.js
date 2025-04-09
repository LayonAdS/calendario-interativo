function ColoriDia(){


let days = document.getElementById('days').value;

let color = document.getElementById('color').value;

let calendario = document.getElementById('calendario').value;

// verifica se o campo de dia foi preenchido
if(!days){
    alert("favor informar dia");

}else if((days > 0)&&(days <= 31)){

    //se o numero de dias esta no intervalo

    //aplicara a cor na celula do calendario

let td = calendar.getElementByTagName('td');

td.style.backgroundColor = color;
}else{

    // caso o usuario digite um numero fora de 1 a 31 do calendario

    alert("Favor digitar um dia do calendario");
}

// elemento para pegar uma celuca da tabela(guardar)
let elementos = document.querySelectorAll('td');
// declara e inicializa contadores
let contadorAzul = 0, contadorVerde = 0, contadorRosa = 0, contadorRoxo = 0;

// loop para verificar o estilo de cada celula e contar quantas tem cor e qual cor
for(let i=0;i<elementos.length;i++){
    var estilo = window.getComputedStyle(elementos[i]);
}

// obtem a cor de fundo atual da celula
var corEstilo = estilo.backgroundColor;

// verifica a cor e incrementa contador correspondente
if(corEstilo === "rgb(173, 216, 230)" || corEstilo === "lighblue"){
    contadorAzul++;
}else if(corEstilo === "rgb(152,215,152)" || corEstilo === "palegreen"){
    contadorVerde++;
}else if(corEstilo === "" || corEstilo === ""){
    
}
}