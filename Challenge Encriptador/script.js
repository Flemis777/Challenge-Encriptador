const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";
    alterarBackground();
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e" , "enter"], ["i" , "imes"], ["a" , "ai"], ["o" , "ober"], ["u" , "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();
    
    for(let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);           
        }
    }
    return stringEncriptada;
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = "";
    alterarBackground();
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e" , "enter"], ["i" , "imes"], ["a" , "ai"], ["o" , "ober"], ["u" , "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();
    
    for(let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);           
        }
    }
    return stringDesencriptada;
}

function alterarBackground() {
    const imagemInicial = "url('/imagens/boneco.png')";
    if (mensagem.value !== "") {
        mensagem.style.backgroundImage = "none";
    } else {
        mensagem.style.backgroundImage = imagemInicial;
    }
}

function copiarTexto() {
    mensagem.select();
    document.execCommand("copy");
    alert("Texto copiado para a área de transferência!");
    mensagem.value = "";
    alterarBackground();
}
