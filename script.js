//show images on hover- will add to website once all projects done - unfinished code
function hoverElement(event) {
    console.log(event);
}

let image = document.querySelector('.image');
    image.addEventListener("mouseover", hoverElement);





/*TEXT ANIMATION FROM JUSTINS DEMO*/
console.log('Hello, world') //log hello world to make sure javascript is working/responding

function createLetters(){ //create function
const elements = document.getElementsByClassName("text-effect"); //use DOM and constant to get everything in text-effect from CSS

console.log(elements); //log the elements constant that you just defined

for (const element of elements) { //create a for in statement (variable in object - variable in effects) *still a little confused about this
    const original_text = element.innerText; //create a constant for original text with innerText assigned to element variable ()
    console.log(original_text); //log original text
    const changed_text = original_text.replace( //make constant changed text to replace original text
        /./g, //use g modifier to find ALL matches rather than just stopping at the first match - still a little confused about this one
        '<span class="letter">$&</span>' //this is where we are getting all matches from
    );

    element.innerHTML = changed_text; //the element variable replaced with changed text
}
}

createLetters(); //calling function 



