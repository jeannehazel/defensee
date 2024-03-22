import { leftDiv } from "./info.js"
import { rightDiv } from "./img.js"

let container = document.getElementById("container")

const data = {
    title: "My Dog",
    para1: "The dog is a pet animal. A dog has sharp teeth so that it can eat flesh very easily, it has four legs, two ears, two eyes, a tail, a mouth, and a nose. It is a very clever animal and is very useful in catching thieves. It runs very fast, barks loudly and attacks the strangers.",
    title2: "BERBER",
    para2: "Friendly, vicious, adorable, cute, fuzzy, smelly, obedient, loyal, protective, smart, ferocious, muscular, quiet, long, lean, Well chiseled, short, strong, massive, square, clean, lively, high-spirited, shaggy, smooth, wiry, intelligent, obedient, knowledgeable, exhuberant, playful, splendid, faithful ",
    button1: "About Us",
    button2: "About You",
    button3: "Contact Us",
    button4: "Contact You",
    image: "dog.jpg"

}

const{title, para1,title2, para2, button1, button2, button3, button4, image } = data

container.append(leftDiv(title, para1, title2,para2, button1, button2, button3, button4))
container.append(rightDiv(image))