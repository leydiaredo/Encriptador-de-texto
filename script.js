const llaves = [
    ['e', 'enter'], 
    ['i', 'imes'],  
    ['a', 'ai'],    
    ['o', 'ober'],  
    ['u', 'ufat']   
];

function verificarMinusculasAcentos(){
    var textoIngresado = document.querySelector('.texto-area').value;
    var textoAVerificar = textoIngresado;

    let lista = ['ñ', '\n', ' ']
    for(let c=0;c<3;c++){
        textoAVerificar = textoAVerificar.split(lista[c]).join("");
    }

    if(!(/^[a-z]+$/.test(textoAVerificar))){
        document.querySelector('.alerta-parrafo').style.color = 'red';
        document.querySelector('.texto-area').value = '';
        document.querySelector('.area-muneco').style.display = '';
        document.querySelector('.resultado').value = '';
        document.querySelector('.btn-copiar').style.display = 'none';
        if(window.innerWidth <= 768 && window.innerWidth > 500){
            document.querySelector('.resultado').style.borderBottom = '32px solid transparent';
            let iT = document.querySelector('.resultado');
            iT.style.height = '69px';
        }
        if(window.innerWidth <= 500){
            document.querySelector('.resultado').style.borderBottom = '32px solid transparent';
            let iT = document.querySelector('.resultado');
            iT.style.height = '122px';
        }
    }
    else{
        document.querySelector('.alerta-parrafo').style.color = '#495057';
        document.querySelector('.area-muneco').style.display = 'none';
        document.querySelector('.texto-area').value = '';
        document.querySelector('.btn-copiar').style.display = '';
        return textoIngresado;
    }
}

function encriptar(){
    var mensajeAEncriptar = verificarMinusculasAcentos();
    var mensajeEncriptado = '';
    let coincidencia = false;
    for(let c=0;c<mensajeAEncriptar.length;c++){
        for(let i=0;i<5;i++){
            if(mensajeAEncriptar[c] == llaves[i][0]){
                mensajeEncriptado += llaves[i][1];
                coincidencia = true;
            }
        }
        if(coincidencia == false){
            mensajeEncriptado += mensajeAEncriptar[c];
        }
        coincidencia = false;
    }
    document.querySelector('.resultado').value = mensajeEncriptado;
    document.querySelector('.btn-copiar').style.display = '';
}

function desencriptar(){
    var mensajeADesencriptar = verificarMinusculasAcentos();
    var mensajeDesencriptado = '';
    let coincidencia = false;
    let x = 0;
    for(let c=0;c<mensajeADesencriptar.length;c++){
        for(let i=0;i<5;i++){
            if(mensajeADesencriptar.slice(c, llaves[i][1].length + c) == llaves[i][1]){
                mensajeDesencriptado += llaves[i][0];
                c += llaves[i][1].length - 1;
                coincidencia = true;
            }
        }
        if(coincidencia == false){
            mensajeDesencriptado += mensajeADesencriptar[c];
        }
        coincidencia = false;
    }
    document.querySelector('.resultado').value = mensajeDesencriptado;
}

function copiar(){
    var textoCopiado = document.querySelector('.resultado');

    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999); 

    navigator.clipboard.writeText(textoCopiado.value);
}

function expandirMensajeProcesadoTablet(){
    if(window.innerWidth <= 768 && window.innerWidth > 500){
        document.querySelector('.resultado').style.borderBottom = '131px solid transparent';

        let iT = document.querySelector('.resultado');
        iT.style.height = '69px';
        iT.style.height = `${iT.scrollHeight}px`;

        let bC = document.querySelector('.btn-copiar');
        if(iT.scrollHeight <= 180){
            bC.style.top = (parseInt('64px') + iT.scrollHeight) + 'px';
        } else{
            bC.style.top = '244px';
        }
    }
}

function expandirMensajeProcesadoCel(){
    if(window.innerWidth <= 500){
        document.querySelector('.resultado').style.borderBottom = '131px solid transparent';

        let iT = document.querySelector('.resultado');
        iT.style.height = '122px';
        iT.style.height = `${iT.scrollHeight}px`;

        let bC = document.querySelector('.btn-copiar');
        if(iT.scrollHeight <= 432){
            bC.style.top = (parseInt('112px') + iT.scrollHeight) + 'px';
        } else{
            bC.style.top = '544px';
        } 
    }
}

function expandirIngresarTextoCel(){
    if(window.innerWidth <= 500){
        let iT = document.querySelector('.texto-area');
        iT.style.height = '232px';
        iT.style.height = `${iT.scrollHeight}px`;
    }
}

function comprimirIngresarTextoCel(){
    if(window.innerWidth <= 500){
        let iT = document.querySelector('.texto-area');
        iT.style.height = '232px';
    }
}
