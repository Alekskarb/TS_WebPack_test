import {data}  from "./data";
import '../public/assets/index.css';

const bg  = document.querySelector<HTMLDivElement>('.forest_bg');
const range = document.querySelector<HTMLInputElement>('input');
const images = document.querySelectorAll('.image');
const sounds = Array.from(document.querySelectorAll('audio'));
const pictures = document.querySelectorAll('img');
let volume = 0.2;

bg ? bg.style.backgroundImage = 'url(./assets/summer-bg.jpg)' : '';

function setVolume(e: any) {
    volume = e.target.value;
    sounds.find(a => {
        if (!a.paused)
            a.volume = volume;
    })
}

range!.addEventListener('click', setVolume);

function setBGandPlay() {
    pictures.forEach(pict => {
            pict.addEventListener('click', getEvent);
        }
    )
}

images.forEach(i => {
    i.addEventListener('click', setBGandPlay);
})

function getEvent(e: any) {
    images.forEach((image) => {
            if (e.target.alt === image.id) {
                bg!.style.backgroundImage = `url(${data[+image.id].img})`;
                sounds[+image.id].volume = volume;
                sounds[+image.id].paused
                    ? sounds[+image.id].play()
                    : sounds[+image.id].pause();
            } else {
                sounds[+image.id].load();
                sounds[+image.id].volume = volume;
            }
        }
    )
}