const clicarshow = document.querySelectorAll('.card-ask__answer-p-answer');
const pergunta = document.querySelectorAll('.card-ask__answer-p-ask')


const botaoshow = document.querySelectorAll('.showMessage')

for(let i = 0; i < botaoshow.length; i++){
    const botao = botaoshow[i];
    const clickAparecer = clicarshow[i];
    
    botao.onclick = function(){
        if (clickAparecer.style.display == 'none'){
            clickAparecer.style.display = 'block'
        }else{
            clickAparecer.style.display = 'none'
        }
    }
}
