const letter= [
    'q',
    's',
    'd',
    'p',
    'g',
    'h',
    'j',
    'k',
    'l'
];


function playAudio(event){
    const audio = document.querySelector(`audio[data-key="${event.key}"]`);
    const key = document.querySelector(`div[data-key="${event.key}"]`);
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}

window.addEventListener('keydown',  playAudio);



//function removeTransition(e) {
//    if (e.propertyName !== 'transform') return;
//    e.target.classList.remove('playing');
//}
//function playSound(e) {
//    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
//    if (!audio) return;
//    key.classList.add('playing');
//    audio.currentTime = 0;
//    audio.play();
//}
//const keys = Array.from(document.querySelectorAll('.key'));
//keys.forEach(key => key.addEventListener('transitionend', removeTransition));
//window.addEventListener('keydown', playSound);