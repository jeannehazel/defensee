
const rightDiv = (image) => {
    let div = document.createElement("div")
    div.className = "classRight"
    div.innerHTML = `<img src="./${image}" >`

    return div
}

export { rightDiv }
