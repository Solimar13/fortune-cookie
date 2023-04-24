const closedCookie = document.querySelector('.closed-cookie');
const openedCookie = document.querySelector('.opened-cookie');
const btnTryAgain = document.querySelector(".btnTryAgain");
const phrase = document.querySelector('.phrase');
const arrayPhrases = [
    'Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.',
    'A persistência realiza o impossível.',
    'Não se desespere quando a caminhada estiver difícil, é sinal de que você está no caminho certo.',
    'No meio da dificuldade encontra-se a oportunidade.',
    'Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.',
    'Imagine uma nova história para sua vida e acredite nela.',
    'O insucesso é apenas uma oportunidade para recomeçar com mais inteligência.',
    'Quer você acredite que consiga fazer uma coisa ou não, você está certo.',
    'Acredite que você pode, assim você já está no meio do caminho.',
    'A verdadeira motivação não é aquilo que te anima, mas aquilo que te transforma.'
];
let randomNumber = Math.round(Math.random() * 10);

closedCookie.addEventListener("click", function() {
    toggleCookies();
    phrase.innerText = arrayPhrases[randomNumber];
})

btnTryAgain.addEventListener("click", function() {
    toggleCookies();
    randomNumber = Math.round(Math.random() * 10);   
})

function toggleCookies() {
    closedCookie.classList.toggle('hide');
    openedCookie.classList.toggle('hide');
}
