//show images
function hoverElement(event) {
    console.log(event);
}

let image = document.querySelector('.image');
    image.addEventListener("mouseover", hoverElement);














//letters
console.log('Hello, world')

function createLetters(){
const elements = document.getElementsByClassName("text-effect");

console.log(elements);

for (const element of elements) {
    const original_text = element.innerText;
    console.log(original_text);
    const changed_text = original_text.replace(
        /./g,
        '<span class="letter">$&</span>'
    );

    element.innerHTML = changed_text;
}
}


createLetters();

let explosion_elements = [];
let r = 0;

function setupExplosion() {
    const elements = document.getElementsByClassName("explosive");
    for (const element of elements) {
        element.addEventListener("mouseenter", explosionRollover);
    }
}

function explosionRollover() {
    let letters = this.getElementsByClassName("letter");
    for (const letter of letters) {
        letter.r = 0;
        letter.deltaR = Math.random() * 5;
    }
    explosion_elements = letters;

    console.log(letters);
}

function step() {
    for (const element of explosion_elements) {
        element.r += 10;
        element.style.transform = `rotate(${r}deg)`;
    }
    requestAnimationFrame(step);
}

requestAnimationFrame(step);

setupExplosion();