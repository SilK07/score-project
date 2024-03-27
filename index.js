let home = document.getElementById("score-home")
let away = document.getElementById("score-away")

let count1 = 0
function plusOneH() {
    count1 += 1
    home.textContent = count1
}

function plusTwoH() {
    count1 += 2
    home.textContent = count1
}

function plusThreeH() {
    count1 += 3
    home.textContent = count1
}

function diffOneH() {
    count1 -= 1
    home.textContent = count1
}

function diffTwoH() {
    count1 -= 2
    home.textContent = count1
}

function diffThreeH() {
    count1 -= 3
    home.textContent = count1
}

let count2 = 0
function plusOneA() {
    count2 += 1
    away.textContent = count2
}

function plusTwoA() {
    count2 += 1
    away.textContent = count2
}

function plusThreeA() {
    count2 += 3
    away.textContent = count2
}

function diffOneA() {
    count2 -= 1
    away.textContent = count2
}

function diffTwoA() {
    count2 -= 2
    away.textContent = count2
}

function diffThreeA() {
    count2 -= 3
    away.textContent = count2
}