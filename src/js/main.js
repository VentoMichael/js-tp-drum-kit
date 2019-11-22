function playAudio(event){
    const audio = document.querySelector(`audio[data-key="${event.key}"]`);
    const key = document.querySelector(`div[data-key="${event.key}"]`);
    if (key){
        audio.currentTime = 0;
        audio.play();
        key.classList.add('playing');
        key.addEventListener("transitionend", function(event) {
            event.currentTarget.classList.remove('playing');
        });
    }
}


const buttons = document.querySelectorAll('.keys .key');
function changeBackground(event){
    for (let button of buttons){
        document.body.classList.add(`${event.key}`);
        button.addEventListener("transitionend", function() {
            document.body.classList.remove("q", "s", "d", "f", "g", "h", "j", "k", "l");
        });
    }
}

window.addEventListener('keydown',  playAudio);
document.body.addEventListener('keydown',  changeBackground);




