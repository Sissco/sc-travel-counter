let saveEl = document.getElementById("save-el")
let saveBtn = document.getElementById('save-btn')
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    if ( count === 0 ) {
        saveBtn.removeEventListener("click", save)
    } else {
        let countStr = count + " - "
        saveEl.textContent += countStr
        countEl.textContent = 0
        count = 0
    }
}


