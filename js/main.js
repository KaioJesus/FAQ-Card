const clicarshow = document.querySelectorAll('.card-ask__answer-p-answer');
const pergunta = document.querySelector('.card-ask__answer-p-ask')


const botaoshow = document.querySelectorAll('.showMessage')

for(let i = 0; i < botaoshow.length; i++){
    const botao = botaoshow[i];
    
    botaoshow.onclick = function(){
        clicarshow.style.display = 'block';
        // if (botaoshow.onclick == 'ativa'){
        //     botaoshow.onclick = cliclarshow.style.display ='none';
        // }
    }
}
