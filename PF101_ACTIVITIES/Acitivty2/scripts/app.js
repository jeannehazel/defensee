import { imgfun } from "./img.js"
import { infofunc } from "./info.js"
import { infofunc2 } from "./info.js"
import { cardfunc } from "./card.js"

let sec1 = document.getElementById('section1')
let sec2 = document.getElementById('section2')

let obj1 = {
    title   : "JEANNE",
    par     : "I am a hard-working and driven individual who isn't afraid to face a challenge. I'm passionate with what did.I would describe myself as an open and honest person who doesn't believe in misleading other people and tries to be fair in everything I do.",
    button  : "Contact me",
    img     : "./images/1.jpg"
}

const { title, par, button, img } = obj1

let obj2 = {
    image   : "./images/2.jpg",
    desc    : "This is our project during our KKK exhibit",
    button1 : "learn more",
    title2  : "Project Complete"
}

const { image, desc, button1, title2 } = obj2

section1.append(infofunc(title, par, button))
section1.append(imgfun(img))
section3.append(infofunc2(title2))
section2.append(cardfunc(image, desc, button1))
section2.append(cardfunc(image, desc, button1))
section2.append(cardfunc(image, desc, button1))