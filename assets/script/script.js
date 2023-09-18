function calculadora() {

    function calcular() {
//-------------------------------------Declarando a,b,c-----------------------------------------------
        const varA = document.querySelector('#coeficientAngular');
        const varB = document.querySelector('#coeficientLinear');
        const varC = document.querySelector('#independente');
//----------------------------------------------------------------------------------------------------
        let calculoDiscriminante = Math.pow(varB.value, 2) - 4 * varA.value * varC.value; // b² - 4.a.c
        let raizDiscriminante = Number(Math.sqrt(calculoDiscriminante).toFixed(1));
//---------------------------------------Atribuindo os dados aos calculos da descrição-------------------
        const textoA = document.querySelectorAll('.a');
        const textoB = document.querySelectorAll('.b');
        const textoC = document.querySelectorAll('.c');
        const textoDelta = document.querySelectorAll('.delta');
        const valorX1 = document.querySelectorAll('.valorx1');
        const valorX2 = document.querySelectorAll('.valorx2');
        const bQuadrado = document.querySelectorAll('.bquadrado');
        const vezesAC = document.querySelector('#multiplica');
        const resultadoX1 = document.querySelectorAll('.resultadox1');
        const resultadoX2 = document.querySelectorAll('.resultadox2');
        const resultado2x1 = document.querySelectorAll('.resultado2x1');
        const deltaRaiz = document.querySelectorAll('.deltaraiz');
        const deltaRaiz1 = document.querySelectorAll('.delta1');
        const aparecerRaizes = document.querySelectorAll('.selecionado');
        const operadorAC = document.querySelector('.operadorAC');
        const formulinha1 = document.querySelector('.formulinha1');
        const formulinha2 = document.querySelector('.formulinha2');
//--------------Funções Validações-----------------------        
        function erroValidacao(input) {
            // const divPai = input.parentElement; // faz com que a constante "divPai" selecione o pai do elemento do parâmetro input, neste caso, a div em que ele está alocado.
            // const error = divPai.querySelector("span")
            // error.innerHTML = mensagem //iria transformar o span na mensagem que eu daria como argumento para o parâmetro
            input.className = "erro"; //Estou fazendo com que a classe do elemento pai seja reatribuido.
        }

        function preenchidoValidacao(input) { 
            input.className = "preenchido";
        }
//---------------------Condições-------------------------------- 

       if(isNaN(varA.value)
       || varA.value === null 
       || varA.value === ""
       || varA.value === undefined) {
        erroValidacao(varA);
       } else {
        textoA.forEach(textoA => {textoA.textContent = varA.value.trim();}); //trim remove todos os espaços em branco
        preenchidoValidacao(varA);
    }
        if(isNaN(varB.value) 
        || varB.value === null 
        || varB.value === ""
        || varB.value === undefined) {
         erroValidacao(varB);
        } else {
        textoB.forEach(textoB => {textoB.textContent = varB.value.trim();});
        preenchidoValidacao(varB);
    }

        if(isNaN(varC.value) 
        || varC.value === null 
        || varC.value === ""
        || varC.value === undefined) {
         erroValidacao(varC);
        } else {
        textoC.forEach(textoC=> {textoC.textContent = varC.value.trim();});
        preenchidoValidacao(varC);
    }
//----------------------Criando os calculos para os outros resultados------------------------------- 
        const formulax1 = ((-varB.value + raizDiscriminante) / (2 * varA.value)).toFixed(2);
        const formulax2 = ((-varB.value - raizDiscriminante) / (2 * varA.value)).toFixed(2);
        const bQuadradoValor = Math.pow(varB.value, 2).toFixed(0);
        const vezesACValor =  (-4 * varA.value * varC.value);
        const resultadox1Valor = (-varB.value + raizDiscriminante);
        const resultado2x1Valor = 2 * varA.value;
        const resultadox2Valor = (-varB.value - raizDiscriminante);
        const deltaRaizValor = raizDiscriminante;
//---------------------Atribuindo os valores para o HTML + condições extras-------------------------------------------
    if(calculoDiscriminante < 0) {
        valorX1.forEach(valorX1=>{valorX1.textContent = "s/raízes reais";});
        valorX2.forEach(valorX2=>{valorX2.textContent = "s/raízes reais";});

        const deltaNegativo = document.querySelectorAll('.dupla li');

        deltaNegativo.forEach(deltaNegativo=>{deltaNegativo.className = "deltanegativo";});

    } else if(isNaN(varA.value)
    || varA.value === null 
    || varA.value === ""
    || varA.value === undefined
    || isNaN(varB.value) 
    || varB.value === null 
    || varB.value === ""
    || varB.value === undefined
    || isNaN(varC.value) 
    || varC.value === null 
    || varC.value === ""
    || varC.value === undefined){
        valorX1.forEach(valorX1=>{valorX1.textContent = "resultado";});
        valorX2.forEach(valorX2=>{valorX2.textContent = "resultado";});
    } else {
        valorX1.forEach(valorX1=>{valorX1.textContent = formulax1;});
        valorX2.forEach(valorX2=>{valorX2.textContent = formulax2;});
    }

    if(varB.value < 0){
        const operadorB = document.querySelectorAll('.operadorB');
        operadorB.forEach(operadorB=>{operadorB.textContent = "";});
    }

    if(varC.value < 0){
        const operadorC = document.querySelectorAll('.operadorC');
        operadorC.forEach(operadorC=>{operadorC.textContent = "";});
    }


    if(isNaN(varA.value)
    || varA.value === null 
    || varA.value === ""
    || varA.value === undefined
    || isNaN(varB.value) 
    || varB.value === null 
    || varB.value === ""
    || varB.value === undefined
    || isNaN(varC.value) 
    || varC.value === null 
    || varC.value === ""
    || varC.value === undefined){
        
} else {
    bQuadrado.forEach(bQuadrado=>{bQuadrado.textContent = bQuadradoValor;});
    resultadoX1.forEach(resultadoX1=>{resultadoX1.textContent = resultadox1Valor;});
    resultadoX2.forEach(resultadoX2=>{resultadoX2.textContent = resultadox2Valor;});
    resultado2x1.forEach(resultado2x1=>{resultado2x1.textContent = resultado2x1Valor;});
    deltaRaiz.forEach(deltaRaiz=>{deltaRaiz.textContent = deltaRaizValor;});

    if(calculoDiscriminante < 0) {
        formulinha1.textContent = "s/raízes reais";
        formulinha2.textContent = "s/raízes reais";
        aparecerRaizes.forEach(aparecerRaizes=>{aparecerRaizes.className="selecionado";});
    } else {
        aparecerRaizes.forEach(aparecerRaizes=>{aparecerRaizes.className = "osli";});
    }

    if(vezesACValor < 0) {
        operadorAC.textContent = "";
        vezesAC.textContent = vezesACValor;
    } else {
        vezesAC.textContent = vezesACValor;
    }
} 

        if(isNaN(varA.value)
        || varA.value === null 
        || varA.value === ""
        || varA.value === undefined
        || isNaN(varB.value) 
        || varB.value === null 
        || varB.value === ""
        || varB.value === undefined
        || isNaN(varC.value) 
        || varC.value === null 
        || varC.value === ""
        || varC.value === undefined){
        textoDelta.forEach(textoDelta=>{textoDelta.textContent = "resultado";});
        deltaRaiz1.forEach(deltaRaiz1=>{deltaRaiz1.textContent = "Δ";});
            } else {
        textoDelta.forEach(textoDelta=>{textoDelta.textContent = calculoDiscriminante;});
        deltaRaiz.forEach(deltaRaiz=>{deltaRaiz.textContent = deltaRaizValor;});
         }
    }
    calcular();
}

function limpar() {

    const varA = document.querySelector('#coeficientAngular');
    const varB = document.querySelector('#coeficientLinear');
    const varC = document.querySelector('#independente');

    varA.value = "";
    varB.value = "";
    varC.value = "";

    function retornarValores() {
        const textoA = document.querySelectorAll('.a');
        const textoB = document.querySelectorAll('.b');
        const textoC = document.querySelectorAll('.c');
        const textoDelta = document.querySelectorAll('.delta');
        const valorX1 = document.querySelectorAll('.valorx1');
        const valorX2 = document.querySelectorAll('.valorx2');
        const operadorB = document.querySelectorAll('.operadorB');
        const operadorC = document.querySelectorAll('.operadorC');
        const sumir = document.querySelectorAll('.osli');
        // const formulinha = document.querySelectorAll('.formulinha');
        const bQuadrado = document.querySelectorAll('.bquadrado');
        const vezesAC = document.querySelectorAll('#multiplica');
        const operadorAC = document.querySelector('.operadorAC');
        const formulinha1 = document.querySelector('.formulinha1');
        const formulinha2 = document.querySelector('.formulinha2');

        textoA.forEach(textoA =>{textoA.textContent = 'a';});
        textoB.forEach(textoB =>{textoB.textContent = 'b';});
        textoC.forEach(textoC =>{textoC.textContent = 'c';});
        textoDelta.forEach(textoDelta =>{textoDelta.textContent = "resultado";});
        valorX1.forEach(valorX1=>{valorX1.textContent = "resultado";});
        valorX2.forEach(valorX2=>{valorX2.textContent = "resultado";});
        bQuadrado.forEach(bQuadrado=>{bQuadrado.textContent = "b";});
        vezesAC.forEach(vezesAC=>{vezesAC.textContent = "4.a.c";});
        operadorAC.textContent = "-"

        varA.className = "preenchido";
        varB.className = "preenchido";
        varC.className = "preenchido";

        operadorB.forEach(operadorB=>{operadorB.textContent = "+ ";});
        operadorC.forEach(operadorC=>{operadorC.textContent = "+ ";});

        sumir.forEach(sumir=>{sumir.className = "selecionado";});
        formulinha1.textContent = "(-b + √Δ) / (2.a)";
        formulinha2.textContent = "(-b - √Δ) / (2.a)";
    }
    retornarValores();
}