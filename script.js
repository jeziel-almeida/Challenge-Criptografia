/* Regras Codificador: 
"e" é convertido para "enter" 
"i" é convertido para "imes"
"a" é convertido para "ai"
"o" é convertido para "ober"
"u" é convertido para "ufat"
Apenas letras minúsculas
Não permite acentuação   
*/

/* Regras Decodificador: 
"enter" é convertido para "e" 
"imes" é convertido para "i"
"ai" é convertido para "a"
"ober" é convertido para "o"
"ufat" é convertido para "u"
Apenas letras minúsculas
Não permite acentuação     
*/

//bloqueador de caracteres maiúsculos, 0-9 e caracteres especiais:
const brandInput = document.querySelector("#input-texto");
brandInput.addEventListener("keypress", function(e) {

    if(!checkChar(e)) {
        e.preventDefault();
    }
});

function checkChar(e) {

    const char = String.fromCharCode(e.keyCode);

    const pattern = '[a-z]';

    if(char.match(pattern)) {
        console.log(char);
        return true;
    }
}

//Botão criptografar a mensagem:
const btnCripto = document.querySelector("#btn-cripto");

btnCripto.addEventListener("click", function(e) {

    e.preventDefault();

    const name = document.querySelector("#input-texto");

    const value = name.value;

    var texto = value;

    texto = texto.replace(/e/g, "enter");
    texto = texto.replace(/i/g, "imes");
    texto = texto.replace(/a/g, "ai");
    texto = texto.replace(/o/g, "ober");
    texto = texto.replace(/u/g, "ufat");

    document.getElementById("msg").value = texto;
    console.log(texto);

    document.getElementById("msgcripto").innerHTML = "Mensagem criptografada:"
})


//Botão descriptografar a mensagem:
const btnDescripto = document.querySelector("#btn-descripto");

btnDescripto.addEventListener("click", function(e) {

    e.preventDefault();

    const name = document.querySelector("#input-texto");

    const value = name.value;

    var texto = value;

    texto = texto.replace(/enter/g, "e");
    texto = texto.replace(/imes/g, "i");
    texto = texto.replace(/ai/g, "a");
    texto = texto.replace(/ober/g, "o");
    texto = texto.replace(/ufat/g, "u");

    document.getElementById("msg").value = texto;
    console.log(texto);

    document.getElementById("msgcripto").innerHTML = "Mensagem descriptografada:"
})

//Botão para selecionar e copiar para a área de transferência:
let btnCopy = document.querySelector("#btn-copy");

btnCopy.addEventListener("click", function(e) {

    e.preventDefault();

    let mensagem = document.querySelector("#msg");
    mensagem.select();
    mensagem.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Texto copiado.");
})