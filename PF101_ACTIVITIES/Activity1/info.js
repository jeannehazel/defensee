

const leftDiv= (title, para1, title2, para2, button1, button2, button3, button4) =>{
    let div= document.createElement("div")
    div.className= "classLeft"
    div.innerHTML = `<h1>${title}</h1>
                    <p>${para1}</p>
                    <h1>${title2}</h1>
                    <p>${para2}</p>
                    <button>${button1}</button>
                    <button>${button2}</button>
                    <button>${button3}</button>
                    <button>${button4}</button>`

            return div

}

export {leftDiv}