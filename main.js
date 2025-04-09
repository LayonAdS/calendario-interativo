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

}