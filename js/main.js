const clicarshow = document.querySelectorAll('.card-ask__answer-p-answer');
const pergunta = document.querySelectorAll('.card-ask__answer-p-ask')


const botaoshow = document.querySelectorAll('.showMessage')

for(let i = 0; i < botaoshow.length; i++){
    const botao = botaoshow[i];
    const clickAparecer = clicarshow[i];
    
    botao.onclick = function(){
        clickAparecer.style.display = 'block';
        // if (botaoshow.onclick == 'ativa'){
        //     botaoshow.onclick = cliclarshow.style.display ='none';
        // }
    }
}
